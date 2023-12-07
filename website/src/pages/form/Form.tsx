import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './Form.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface FormState {
  Pregnancies: number;
  Glucose: number;
  BloodPressure: number;
  SkinThickness: number;
  Insulin: number;
  BMI: number;
  DiabetesPedigreeFunction: number;
  Age: number;
}

const initialFormState: FormState = {
  Pregnancies: 0,
  Glucose: 0,
  BloodPressure: 0,
  SkinThickness: 0,
  Insulin: 0,
  BMI: 0,
  DiabetesPedigreeFunction: 0,
  Age: 0,
};

const fieldLabels: Record<keyof FormState, string> = {
  Pregnancies: 'Pregnancies',
  Glucose: 'Glucose',
  BloodPressure: 'Blood Pressure',
  SkinThickness: 'Skin Thickness',
  Insulin: 'Insulin',
  BMI: 'BMI',
  DiabetesPedigreeFunction: 'Diabetes Pedigree Function',
  Age: 'Age',
};

const fieldDescriptions: Record<keyof FormState, string> = {
  Pregnancies: 'Number of times pregnant',
  Glucose: 'Plasma glucose concentration a 2 hours in an oral glucose tolerance test',
  BloodPressure: 'Diastolic blood pressure (mm Hg)',
  SkinThickness: 'Triceps skin fold thickness (mm)',
  Insulin: '2-Hour serum insulin (mu U/ml)',
  BMI: 'Body mass index (weight in kg/(height in m)^2)',
  DiabetesPedigreeFunction: 'Diabetes pedigree function',
  Age: 'Age in years',
};

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [prediction, setPrediction] = useState<number | null>(null);
  const resultContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the result container when prediction is set
    if (prediction !== null && resultContainerRef.current) {
      resultContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [prediction]);

  const handleChange = (field: keyof FormState, value: string) => {
    const intValue = parseFloat(value);
    setFormData((prevData) => ({ ...prevData, [field]: isNaN(intValue) ? '' : intValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8000/formData/submit-form/',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      toast.success('Form submitted successfully');

      if (response.data.success) {
        setPrediction(response.data.prediction);
      }
    } catch (error) {
      toast.error('Failed to submit form');
      console.error('Error:', error);
    }
  };

  const getPredictionMessage = (): string => {
    if (prediction === 0) {
      return "The person is not Diabetic";
    } else if (prediction === 1) {
      return "The person is Diabetic";
    } else {
      return "Prediction result not available";
    }
  };

  return (
    <>
      <ToastContainer />
      <h1 className='form-header'>Diabetes Predictor</h1>
      <form className="my-form" onSubmit={handleSubmit} autoComplete='on'>
        {Object.keys(fieldLabels).map((field) => (
          <label key={field}>
            <span className="field-label">
              {fieldLabels[field as keyof FormState]}
              <span className="description-icon" title={fieldDescriptions[field as keyof FormState]}>
                <InfoOutlinedIcon className='info-field' sx={{ fontSize: 17 }} style={{ marginLeft: 5 }} />
              </span>
            </span>
            <input
              type="number"
              name={field}
              value={isNaN(formData[field as keyof FormState]) ? '' : formData[field as keyof FormState]}
              placeholder={`Enter ${fieldLabels[field as keyof FormState]} value`}
              onInput={(e) => handleChange(field as keyof FormState, e.currentTarget.value)}
              step="any"
              required
            />
          </label>
        ))}
        <button type="submit">Submit</button>
      </form>

      {prediction !== null && (
        <div className="result-container" ref={resultContainerRef}>
          <p className='prediction-result'>{getPredictionMessage()}</p>
        </div>
      )}
    </>
  );
};

export default Form;
