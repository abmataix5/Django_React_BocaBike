from rest_framework import generics, mixins, status, viewsets
from rest_framework.exceptions import NotFound
from rest_framework.permissions import (
    AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly, IsAdminUser
)
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Station,Slot,Incident
from .serializers import IncidentSerializer, StationSerializer,SlotSerializer,StationListDetailSerializer
from rest_framework.generics import RetrieveAPIView

class ListStation(generics.ListAPIView):
    queryset = Station.objects.all()
    pagination_class = None
    permission_classes = (AllowAny,)
    serializer_class = StationListDetailSerializer

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

class ProfileRetrieveAPIView(RetrieveAPIView):
    permission_classes = (AllowAny,)
    queryset = Station.objects.select_related('station')
    serializer_class = StationSerializer

    def retrieve(self, request, username, *args, **kwargs):
        # Try to retrieve the requested profile and throw an exception if the
        # profile could not be found.
        try:
            profile = Station.queryset.get(id=request.data['id'])
        except Station.DoesNotExist:
            raise NotFound('A profile with this username does not exist.')

        serializer = self.serializer_class(profile, context={
            'request': request
        })

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



class SlotRentUpdateAPIView(generics.UpdateAPIView):


    permission_classes = (IsAuthenticated,)
    serializer_class = SlotSerializer


    def update(self,request,idSlot):
        print(idSlot)
        print(request.data)
        serializer_context = {'request': request}

        try:
            serializer_instance = Slot.objects.get(id=idSlot)
        except Slot.DoesNotExist:
            raise NotFound('No existe un slot con ese ID')
            
        serializer_data = request.data.get('slot', {})
        print(serializer_data)
        serializer = self.serializer_class(
            serializer_instance, 
            context=serializer_context,
            data=serializer_data, 
            partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)



class StationUpdateStateAPIView(generics.UpdateAPIView):


    permission_classes = (IsAuthenticated,)
    serializer_class = StationSerializer


    def update(self,request,idStation):
        print(idStation)
        print(request.data)
        serializer_context = {'request': request}

        try:
            serializer_instance = Station.objects.get(id=idStation)
        except Slot.DoesNotExist:
            raise NotFound('No existe una estación con ese ID')
            
        serializer_data = request.data.get('station', {})
        print(serializer_data)
        serializer = self.serializer_class(
            serializer_instance, 
            context=serializer_context,
            data=serializer_data, 
            partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)



class ListCreateIncidentAPIView(generics.ListCreateAPIView):

    queryset = Incident.objects.all()
    serializer_class = IncidentSerializer
    permission_classes = (IsAuthenticated,)


    def list(self, request):
        serializer_data = self.get_queryset()
        serializer = self.serializer_class(serializer_data, many=True)

        return Response({
            'incidents': serializer.data
        }, status=status.HTTP_200_OK)

    def create(self, request):
    
      
        serializer_context = {
            'user': request.user.profile.id,
            'station' : request.data['station'],
            'text' :request.data['text'],
         
            'request': request
        }

        
        serializer_data = request.data.get('incident',{})
     
        serializer = self.serializer_class(
            data = serializer_data,
            context = serializer_context
        )
        
   
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)