# Generated by Django 4.0.1 on 2022-02-08 12:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bikes', '0003_alter_bike_station'),
        ('stations', '0004_alter_slot_id_bike'),
    ]

    operations = [
        migrations.AddField(
            model_name='slot',
            name='slot_state',
            field=models.CharField(default='Ocupado', max_length=200),
        ),
        migrations.AlterField(
            model_name='slot',
            name='id_bike',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='slots', to='bikes.bike'),
        ),
    ]
