
from .views import GenericBlog, blog_detail
from django.urls import path


urlpatterns = [
    path('', GenericBlog.as_view()),
    path('detail/<int:id>/', blog_detail.as_view()),
]
