from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PatientSerializer
from .utils import predict_diabetes

@api_view(['POST'])
def submit_form(request):
    if request.method == 'POST':
        print('Request Data :',request.data)
        serializer = PatientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            prediction = predict_diabetes(request.data)
            print('Response Data',prediction)

            return Response({'success': True, 'prediction': prediction})
        else:
            print('Error :',serializer.errors)
            return Response({'success': False, 'errors': serializer.errors})
    else:
        return Response({'success': False, 'message': 'Invalid request method'})
