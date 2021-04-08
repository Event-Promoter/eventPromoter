from django.shortcuts import render
from django.http import JsonResponse
from .serializers import EventSerializer, SubEventSerializer
from .models import *

from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.views import APIView
from rest_framework.response import Response

from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from rest_auth.registration.views import SocialLoginView

# Create your views here.


class EventView(APIView):

    def get(self, request, Event_Id, *args, **kwargs):
        # event = Event.objects.all()
        # serializer = EventSerializer(event,many=True)
        event = Event.objects.get(id=Event_Id)
        event_serializer = EventSerializer(event)
        # print(event_serializer.data)
        subevent = SubEvent.objects.filter(Event_id=Event_Id)
        # print(event)
        # print(subevent)
        sub_event_serializer = SubEventSerializer(subevent, many=True)

        serialized = {"event": event_serializer.data,
                      "sub-event": sub_event_serializer.data}
        return Response(serialized)

    # def post(self, request, *args, **kwargs):
    #     serializer = EventSerializer(data=request.data)
    #     if serializer.is_valid():
    #         # serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors)


class AllEventsView(APIView):

    def get(self, request, *args, **kwargs):
        event = Event.objects.all()
        all_event_serialized = EventSerializer(event, many=True)
        return Response(all_event_serialized.data)


class SubEventView(APIView):

    def get(self, request,Event_Id, SubEvent_Id, *args, **kwargs):
        # event = Event.objects.get(id=Event_Id)
        # Event_id = event.id
        subevent = SubEvent.objects.get(Event_id=Event_Id,id=SubEvent_Id)
        # event = SubEvent.objects.get(SubEvent_Name=SubEvent)
        sub_event_serialized = SubEventSerializer(subevent)
        return Response(sub_event_serialized.data)

class FilterEventsView(APIView):
    
    def get(self, category, *args, **kwargs):
        # event = Event.objects.get(id=Event_Id)
        # Event_id = event.id
        event = Event.objects.filter(Event_Category=category)
        # event = SubEvent.objects.get(SubEvent_Name=SubEvent)
        event_serialized = SubEventSerializer(event)
        return Response(event_serialized.data)


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter
