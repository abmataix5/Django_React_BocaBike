from rest_framework import serializers

from bikes import models
""" from stations import models """


class BikeSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'station',
            'state',
        )
        model = models.Bike

""" 
class StationSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'location',
            'available_bikes',
            'state',
        )
        model = models.Station """