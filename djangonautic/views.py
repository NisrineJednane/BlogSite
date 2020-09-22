# allows you to take requests from the client:
from django.http import HttpResponse
# allows you to render html pages into the browser
from django.shortcuts import render

def homepage(request):
    # return HttpResponse('homepage')
    return render(request, 'homepage.html')

def about(request):
    # return HttpResponse('about')
    return render(request, 'about.html')
