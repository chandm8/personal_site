from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'mysite/home.html');

def dark_theme(request):
    if request.is_ajax():
        print("clicked");#something
    else:
        return Http404;
