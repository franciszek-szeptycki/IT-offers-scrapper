from django.db import models


class Exp(models.Model):

    class Meta:
        verbose_name_plural = "Exp"

    name = models.CharField(max_length=100, blank=False, default=None)
    just_join = models.CharField(max_length=100, blank=True, default=None)
    no_fluff_jobs = models.CharField(max_length=100, blank=True, default=None)
    pracuj = models.CharField(max_length=100, blank=True, default=None)

    def __str__(self):
        return f'{self.name}'


class City(models.Model):

    class Meta:
        verbose_name_plural = "City"

    name = models.CharField(max_length=100, blank=False, default=None)
    just_join = models.CharField(max_length=100, blank=True, default=None)
    no_fluff_jobs = models.CharField(max_length=100, blank=True, default=None)
    pracuj = models.CharField(max_length=100, blank=True, default=None)

    def __str__(self):
        return f'{self.name}'


class Tech(models.Model):

    class Meta:
        verbose_name_plural = "Tech"

    name = models.CharField(max_length=100, blank=False, default=None)
    just_join = models.CharField(max_length=100, blank=True, default=None)
    no_fluff_jobs = models.CharField(max_length=100, blank=True, default=None)
    pracuj = models.CharField(max_length=100, blank=True, default=None)
    image = models.ImageField(upload_to='techs', blank=True, default=None)

    def __str__(self):
        return f'{self.name}'
