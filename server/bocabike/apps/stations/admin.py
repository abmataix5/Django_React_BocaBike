from django.contrib import admin
from .models import Station,Slot,Incident
# Register your models here.


admin.site.register(Station)
admin.site.register(Slot)
admin.site.register(Incident)