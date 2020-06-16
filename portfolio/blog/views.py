from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Blog
from rest_framework.parsers import JSONParser, FileUploadParser
from .serializers import BlogSerializer
from rest_framework import generics
from rest_framework import mixins
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class GenericBlog(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin, mixins.DestroyModelMixin, mixins.UpdateModelMixin):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()

    loookup_field = 'id'

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class blog_detail(APIView):

    def get_object(self, id):
        try:
            return Blog.objects.get(id=id)
        except Blog.DoesNotExist:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, id):
        blog = self.get_object(id)
        serializer = BlogSerializer(blog)
        return Response(serializer.data)

    def put(self, request, id):
        blog = self.get_object(id)
        serializer = BlogSerializer(blog, data=request.data)
        if serializer.is_valid:
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        blog = self.get_object(id)
        blog.delete()
        return Response(status=status.HTTP_204_NO_CONTENTs)
