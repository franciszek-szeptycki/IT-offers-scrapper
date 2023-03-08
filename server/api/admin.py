from django.contrib import admin
from .models import Exp, City, Tech


admin.site.register((Exp, City, Tech))