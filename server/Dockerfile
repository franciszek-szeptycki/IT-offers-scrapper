# Wykorzystujemy obraz z Pythonem w wersji 3.8
FROM python:3.8

# Tworzymy katalog wewnątrz kontenera, do którego skopiujemy kod źródłowy aplikacji
RUN mkdir /code
WORKDIR /code

# Kopiujemy plik requirements.txt do katalogu /code wewnątrz kontenera
COPY requirements.txt /code/

# Instalujemy zależności z pliku requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt

# Kopiujemy resztę kodu źródłowego aplikacji do katalogu /code wewnątrz kontenera
COPY . /code/

# Ustawiamy zmienne środowiskowe dla kontenera Django
ENV PYTHONUNBUFFERED=1
ENV DJANGO_ENV=production

# Wykonujemy migracje bazy danych przed uruchomieniem aplikacji
RUN python manage.py migrate --noinput

# Uruchamiamy serwer Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
