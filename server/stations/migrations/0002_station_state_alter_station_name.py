# Generated by Django 4.0.1 on 2022-01-19 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stations', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='station',
            name='state',
            field=models.CharField(default='Ayuntamiento', max_length=200),
        ),
        migrations.AlterField(
            model_name='station',
            name='name',
            field=models.CharField(default='Ayuntamiento', max_length=200),
        ),
    ]
