from rest_framework import serializers
from bikes import models


class BikeSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'description',
        )
        model = models.Bike