
from .views import GenericProject, project_detail
from django.urls import path


urlpatterns = [
    path('', GenericProject.as_view()),
    path('detail/<int:id>/', project_detail.as_view()),
]
