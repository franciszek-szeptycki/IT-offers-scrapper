import requests
from utils import standarize


def get_offers(tech, exp, cities):
    offers = requests.get('https://justjoin.it/api/offers').json()
    matches = []
    for offer in offers:
        # CITY
        if standarize(offer['city']) not in cities:
            continue
        # TECH
        if standarize(offer['marker_icon']) != tech:
            continue
        # EXP
        if standarize(offer['experience_level']) != exp:
            continue
        matches.append(offer)
    return matches
