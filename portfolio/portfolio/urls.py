
from django.contrib import admin
from django.urls import path, include
from blog.views import blog_detail
from projects.views import project_detail
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/projects/', include('projects.urls')),
    path('api/blog/', include('blog.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
