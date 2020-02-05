from .serializers import TweetSerializer
from rest_framework.response import Response
from rest_framework import views
from datetime import datetime
import datetime
from django.shortcuts import render
from faves.settings import TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, TWITTER_CONSUMER_ACCESS_TOKEN, TWITTER_CONSUMER_TOKEN_SECRET

import tweepy

auth = tweepy.OAuthHandler(TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET)
auth.set_access_token(TWITTER_CONSUMER_ACCESS_TOKEN,
                      TWITTER_CONSUMER_TOKEN_SECRET)
twitter_api = tweepy.API(auth)

tweets_nba = {}
tweets_nba = set(tweets_nba)
users_nba = {"NBA", "wojespn", "ShamsCharania", "ZachLowe_NBA", "sam_amick", "TheSteinLine", "ChrisBHaynes",
             "davidaldridgedc", "WindhorstESPN"}


class TweetView(views.APIView):

    def get(self, request):
        yourdata = [{"likes": 10, "comments": 0}, {"likes": 4, "comments": 23}]
        results = TweetSerializer(yourdata, many=True).data
        return Response(results)
# def get_tweets(request):
#     # print(nba_tweets.__name__)
#     print(request)
#     print(request.get_full_path())
#     public_tweets = twitter_api.home_timeline()
#     for tweet in public_tweets:
#         print(tweet.text)

#     user = twitter_api.get_user('twitter')
#     print(user.screen_name)

#     print(user.followers_count)
#     for friend in user.friends():
#         print(friend.screen_name)
#     # for user in users_nba:
#     #     data = twitter_api.GetUserTimeline(screen_name=user, count=5)

#     #     for new_tweet in data:
#     #         # print(new_tweet)
#     #         # print(new_tweet.id)
#     #         if not any(new_tweet.id == tweet.id for tweet in tweets_nba):
#     #             tweets_nba.add(new_tweet)

#     # sorted_tweets_nba = sorted(tweets_nba, key=lambda d: datetime.strptime(d.created_at, '%a %b %d %H:%M:%S %z %Y'),
#     #                            reverse=True)

#     # print(tweets_nba)
#     # context = {
#     #     'sport': "nba",
#     #     'tweets': sorted_tweets_nba,
#     #     'users': users_nba
#     # }

#     return request
