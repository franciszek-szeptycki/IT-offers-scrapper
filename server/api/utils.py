from unidecode import unidecode


def standarize(arg):
    return unidecode(arg).upper()


def nfj_salary(arg):
    down = ""
    up = ""
    pharses = arg.split(" – ")
    for char in pharses[0]:
        if char.isdigit():
            down += char

    if len(pharses) == 1:
        return int(down), int(down)

    for char in pharses[1]:
        if char.isdigit():
            up += char
    return int(down), int(up)
