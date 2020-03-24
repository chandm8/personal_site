from django.db import models
from django.contrib.postgres.fields import ArrayField
# Create your models here.
class Album(models.Model):
    title = models.CharField(max_length=150)
    artist = models.CharField(max_length=150)
    genre = models.CharField(max_length=150)
    coverArt = models.CharField(max_length=250)
    releaseDate = models.DateTimeField()
    trackList = ArrayField(models.CharField(max_length=150), null=True)
    favTracks = ArrayField(models.CharField(max_length=150), null=True)
    body = models.TextField()
    date = models.DateTimeField()

    def __str__(self):
        return self.title
