from rest_framework import generics, mixins, status, viewsets
from rest_framework.exceptions import NotFound
from rest_framework.permissions import (
    AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly, IsAdminUser
)
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Station
from .serializers import StationSerializer


class ListStation(generics.ListAPIView):
    queryset = Station.objects.all()
    pagination_class = None
    permission_classes = (AllowAny,)
    serializer_class = StationSerializer

    def list(self, request):
        serializer_data = self.get_queryset()
        serializer = self.serializer_class(serializer_data, many=True)

        return Response({
            'stations': serializer.data
        }, status=status.HTTP_200_OK)
