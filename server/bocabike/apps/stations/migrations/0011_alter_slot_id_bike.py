# Generated by Django 4.0.1 on 2022-02-10 11:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bikes', '0003_alter_bike_station'),
        ('stations', '0010_slot_slot_state'),
    ]

    operations = [
        migrations.AlterField(
            model_name='slot',
            name='id_bike',
            field=models.OneToOneField(blank=True, default='1', on_delete=django.db.models.deletion.DO_NOTHING, related_name='slots', to='bikes.bike'),
        ),
    ]