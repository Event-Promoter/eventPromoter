from django.contrib import admin
from django.urls import path,include
from .views import *


urlpatterns = [
    path('all',AllEventsView.as_view(),name='AllEvent'),
    path('all/filter=<str:category>',FilterEventsView.as_view(),name='Filter'),
    path('event_id=<int:Event_Id>',EventView.as_view(),name='event'),
    path('event_id=<int:Event_Id>/subevent_id=<int:SubEvent_Id>',SubEventView.as_view(),name='subevent'),
    # path('rest-auth/registration/', include('rest_auth.registration.urls')),
    # path('rest-auth/facebook/$', FacebookLogin.as_view(), name='fb_login'),
]