from rest_framework import generics, mixins, status, viewsets
from rest_framework.exceptions import NotFound
from rest_framework.permissions import (
    AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly, IsAdminUser
)
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Station
from .serializers import StationSerializer,SlotSerializer,StationListDetailSerializer


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


class StationRetrieveAPIView(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    queryset = Station.objects.select_related('id')
    serializer_class = StationSerializer

    def retrieve(self, request, name, *args, **kwargs):
        try:
            post = self.queryset.get(bikes__id=id)
        except Station.DoesNotExist:
            return Response('A post with this author-name does not exist.', status=404)

        serializer = self.serializer_class(post, context={
            'request': request
        })
        print('*********** serializer.data ************')
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK)


class StationsBikeAPIView(generics.ListAPIView):


    lookup_field = 'name'     
    lookup_url_kwarg = 'name'
    queryset = Station.objects.all().prefetch_related('slots')
    permission_classes = (AllowAny,)
    serializer_class = StationListDetailSerializer


    def filter_queryset(self, queryset):
        filters = {self.lookup_field: self.kwargs[self.lookup_url_kwarg]}
        return queryset.filter(**filters)