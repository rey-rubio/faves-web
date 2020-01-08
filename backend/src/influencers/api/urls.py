from django.urls import path

from .views import InfluencerListView, InfluencerDetailView

urlpatterns = [
    path('', InfluencerListView.as_view()),
    path('/<pk>', InfluencerDetailView.as_view())
]
