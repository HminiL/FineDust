FROM python:3.9

WORKDIR /usr/src/app

COPY . .

COPY requirements.txt requirements.txt

RUN python -m pip install --upgrade pip
RUN pip install -r requirements.txt

ENV TZ=Asia/Seoul

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

#EXPOSE	8000