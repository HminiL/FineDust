from django.urls import path

from finedust import views

urlpatterns = [
    path('city/<str:city>', views.get_rt_finedust_by_city)
]