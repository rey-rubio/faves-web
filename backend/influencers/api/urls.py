from django.urls import path

# from .views import InfluencerListView, InfluencerDetailView
from .influencers.views import InfluencerListView, InfluencerDetailView
from .twitter.views import TweetView
urlpatterns = [
    path('', InfluencerListView.as_view()),
    path('<pk>', InfluencerDetailView.as_view()),
    path('tweets', TweetView.as_view())
]
