from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=150)
    pronunciation = models.CharField(max_length=150)
    definition = models.TextField()
    body = models.TextField()
    date = models.DateTimeField()

    def __str__(self):
        return self.title
