from rest_framework.generics import ListAPIView, RetrieveAPIView
from influencers.models import Influencer, Twitter, Youtube, Instagram
from .serializers import InfluencerSerializer
from django.core.serializers import serialize
import json
from django.core.serializers.json import DjangoJSONEncoder


class InfluencerListView(ListAPIView):
    queryset = Influencer.objects.all()
    serializer_class = InfluencerSerializer


class InfluencerDetailView(RetrieveAPIView):
    queryset = Influencer.objects.select_related()
    serializer_class = InfluencerSerializer
