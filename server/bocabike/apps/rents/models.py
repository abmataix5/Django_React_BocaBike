from django.db import models
from bocabike.apps.core.models import TimestampedModel

# Create your models here.

class Rent(TimestampedModel):

    user = models.ForeignKey("profiles.Profile",on_delete=models.CASCADE,related_name='profiles')
    bike = models.ForeignKey("bikes.Bike",on_delete=models.CASCADE,related_name='bikes')
    station= models.ForeignKey("stations.Station",on_delete=models.CASCADE,related_name='stations')


    def __str__(self):
        return str(self.id)

  