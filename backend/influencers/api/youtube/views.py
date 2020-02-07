from .serializers import YoutubeVideoSerializer
from rest_framework.response import Response
from rest_framework import views

from rest_framework.generics import ListAPIView, RetrieveAPIView
from datetime import datetime
import datetime
from django.shortcuts import render

from influencers.models import YoutubeVideo
from .serializers import YoutubeVideoSerializer


class YoutubeVideoView(ListAPIView):
    # queryset = YoutubeVideo.objects.filter(you)
    serializer_class = YoutubeVideoSerializer

    def get_queryset(self):
        """
        Return a list of all the youtube videos with the given youtube id
        """
        queryset = YoutubeVideo.objects.all()
        youtube_id = self.request.query_params.get('youtube_id', None)
        if youtube_id is not None:
            queryset = queryset.filter(youtube_id=youtube_id)
        return queryset
