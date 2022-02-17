from rest_framework import generics, mixins, status, viewsets
from rest_framework.exceptions import NotFound
from rest_framework.permissions import (
    AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly, IsAdminUser
)
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Notification
from .serializers import  NotificationSerializer
from rest_framework.generics import RetrieveAPIView


# Create your views here.


class ListCreateNotificationAPIView(generics.ListCreateAPIView):

    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    permission_classes = (IsAuthenticated,)




    def list(self, request):

        serializer_context = {
            'user': request.user.profile.id
        }

        serializer = NotificationSerializer.GetNotificationOnlyUserLogged(context=serializer_context)

        return Response(serializer, status=status.HTTP_200_OK)

    def create(self, request):
    
      
        serializer_context = {
            'user_admin': request.user.profile.id,
            'incident' : request.data['incident'],
            'text' :request.data['text'],
         
            'request': request
        }

        print(serializer_context)
        serializer_data = request.data.get('notification',{})
     
        serializer = self.serializer_class(
            data = serializer_data,
            context = serializer_context
        )
        
   
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

        

class NotificationUpdateStateAPIView(generics.UpdateAPIView):


    permission_classes = (IsAuthenticated,)
    serializer_class = NotificationSerializer



    def update(self,request):
        
        print(request.data)
        
        """ print(request.data)
        serializer_context = {'request': request}

        try:
            serializer_instance = Notification.objects.get()
        except Notification.DoesNotExist:
            raise NotFound('No existe una estación con ese ID')
            
        serializer_data = request.data.get('notification', {})
       
        serializer = self.serializer_class(
            serializer_instance, 
            context=serializer_context,
            data=serializer_data, 
            partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save() """
