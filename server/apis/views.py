from django.shortcuts import render

# Create your views here.

from rest_framework import generics

from bikes import models
from .serializers import BikeSerializer

class ListBike(generics.ListCreateAPIView):
    queryset = models.Bike.objects.all()
    serializer_class = BikeSerializer


class DetailBike(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Bike.objects.all()
    serializer_class = BikeSerializer