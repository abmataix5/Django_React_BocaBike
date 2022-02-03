from django.db import models

# Create your models here.

class Bike(models.Model):
    station = models.ForeignKey("stations.Station",on_delete=models.CASCADE)
    state = models.CharField(max_length=200,default='Disponible')
   
    def __str__(self):
        return str(self.id)