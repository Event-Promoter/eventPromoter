from rest_framework import serializers
from .models import Event,SubEvent

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = [
            'Event_Name','Event_Description','Event_Start_Date','Event_End_Date','Event_Mode','Event_Organiser'
        ]
class SubEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubEvent
        fields = [
            'SubEvent_Name','SubEvent_Description','SubEvent_Start_Date',
            'SubEvent_End_Date','SubEvent_Mode','SubEvent_Reg_Fees',
            'SubEvent_Participation','SubEvent_Note','SubEvent_Type',
        ]