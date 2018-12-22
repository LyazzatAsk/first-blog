from django.shortcuts import render
from .models import Post
from django.utils import timezone
from django.shortcuts import render, get_object_or_404

# Create your views here.
def story(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'blog/stories.html', {'posts': posts})

def index(request):
    return render(request, 'blog/index6.html')


def gallery(request):
    return render(request, 'blog/gallery.html')

def form(request):
    return render(request, 'blog/formadis.html')


def new(request):
    return render(request, 'blog/news.html')


# Create your views here.
