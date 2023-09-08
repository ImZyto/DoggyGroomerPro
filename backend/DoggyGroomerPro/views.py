from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class EndpointView(APIView):
    def get(self, request):
        # Obsłuż zapytanie GET
        return Response({"message": "Hello from Django!"}, status=status.HTTP_200_OK)

    def post(self, request):
        # Obsłuż zapytanie POST
        return Response(
            {"message": "Posted something!"}, status=status.HTTP_201_CREATED
        )
