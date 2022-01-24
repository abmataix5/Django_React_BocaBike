from django.db import models

# Create your models here.


class Station(models.Model):

    name = models.CharField(max_length=200,default='Ayuntamiento')
    location = models.CharField(max_length=200)
    available_bikes = models.CharField(max_length=200)
    state = models.CharField(max_length=200,default='Disponible')

   
    def __str__(self):
        return self.name