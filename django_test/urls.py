"""django_test URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.urls import path
from .views import Main
from .views import Test
from .views import Jinstargram
from .views import Probability

urlpatterns = [
    path('', Main.as_view()),
]

# TEST URL 
USE_TEST_URLS = True

if USE_TEST_URLS:
    
	Test_Urls = [    
    	path('test',Test.as_view()),
    	path('jinstargram',Jinstargram.as_view()),  
        path('probability',Probability.as_view()),  
	]
    
	urlpatterns += Test_Urls
