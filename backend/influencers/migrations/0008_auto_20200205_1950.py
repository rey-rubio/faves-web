# Generated by Django 2.2.3 on 2020-02-06 00:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('influencers', '0007_youtubevideo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='youtubevideo',
            name='youtube_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='youtube', to='influencers.Youtube'),
        ),
    ]
