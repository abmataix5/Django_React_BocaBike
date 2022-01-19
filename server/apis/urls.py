from django.urls import path

from .views import ListBike, DetailBike

urlpatterns = [
    path('', ListBike.as_view()),
    path('<int:pk>/', DetailBike.as_view()),
]