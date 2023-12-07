# Generated by Django 4.2.7 on 2023-12-02 19:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('formData', '0002_alter_patient_age_alter_patient_blood_pressure_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='patient',
            old_name='age',
            new_name='Age',
        ),
        migrations.RenameField(
            model_name='patient',
            old_name='bmi',
            new_name='BMI',
        ),
        migrations.RenameField(
            model_name='patient',
            old_name='blood_pressure',
            new_name='BloodPressure',
        ),
        migrations.RenameField(
            model_name='patient',
            old_name='diabetes_pedigree_function',
            new_name='DiabetesPedigreeFunction',
        ),
        migrations.RenameField(
            model_name='patient',
            old_name='glucose',
            new_name='Glucose',
        ),
        migrations.RenameField(
            model_name='patient',
            old_name='insulin',
            new_name='Insulin',
        ),
        migrations.RenameField(
            model_name='patient',
            old_name='pregnancies',
            new_name='Pregnancies',
        ),
        migrations.RenameField(
            model_name='patient',
            old_name='skin_thickness',
            new_name='SkinThickness',
        ),
    ]
