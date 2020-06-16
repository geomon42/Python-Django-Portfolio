from django.db import models
from django.db.models import Model


class Project(models.Model):
    project_tittle = models.CharField(max_length=100)
    project_link = models.URLField(max_length=200, blank=False, null=False)
    technologies = models.CharField(max_length=100)
    details = models.CharField(max_length=300)
    date_finished = models.DateField(auto_now_add=False, auto_now=False)
    image = models.ImageField(
        upload_to='media/projects/% Y/% m/% d/', max_length=100, null=False, blank=False)

    def __str__(self):
        return self.project_tittle
# Create your models here.
