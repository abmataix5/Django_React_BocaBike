
from django.conf.urls import include
from django.urls import reverse,include,re_path
from rest_framework.routers import DefaultRouter

from .views import (
  ListBike
)

app_name = 'bikes'

router = DefaultRouter()

""" router.register(r'bikes', ListBike) """

urlpatterns = [
    re_path(r'^', include(router.urls)),
    re_path(r'^bikes/?$', ListBike.as_view()),
 

]
