# Generated by Django 4.0.1 on 2022-02-10 15:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0002_alter_profile_id'),
        ('bikes', '0003_alter_bike_station'),
        ('stations', '0012_slot_slot_state'),
        ('rents', '0007_alter_rent_options_remove_rent_day_remove_rent_hour_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rent',
            name='bike',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='bikes.bike'),
        ),
        migrations.AlterField(
            model_name='rent',
            name='station',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='stations.station'),
        ),
        migrations.AlterField(
            model_name='rent',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='profiles.profile'),
        ),
    ]
