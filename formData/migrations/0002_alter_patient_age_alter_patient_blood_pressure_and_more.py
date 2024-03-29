# Generated by Django 4.2.7 on 2023-12-02 08:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('formData', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patient',
            name='age',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='patient',
            name='blood_pressure',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='patient',
            name='bmi',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='patient',
            name='diabetes_pedigree_function',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='patient',
            name='glucose',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='patient',
            name='insulin',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='patient',
            name='pregnancies',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='patient',
            name='skin_thickness',
            field=models.IntegerField(),
        ),
    ]
