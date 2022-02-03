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
from  bocabike.apps.core.permissions import IsOwner

class RentView(viewsets.GenericViewSet):

    serializer_class = RentSerializer

    def create(self, request):
        
        serializer_context = {
            'user': request.data['user'],
            'bike': request.data['bike'],
            'station': request.data['station'],
            'day':request.data['day'],
            'hour':request.data['hour'],
            'request': request
        }
      
        serializer_data = request.data
     
        serializer = self.serializer_class(
            data = serializer_data,
            context = serializer_context
        )

   
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
        

class RentsDestroyAPIView(generics.DestroyAPIView):
 
    permission_classes = (IsOwner,)
  

    def destroy(self, request, id=None):
        try:
            article = Rent.objects.get(id=request.data['id'])
            
        except Rent.DoesNotExist:
            raise NotFound('No existe reserva con ese id')

        article.delete()
        succes_messsage =  'Reserva eliminada con éxito'

        return Response(succes_messsage, status=status.HTTP_204_NO_CONTENT)