from django.db import models
from bocabike.apps.core.models import TimestampedModel


# Create your models here.

class Notification(TimestampedModel):


    incident = models.ForeignKey("stations.Incident",on_delete=models.CASCADE)
    user = models.OneToOneField("profiles.Profile",on_delete=models.CASCADE)
    text = models.CharField(max_length=500,default='...')
    state = models.CharField(max_length=500,default='No leído')
   

    def __str__(self):
        return str(self.id)
