from django.db import models
from django.utils import timezone


# Create your models here.

class Information(models.Model):
    full_name = models.CharField(max_length=255)
    description = models.TextField(max_length=500)
    date = models.DateTimeField(auto_now_add=True, null=False)
    email = models.EmailField(max_length=255)
    organization = models.CharField(max_length=255, default='U.S ARMY')
    reason = models.CharField(max_length=255, default='REGULAR')
    phone_number = models.CharField(max_length=255)
    requested = models.BooleanField(default=True)
    granted = models.BooleanField(default=False)

    def __str__(self):
        return self.email

class Reason(models.Model):
    why = models.CharField(max_length=225)

    def __str__(self):
        return f"{self.why}"

class Organization(models.Model):
    org = models.CharField(max_length=225)

    def __str__(self):
        return f"{self.org}"
