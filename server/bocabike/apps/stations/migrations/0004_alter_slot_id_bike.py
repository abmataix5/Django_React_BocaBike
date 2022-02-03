# Generated by Django 4.0.1 on 2022-02-01 18:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bikes', '0003_alter_bike_station'),
        ('stations', '0003_slot'),
    ]

    operations = [
        migrations.AlterField(
            model_name='slot',
            name='id_bike',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='bikes', to='bikes.bike'),
        ),
    ]