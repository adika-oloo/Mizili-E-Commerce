from django.db import models
from accounts.models import FarmerProfile

class Category(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class Product(models.Model):
    farmer = models.ForeignKey(FarmerProfile, on_delete=models.CASCADE, related_name='products')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    unit = models.CharField(max_length=20)
    stock_quantity = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.name} by {self.farmer.user.username}"
