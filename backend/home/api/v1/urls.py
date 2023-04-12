from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import BuyerViewSet,ChatViewSet,ContentViewSet,PaymentViewSet,PlanViewSet,PortfolioViewSet,ProfileViewSet,ProjectViewSet,RatingViewSet,SellerViewSet,SubscriptionViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('subscription', SubscriptionViewSet )
router.register('buyer', BuyerViewSet )
router.register('rating', RatingViewSet )
router.register('content', ContentViewSet )
router.register('payment', PaymentViewSet )
router.register('seller', SellerViewSet )
router.register('profile', ProfileViewSet )
router.register('plan', PlanViewSet )
router.register('project', ProjectViewSet )
router.register('chat', ChatViewSet )
router.register('portfolio', PortfolioViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
