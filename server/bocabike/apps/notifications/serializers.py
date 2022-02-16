from rest_framework import serializers
from django.db import models
from bocabike.apps.profiles.serializers import ProfileSerializer
from bocabike.apps.stations.serializers import IncidentSerializer
from bocabike.apps.profiles.models import Profile
from bocabike.apps.stations.models import Incident
from rest_framework.exceptions import NotFound

from .models import Notification


class NotificationSerializer(serializers.ModelSerializer):

    user = ProfileSerializer(read_only = True)
    incident = IncidentSerializer(read_only = True)

    class Meta:
        fields = (
            'id',
            'incident',
            'user',
            'text',
            'state',
            'created_at'
       
        )
        model = Incident 


    def create(self, validated_data):
  

    

        try:
            id_user = self.context['user']
            user = Profile.objects.get(id= id_user)
        
        except Profile.DoesNotExist:
             raise NotFound('No existe usuario con ese id')

 

        try:
            id_incident = self.context['incident']
            incident = Incident.objects.get(id= id_incident)
            print(incident)
        
        except Incident.DoesNotExist:
             raise NotFound('No existe incidencia con esa id')
             
        text = self.context['text']

        notification = Notification.objects.create(incident=incident,user=user,text=text)
        print(notification)
        return notification