# my_app/views.py

from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(username=email, password=password)

        if user:
            # Redirect to a success page.
            return redirect('www.grupoubique.com.br')
        else:
            # Return an error message if authentication fails
            return Response({"message": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
