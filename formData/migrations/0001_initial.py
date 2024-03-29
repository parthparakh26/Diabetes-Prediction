# Generated by Django 4.2.7 on 2023-11-30 13:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pregnancies', models.IntegerField(default=0)),
                ('glucose', models.IntegerField(default=0)),
                ('blood_pressure', models.IntegerField(default=0)),
                ('skin_thickness', models.IntegerField(default=0)),
                ('insulin', models.IntegerField(default=0)),
                ('bmi', models.FloatField(default=0)),
                ('diabetes_pedigree_function', models.FloatField(default=0)),
                ('age', models.IntegerField(default=0)),
            ],
        ),
    ]
