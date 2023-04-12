from django.contrib import admin
from .models import Buyer,Chat,Content,Payment,Plan,Portfolio,Profile,Project,Rating,Seller,Subscription
admin.site.register(Subscription)
admin.site.register(Buyer)
admin.site.register(Rating)
admin.site.register(Content)
admin.site.register(Payment)
admin.site.register(Seller)
admin.site.register(Profile)
admin.site.register(Plan)
admin.site.register(Project)
admin.site.register(Chat)
admin.site.register(Portfolio)

# Register your models here.
