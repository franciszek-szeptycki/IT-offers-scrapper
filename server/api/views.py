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

    expSerializer = ExpSerializer(exp, many=True)
    techSerializer = TechSerializer(tech, many=True)
    citySerializer = CitySerializer(city, many=True)

    return Response(data={'exp': expSerializer.data, 'tech': techSerializer.data, 'city': citySerializer.data}, status=200)


@api_view(['GET'])
def just_join(req):

    try:
        tech = req.GET.get('tech')
        exp = req.GET.get('exp')
        cities = req.GET.get('cities').split()

        if not tech or not exp:
            raise AttributeError

    except AttributeError:
        return Response({'message': 'Missing parameters!'}, status=400)

    else:
        offers = get_just_join(tech, exp, cities)
        if not offers:
            return Response({'message': 'No offers found!'}, status=404)
        return Response(data=offers, status=200)


@api_view(['GET'])
def no_fluff_jobs(req):
    try:
        tech = req.GET.get('tech')
        exp = req.GET.get('exp')
        cities = req.GET.get('cities').split()

        if not tech or not exp:
            raise AttributeError
    except AttributeError:
        return Response({'message': 'Missing parameters!'}, status=400)
    else:
        offers = get_no_fluff_jobs(tech, exp, cities)
        if not offers:
            return Response({'message': 'No offers found!'}, status=404)
        return Response(data=offers, status=200)
