from django.urls import path
from .views import just_join

urlpatterns = [
    path('just-join/', just_join),
]


