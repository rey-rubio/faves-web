from rest_framework import serializers
from influencers.models import YoutubeVideo


class YoutubeVideoSerializer(serializers.ModelSerializer):
    # text = serializers.CharField(max_length=500)
    # likes = serializers.IntegerField()
    # youtube_id = serializers.IntegerField()
    # youtube_video_id = serializers.IntegerField()

    class Meta:
        model = YoutubeVideo
        fields = ['id', 'youtube_id', 'youtube_video_id']
