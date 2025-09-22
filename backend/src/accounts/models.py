from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = [
        ('farmer', 'Farmer'),
        ('buyer', 'Buyer'),
        ('extension_agent', 'Extension Agent'),
        ('ngo_partner', 'NGO Partner'),
    ]
    
    LANGUAGE_CHOICES = [
        ('swahili', 'Swahili'),
        ('english', 'English'),
    ]
    
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    phone = models.CharField(max_length=15, blank=True)
    location = models.CharField(max_length=100)
    language = models.CharField(max_length=10, choices=LANGUAGE_CHOICES)
    
    def __str__(self):
        return f"{self.username} ({self.get_role_display()})"

class FarmerProfile(models.Model):
    FARM_TYPE_CHOICES = [
        ('arid', 'Arid'),
        ('semi-arid', 'Semi-Arid'),
        ('wetlands', 'Wetlands'),
    ]
    
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='farmer_profile')
    farm_size = models.CharField(max_length=50)
    farm_type = models.CharField(max_length=20, choices=FARM_TYPE_CHOICES)
    primary_crop = models.CharField(max_length=50, blank=True)
    primary_livestock = models.CharField(max_length=50, blank=True)
    
    def __str__(self):
        return f"{self.user.username}'s Farm Profile"
