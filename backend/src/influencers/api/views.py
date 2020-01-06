from rest_framework.generics import ListAPIView, RetrieveAPIView
from influencers.models import Influencer
from .serializers import InfluencerSerializer


class InfluencerListView(ListAPIView):
    queryset = Influencer.objects.all()
    serializer_class = InfluencerSerializer


class InfluencerDetailView(RetrieveAPIView):
    queryset = Influencer.objects.all()
    serializer_class = InfluencerSerializer
