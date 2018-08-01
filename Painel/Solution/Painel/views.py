from django.shortcuts import render

def index(request):    
    return render(request, 'painel/index.html', None)
