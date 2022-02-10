from django.db import models

# Create your models here.


class Station(models.Model):

 
    name = models.CharField(max_length=200,default='Ayuntamiento')
    location = models.CharField(max_length=200)
    available_bikes = models.CharField(max_length=200)
    state = models.CharField(max_length=200,default='Disponible')
    image_url = models.CharField(max_length=200,default='./descarga.jpeg')
    bikes = models.CharField(max_length=200,default='Disponible')
    state_station = models.CharField(max_length=200,default='Disponible')
 
   
    def __str__(self):
        return self.name


    
class Slot(models.Model):

    station = models.ForeignKey('stations.Station',related_name='slots',on_delete=models.CASCADE)
    id_bike = models.OneToOneField('bikes.Bike' , related_name='slots' , on_delete=models.DO_NOTHING,blank=True,null=True)
    slot_state = models.CharField(max_length=200,default='Ocupado')


    def __str__(self):
        return str(self.id)