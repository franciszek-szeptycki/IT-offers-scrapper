import requests
from bs4 import BeautifulSoup

from .utils import standarize, nfj_salary


def get_just_join(tech, exp, cities):
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


def get_no_fluff_jobs(tech, exp, cities):
    matched = []

    criteria = ""
    if len(cities) > 1:
        criteria += "city%3D" + ",".join(cities[1:]) + "%20%20"
    criteria += f"seniority%3D{exp}"

    page = 0

    while True:
        page += 1
        url = f'https://nofluffjobs.com/pl/{cities[0]}/{tech}?criteria={criteria}&page={page}'

        html_doc = requests.get(url)
        soup = BeautifulSoup(html_doc.text, 'html.parser')

        offers = soup.find_all('a', {'class': 'posting-list-item'})
        if offers == []:
            break

        for offer in offers:
            salary = nfj_salary(offer.find("span", {"class": "salary"}).text.strip())
            phrase = offer.find('div', {'class': 'ng-star-inserted'}).text.strip().split('  ')
            matched.append({
                'url': offer.get('href'),
                'title': phrase[0],
                'company': phrase[1],
                'salary': {
                    "from": salary[0],
                    "to": salary[1],
                },
            })
    return matched


if __name__ == '__main__':
    get_no_fluff_jobs('python', 'junior', ['warszawa', 'krakow'])
