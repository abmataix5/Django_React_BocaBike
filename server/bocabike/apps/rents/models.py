from django.db import models

# Create your models here.

class Rent(models.Model):

    user = models.ForeignKey("profiles.Profile",on_delete=models.CASCADE)
    bike = models.ForeignKey("bikes.Bike",on_delete=models.CASCADE)
    station= models.ForeignKey("stations.Station",on_delete=models.CASCADE,default=1)
    hour = models.CharField('hour', max_length=10,default='00:00')
    day = models.CharField('day', max_length=10,default='00-00-00')

    def __str__(self):
        return str(self.id)

  