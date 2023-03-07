from rest_framework.decorators import api_view
from rest_framework.response import Response
from just_join.offers import get_offers


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
        offers = get_offers(tech, exp, cities)
        return Response(data=offers, status=200)
