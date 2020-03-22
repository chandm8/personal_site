"""personal_site URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include, re_path
from django.views.generic import ListView, DetailView
from music.models import Album


urlpatterns = [
    path('', ListView.as_view(queryset = Album.objects.all().order_by("-date"), template_name="music/music.html")),
    re_path('(?P<pk>(\d+))', DetailView.as_view(model=Album, template_name='music/post.html')),
]
