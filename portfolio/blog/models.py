from django.db import models
import uuid
from django.db.models import Model


class Blog(models.Model):
    blog_name = models.CharField(max_length=100)
    details = models.CharField(max_length=300)
    image = models.ImageField(
        upload_to='media/% Y/% m/% d/', max_length=100, null=False, blank=False)

    def __str__(self):
        return self.blog_name
# Create your models here.
