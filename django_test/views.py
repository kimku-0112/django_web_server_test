from django.shortcuts import render
from rest_framework.views import APIView
from content.models import Feed

class Main(APIView):
    def get(self, request):
        feed_list = Feed.objects.all()
        return render(request, 'main.html', context = dict(feed_list = feed_list))

class Test(APIView):
    def get(self, request):
        return render(request, 'test.html')
    
class Jinstargram(APIView):
    def get(self, request):
        return render(request, 'jinstargram.html')
    
class Probability(APIView):
    def get(self, request):
        return render(request, 'probability.html')

