from django.contrib import admin
from .models import Influencer, Twitter, Youtube, Instagram, YoutubeVideo
# Register your models here.
admin.site.register(Influencer)
admin.site.register(Twitter)
admin.site.register(Youtube)
admin.site.register(Instagram)
admin.site.register(YoutubeVideo)
