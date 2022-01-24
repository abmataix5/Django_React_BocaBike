
from django.conf.urls import include
from django.urls import reverse,include,re_path
from rest_framework.routers import DefaultRouter


from .views import (
  ListStation
)


app_name = 'stations'

router = DefaultRouter()


urlpatterns = [
    re_path(r'^', include(router.urls)),
    
    re_path(r'^stations/?$', ListStation.as_view()),
 

]
