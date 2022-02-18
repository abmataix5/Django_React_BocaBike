from rest_framework import serializers
from django.db import models
from bocabike.apps.profiles.serializers import ProfileSerializer
from bocabike.apps.stations.serializers import IncidentSerializer
from bocabike.apps.profiles.models import Profile
from bocabike.apps.stations.models import Incident
from rest_framework.exceptions import NotFound

from .models import Notification


class NotificationSerializer(serializers.ModelSerializer):

    user_admin = ProfileSerializer(read_only = True)
    incident = IncidentSerializer(read_only = True)

    class Meta:
        fields = (
            'id',
            'incident',
            'user_admin',
            'text',
            'state',
            'created_at'
       
        )
        model = Notification 


    def to_notification(instance):
        return {
            'id': instance.id,
            'text': instance.text,
            'state': instance.state,
            'created_at': instance.created_at

        }
    

    def GetNotificationOnlyUserLogged(context):

        user = str(context['user'])
       
        queryset = Notification.objects.raw("SELECT * FROM notifications_notification as n WHERE n.state = 'No Leído' and n.incident_id IN (SELECT id FROM stations_incident as i WHERE i.user_id = " + user + ")")
            
        serialized_notification = []
        print(queryset.iterator())
        for notification in queryset.iterator():
            notification_s = NotificationSerializer.to_notification(notification)
            serialized_notification.append(notification_s)

        return serialized_notification


    def create(self, validated_data):
  

    

        try:
            id_user = self.context['user_admin']
            user_admin = Profile.objects.get(user= id_user)
        
        except Profile.DoesNotExist:
             raise NotFound('No existe usuario con ese id')

 

        try:
            id_incident = self.context['incident']
            incident = Incident.objects.get(id= id_incident)
           
        
        except Incident.DoesNotExist:
             raise NotFound('No existe incidencia con esa id')
             
        text = self.context['text']

        notification = Notification.objects.create(incident=incident,user_admin=user_admin,text=text)
      
        return notification