from django.urls import path
from api.views import info, just_join, no_fluff_jobs


urlpatterns = [
    path('info', info),
    path('just-join', just_join),
    path('no-fluff-jobs', no_fluff_jobs),
]

