from rest_framework import serializers


class TweetSerializer(serializers.Serializer):
    # text = serializers.CharField(max_length=500)
    # likes = serializers.IntegerField()
    comments = serializers.IntegerField()
    likes = serializers.IntegerField()
