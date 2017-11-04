from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView, ListAPIView
from rest_framework.response import Response
from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings
from django.core.mail.message import EmailMessage
from django.core import mail
from django.core.mail import send_mail

import os

from serializers import PostSerializer, PlaceSerializer
from models import Post, Place

class ReactAppView(View):
    """
    Serves the compiled frontend entry point (only works if you have run `yarn
    run build`).
    """

    def get(self, request):
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(
                """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead, or
                run `yarn run build` to test the production version.
                """,
                status=501,
            )

class PostListCreateAPIView(ListCreateAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

    def get(self, request, **kwargs):
        return super(PostListCreateAPIView, self).get(request, **kwargs)


class PlaceListAPIView(ListAPIView):
    serializer_class = PlaceSerializer
    queryset = Place.objects.all()

    def get(self, request, **kwargs):
        return super(PlaceListAPIView, self).get(request, **kwargs)


class EmailSender(APIView):

    def post(self, request, **kwargs):
        data = request.data
        sender = data.get("email")
        question = data.get("question")
        receivers = ['erika.montani29@gmail.com']
        subject = "New Question from the blog!"

        email = mail.EmailMessage(subject, question, sender, receivers)
        email.send()

        return Response(True)