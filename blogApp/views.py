from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings
from django.core.mail.message import EmailMessage
from django.core import mail
from django.core.mail import send_mail

import os

from serializers import PostSerializer
from models import Post



class ReactAppView(View):

    def get(self, request):
        try:

            with open(os.path.join(settings.REACT_APP, 'build', 'index.html')) as file:
                return HttpResponse(file.read())

        except :
            return HttpResponse(
                """
                index.html not found ! build your React app !!
                """,
                status=501,
            )


class PostListCreateAPIView(ListCreateAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

    def get(self, request, **kwargs):
        return super(PostListCreateAPIView, self).get(request, **kwargs)


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