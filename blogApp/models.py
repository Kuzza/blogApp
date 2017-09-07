from time import timezone

from django.db import models


class Post(models.Model):
    user_email = models.EmailField()
    question = models.TextField()
    answer = models.TextField(default='')
    created = models.DateTimeField(auto_created=True)

    def save(self, *args, **kwargs):
        self.created = timezone.now()
        return super(Post, self).save(*args, **kwargs)