from rest_framework import serializers

from api.models import Tech, City, Exp


class ExpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exp
        fields = '__all__'


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'


class TechSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tech
        fields = '__all__'
