from django.db import models


class Influencer(models.Model):
    first_name = models.CharField(max_length=50, null=True)
    last_name = models.CharField(max_length=50, null=True)
    nickname = models.CharField(max_length=50, null=True)
    level = models.CharField(max_length=50, null=True)
    industry = models.CharField(max_length=50, null=True)

    # def __repr__(self):
    #     return "%s %s %s %s %s" % (
    #         self.first_name, self.last_name, self.nickname, self.level, self.industry)

    def __str__(self):
        return "%s %s %s %s %s" % (
            self.first_name, self.last_name, self.nickname, self.level, self.industry)


class Twitter(models.Model):
    influencer = models.ForeignKey(
        Influencer, related_name='twitter', on_delete=models.CASCADE)
    handle = models.CharField(max_length=100)
    twitter_id = models.IntegerField(unique=True, null=True)

    def __str__(self):
        return "%s %s %s %s" % (self.id, self.influencer, self.handle, self.twitter_id)


class Youtube(models.Model):
    influencer = models.ForeignKey(
        Influencer, related_name='youtube', on_delete=models.CASCADE)
    handle = models.CharField(max_length=100)
    youtube_id = models.CharField(max_length=100, unique=True, null=True)

    def __str__(self):
        return "%s %s %s %s" % (self.id, self.influencer, self.handle, self.youtube_id)


class YoutubeVideo(models.Model):
    youtube_id = models.ForeignKey(
        Youtube, related_name='youtube', on_delete=models.CASCADE)
    youtube_video_id = models.CharField(max_length=100)

    def __str__(self):
        return "%s %s" % (self.youtube_id, self.youtube_video_id)


class Instagram(models.Model):
    influencer = models.ForeignKey(
        Influencer, related_name='instagram', on_delete=models.CASCADE)
    handle = models.CharField(max_length=100)
    instagram_id = models.IntegerField(unique=True, null=True)

    def __str__(self):
        return "%s %s %s %s" % (self.id, self.influencer, self.handle, self.instagram_id)
