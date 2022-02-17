
from django.conf.urls import include
from django.urls import reverse,include,re_path
from rest_framework.routers import DefaultRouter


from .views import (
ListCreateNotificationAPIView,
NotificationUpdateStateAPIView
)


app_name = 'notifications'

router = DefaultRouter()


urlpatterns = [
    re_path(r'^', include(router.urls)),



    re_path(r'^notifications/?$', ListCreateNotificationAPIView.as_view()),
    re_path(r'^notifications/updateState/?$', NotificationUpdateStateAPIView.as_view()),


]
