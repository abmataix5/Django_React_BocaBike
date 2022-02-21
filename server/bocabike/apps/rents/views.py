from django.template import context
from django.contrib import messages
from .serializers import RentSerializer
from rest_framework import generics, mixins, status, viewsets
from rest_framework.response import Response 
from .models import Rent
from rest_framework.exceptions import NotFound
from rest_framework.permissions import (
    AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly, IsAdminUser
)

from bocabike.apps.core.permissions import IsStaff
class RentView(generics.ListCreateAPIView):

    serializer_class = RentSerializer
    permission_classes = (IsStaff,)



    def list(self, request):

        

        serializer = RentSerializer.GetStatsMoreStationRent()

        return Response(serializer, status=status.HTTP_200_OK)

    def create(self, request):
    
    
        serializer_context = {
            'user': request.user.profile.id,
            'bike' :request.data['bike'],
            'station' : request.data['station'],
            'request': request
        }

        serializer_data = request.data.get('rent',{})
     
        serializer = self.serializer_class(
            data = serializer_data,
            context = serializer_context
        )
        
   
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
        

class RentsDestroyAPIView(generics.DestroyAPIView):
 
    permission_classes = (IsStaff,)
  

    def destroy(self, request, id=None):
        try:
            article = Rent.objects.get(id=request.data['id'])
            
        except Rent.DoesNotExist:
            raise NotFound('No existe reserva con ese id')

        article.delete()
        succes_messsage =  'Reserva eliminada con éxito'

        return Response(succes_messsage, status=status.HTTP_204_NO_CONTENT)



class RentBikeStatsView(generics.ListAPIView):

    serializer_class = RentSerializer
    permission_classes = (IsStaff,)



    def list(self, request):

    
        serializer = RentSerializer.GetStatsMoreBikeRent()

        return Response(serializer, status=status.HTTP_200_OK)


class RentuserStatsView(generics.ListAPIView):

    serializer_class = RentSerializer
    permission_classes = (IsStaff,)



    def list(self, request):

    
        serializer = RentSerializer.GetStatsMoreUserRent()

        return Response(serializer, status=status.HTTP_200_OK)