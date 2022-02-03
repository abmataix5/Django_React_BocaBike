from rest_framework import serializers
from django.db import models

from .models import Rent

class RentSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'user',
            'bike',
            'station',
            'day',
            'hour'
        )
        model = Rent
       

"""     def create(self, validate_data):
        
        user = self.context['user']
        bike = self.context['bike']
        station = self.context['station']

        rent = Rent.objects.create(
            user = user,
            bike = bike,
            station = station,
            
            **validate_data
        )

        return rent   """