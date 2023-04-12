from django.conf import settings
from django.db import models
class Subscription(models.Model):
    'Generated Model'
    status = models.BooleanField()
class Buyer(models.Model):
    'Generated Model'
    typeID = models.IntegerField()
    name = models.TextField()
class Rating(models.Model):
    'Generated Model'
    score = models.IntegerField()
    description = models.TextField()
class Content(models.Model):
    'Generated Model'
    type_id = models.IntegerField()
class Payment(models.Model):
    'Generated Model'
    status = models.IntegerField()
class Seller(models.Model):
    'Generated Model'
    type_id = models.IntegerField()
class Profile(models.Model):
    'Generated Model'
    status = models.BooleanField()
class Plan(models.Model):
    'Generated Model'
    plantype = models.IntegerField()
class Project(models.Model):
    'Generated Model'
    status = models.IntegerField()
class Chat(models.Model):
    'Generated Model'
    datetime = models.DateTimeField()
class Portfolio(models.Model):
    'Generated Model'
    status = models.BooleanField()
