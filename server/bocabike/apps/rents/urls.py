
from django.conf.urls import include
from django.urls import reverse,include,re_path
from rest_framework.routers import DefaultRouter


from .views import (
  RentView,RentsDestroyAPIView,RentBikeStatsView,RentuserStatsView
)


app_name = 'rents'

router = DefaultRouter()


urlpatterns = [
    re_path(r'^', include(router.urls)),
    
    re_path(r'^rent/?$', RentView.as_view()),
    re_path(r'^rent/bikeStats?$', RentBikeStatsView.as_view()),
    re_path(r'^rent/userStats?$', RentuserStatsView.as_view()),
    re_path(r'^rent/delete/?$', RentsDestroyAPIView.as_view())

]
