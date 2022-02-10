
from django.conf.urls import include
from django.urls import reverse,include,re_path
from rest_framework.routers import DefaultRouter


from .views import (
  ListStation,StationRetrieveAPIView,StationsBikeAPIView,ProfileRetrieveAPIView,SlotRentUpdateAPIView
)


app_name = 'stations'

router = DefaultRouter()


urlpatterns = [
    re_path(r'^', include(router.urls)),
    
    re_path(r'^stations/?$', ListStation.as_view()),
    re_path(r'^stations/(?P<name>\w+)/?$', StationsBikeAPIView.as_view()),
    re_path(r'^station/?$', ProfileRetrieveAPIView.as_view()),
    re_path(r'^stations/slotUpdate/(?P<idSlot>\w+)/?$', SlotRentUpdateAPIView.as_view()),

]
