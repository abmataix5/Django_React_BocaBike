from rest_framework import generics, mixins, status, viewsets
from rest_framework.exceptions import NotFound
from rest_framework.permissions import (
    AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly, IsAdminUser
)
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Bike
from .serializers import BikeSerializer
from bocabike.apps.core.permissions import IsStaff


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



class DeleteUpdateBikes(APIView):

    queryset = Bike.objects.all()
    pagination_class = None
    permission_classes = (IsStaff,)
    serializer_class = BikeSerializer

  

    def delete(self, request, id):
        try:
            bike = Bike.objects.get(id=id)
        except Bike.DoesNotExist:
            return Response('Noe existe bici con esa id', status=404)

        bike.delete()
        return Response(None, status=status.HTTP_204_NO_CONTENT)


    def update(self,request,idSlot):
        print(idSlot)
        print(request.data)
        serializer_context = {'request': request}

        try:
            serializer_instance = Bike.objects.get(id=idSlot)
        except Bike.DoesNotExist:
            raise NotFound('No existe una bici con ese ID')
            
        serializer_data = request.data.get('bike', {})
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
