from django.shortcuts import render
from .forms import InfoForm
from .models import Information


# Create your views here.
def info_view(request):
    form = InfoForm()
    if request.method == 'POST':
        form = InfoForm(request.POST or None)
        if form.is_valid():
            form.save()
        form = InfoForm()
    context = {
        'form': form,
    }
    return render(request, 'info.html', context)


def home_view(request):
    context = {

    }
    return render(request, 'home.html', context)


def privacy_view(request):
    context = {

    }
    return render(request, 'privacy.html', context)

def terms_view(request):
    context = {

    }
    return render(request, 'terms.html', context)

def section_view(request):
    context = {

    }
    return render(request, 'section.html', context)

def fear_view(request):
    context = {

    }
    return render(request, 'nofear.html', context)





