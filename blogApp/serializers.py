from rest_framework import serializers

from models import Post, Place


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ('user_email', 'question', 'answer', 'created')


class PlaceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Place
        fields = ('latitude', 'longitude', 'name')