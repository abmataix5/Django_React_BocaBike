# Generated by Django 4.0.1 on 2022-02-10 14:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('stations', '0012_slot_slot_state'),
        ('rents', '0004_alter_rent_bike'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rent',
            name='station',
            field=models.ForeignKey(blank=True, default=1, null=True, on_delete=django.db.models.deletion.CASCADE, to='stations.station'),
        ),
    ]
