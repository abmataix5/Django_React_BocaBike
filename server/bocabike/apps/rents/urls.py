
from django.conf.urls import include
from django.urls import reverse,include,re_path
from rest_framework.routers import DefaultRouter


from .views import (
  RentView,RentsDestroyAPIView
)


app_name = 'rents'

router = DefaultRouter()


urlpatterns = [
    re_path(r'^', include(router.urls)),
    
    re_path(r'^rent/?$', RentView.as_view({'post': 'create'})),
    re_path(r'^rent/delete/?$', RentsDestroyAPIView.as_view())

]
