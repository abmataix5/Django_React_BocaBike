# from django.conf.urls import url

# from .views import (
#     LoginAPIView, RegistrationAPIView, UserRetrieveUpdateAPIView
# )

# urlpatterns = [
#     url(r'^user/?$', UserRetrieveUpdateAPIView.as_view()),
#     url(r'^users/?$', RegistrationAPIView.as_view()),
#     url(r'^users/login/?$', LoginAPIView.as_view()),
# ]

from django.conf.urls import include
from django.urls import reverse,re_path
from .views import (
    LoginAPIView, RegistrationAPIView, UserRetrieveUpdateAPIView, UserViewSet
)

app_name = 'authentication'

#Admin
user_list = UserViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
user_detail = UserViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = [
    re_path(r'^user/?$', UserRetrieveUpdateAPIView.as_view()),
    re_path(r'^users/?$', RegistrationAPIView.as_view()),
    re_path(r'^users/login/?$', LoginAPIView.as_view()),

    #Admin
    re_path(r'^userlist/$', user_list, name='user_list'),                                       
    re_path(r'^userdetail/(?P<username>[0-9a-zA-Z_-]+)/$', user_detail, name='user_detail'), 
]
