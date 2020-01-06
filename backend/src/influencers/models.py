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
