"""blogApp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from blogApp import views as views
from blogApp import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^admin/?', admin.site.urls),
    url(r'^posts/?', views.PostListCreateAPIView.as_view()),
    url(r'^places/?', views.PlaceListAPIView.as_view()),

    url(r'^send-email/?', views.EmailSender.as_view()),

    url(r'^', views.ReactAppView.as_view()),
] 
