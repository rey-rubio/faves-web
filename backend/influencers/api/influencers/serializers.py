from rest_framework import serializers
from influencers.models import Influencer, Twitter, Youtube, Instagram


class TwitterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Twitter
        fields = ['id', 'handle', 'twitter_id']


class YoutubeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Youtube
        fields = ['id', 'handle', 'youtube_id']


class InstagramSerializer(serializers.ModelSerializer):

    class Meta:
        model = Instagram
        fields = ['id', 'handle', 'instagram_id']


class InfluencerSerializer(serializers.ModelSerializer):
    twitter = TwitterSerializer(many=True, read_only=True)
    youtube = YoutubeSerializer(many=True, read_only=True)
    instagram = InstagramSerializer(many=True, read_only=True)

    class Meta:
        model = Influencer
        fields = ['id', 'first_name', 'last_name', 'nickname',
                  'industry', 'level', 'twitter', 'youtube', 'instagram']
