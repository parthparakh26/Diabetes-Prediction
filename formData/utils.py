import joblib
import pandas as pd

def predict_diabetes(data):
    model = joblib.load('diabetes-prediction-model.pkl')
    scaler = joblib.load('scaler.pkl')

    feature_names = ['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age']
    input_data = pd.DataFrame([data], columns=feature_names)

    scaled_data = scaler.transform(input_data)

    prediction = model.predict(scaled_data)[0]

    return prediction
