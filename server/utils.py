from unidecode import unidecode


def standarize(arg):
    return unidecode(arg).upper()
