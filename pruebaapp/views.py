from django.http import JsonResponse
from .models import TestTable 

def show_data(request):
    data = list(TestTable.objects.values())  
    return JsonResponse(data, safe=False)  
