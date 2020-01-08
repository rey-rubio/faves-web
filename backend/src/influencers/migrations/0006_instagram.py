# Generated by Django 2.2.3 on 2020-01-08 02:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('influencers', '0005_auto_20200107_2140'),
    ]

    operations = [
        migrations.CreateModel(
            name='Instagram',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('handle', models.CharField(max_length=100)),
                ('instagram_id', models.IntegerField(null=True, unique=True)),
                ('influencer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='instagram', to='influencers.Influencer')),
            ],
        ),
    ]
