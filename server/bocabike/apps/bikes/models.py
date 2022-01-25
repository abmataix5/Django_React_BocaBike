from django.db import models

# Create your models here.

class Bike(models.Model):
    station = models.CharField(max_length=200,default='Ayuntamiento')
    state = models.CharField(max_length=200,default='Disponible')
   
    def __str__(self):
        return self.station