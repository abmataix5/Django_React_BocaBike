# Generated by Django 4.0.1 on 2022-01-19 18:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bikes', '0002_rename_title_bike_available_remove_bike_description_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bike',
            old_name='available',
            new_name='state',
        ),
    ]
