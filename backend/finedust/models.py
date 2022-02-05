import requests
from django.db import models

# Create your models here.


class FineDustProcess(object):
    def __init__(self):
        pass

    def process(self):
        pass

    def get_finedust_value(self, city: str):
        try:
            url = 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty'
            params = {'serviceKey': '4ks6YofQGpQxregeiTCktVCCZQeR4n/J68cSfBKI0DFRjO1bXHpY2L8/Wo+lM4WsQgBnWBjC2wunDdfKgKEnLw==',
                      'returnType': 'json',
                      'numOfRows': '1',
                      'pageNo': '1',
                      'stationName': city,
                      'dataTerm': 'DAILY',
                      'ver': '1.0'}
            response = requests.get(url, params=params)
            items = response.json().get('response').get('body').get('items')
            return {'pm10Value': items[0].get('pm10Value'),
                    'pm10Grade': items[0].get('pm10Grade'),
                    'pm25Value': items[0].get('pm25Value'),
                    'pm25Grade': items[0].get('pm25Grade')}
        except:
            return {'result': 'error'}


