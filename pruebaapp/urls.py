from django.urls import path
from . import views

urlpatterns = [
    path('show-data/', views.show_data, name='show_data'),
]
