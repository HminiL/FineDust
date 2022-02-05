from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from finedust.models import FineDustProcess


@api_view(['GET'])
def get_rt_finedust_by_city(request, city):
    process = FineDustProcess()
    return Response(process.get_finedust_value(city), status=status.HTTP_200_OK)

