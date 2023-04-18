from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Exp, Tech, City
from api.offers import get_just_join, get_no_fluff_jobs
from api.serializers import ExpSerializer, TechSerializer, CitySerializer


@api_view(['GET'])
def info(req):
    exp = Exp.objects.all()
    tech = Tech.objects.all()
    city = City.objects.all()

    exp_serializer = ExpSerializer(exp, many=True)
    tech_serializer = TechSerializer(tech, many=True)
    city_serializer = CitySerializer(city, many=True)

    return Response(data={'exp': exp_serializer.data, 'tech': tech_serializer.data, 'city': city_serializer.data}, status=200)


@api_view(['GET'])
def just_join(req):
    tech = req.GET.get('tech')
    exp = req.GET.get('exp')
    city = req.GET.get('city')

    offers = get_just_join(tech, exp, city)

    if len(offers) == 0:
        return Response({'message': 'No offers found!'}, status=404)
    return Response(data=offers, status=200)


@api_view(['GET'])
def no_fluff_jobs(req):
    tech = req.GET.get('tech')
    exp = req.GET.get('exp')
    city = req.GET.get('city')

    offers = get_no_fluff_jobs(tech, exp, city)
    if not offers:
        return Response({'message': 'No offers found!'}, status=404)
    return Response(data=offers, status=200)
