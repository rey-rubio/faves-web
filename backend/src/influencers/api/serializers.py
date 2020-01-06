from rest_framework import serializers
from influencers.models import Influencer


class InfluencerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Influencer
        fields = ('first_name', 'last_name', 'nickname', 'industry', 'level')
