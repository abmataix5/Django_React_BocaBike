from rest_framework import generics, mixins, status, viewsets
from rest_framework.exceptions import NotFound
from rest_framework.permissions import (
    AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly, IsAdminUser
)
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Bike
from .serializers import BikeSerializer


class ListBike(generics.ListAPIView):
    queryset = Bike.objects.all()
    pagination_class = None
    permission_classes = (AllowAny,)
    serializer_class = BikeSerializer

    def list(self, request):
        serializer_data = self.get_queryset()
        serializer = self.serializer_class(serializer_data, many=True)

        return Response({
            'bikes': serializer.data
        }, status=status.HTTP_200_OK)

""" 
class DetailBike(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bike.objects.all()
    serializer_class = BikeSerializer """