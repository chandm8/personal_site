from django.db import models
from django.contrib.postgres.fields import ArrayField
# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=150)
    foodType = models.CharField(max_length=150)
    picture = models.CharField(max_length=250)
    ingredients = ArrayField(models.CharField(max_length=150), null=True)
    steps = ArrayField(models.CharField(max_length=400), null=True)
    date = models.DateTimeField()

    def __str__(self):
        return self.title
