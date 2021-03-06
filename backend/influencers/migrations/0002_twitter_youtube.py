# Generated by Django 2.2.3 on 2020-01-07 23:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('influencers', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='YouTube',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('handle', models.CharField(max_length=100)),
                ('youtube_id', models.IntegerField(null=True, unique=True)),
                ('influencer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='influencers.Influencer')),
            ],
        ),
        migrations.CreateModel(
            name='Twitter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('handle', models.CharField(max_length=100)),
                ('twitter_id', models.IntegerField(null=True, unique=True)),
                ('influencer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='influencers.Influencer')),
            ],
        ),
    ]
