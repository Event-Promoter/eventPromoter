from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()
# Create your models here.
MODE_CHOICES = (('ONLINE', 'Online'), ('OFFLINE', 'Offline'),('BOTH OFFLINE AND ONLINE','Both Offline and Onine'))
TYPE_CHOICES = (('TECHNICAL','Technical'),('NON-TECHNICAL','Non-Technical'))
PARTICIPATION_CHOICES = (('INDIVIDUAL','Individual'),('TEAM','Team'))

class Event(models.Model):
    Event_Name = models.CharField(max_length=50)
    Event_Description = models.TextField()
    Event_Start_Date = models.DateTimeField()
    Event_End_Date = models.DateTimeField()
    Event_Mode = models.CharField(max_length=40,choices=MODE_CHOICES,default='Online')
    Event_Category=models.CharField(max_length=100,choices=TYPE_CHOICES,default='Technical')
    Event_Organiser = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.Event_Name


class SubEvent(models.Model):


    Event_id = models.ForeignKey(Event, on_delete=models.CASCADE)
    SubEvent_Name = models.CharField(max_length=50)
    SubEvent_Description = models.TextField()
    SubEvent_Start_Date = models.DateTimeField()
    SubEvent_End_Date = models.DateTimeField()
    SubEvent_Mode = models.CharField(max_length=40,choices=MODE_CHOICES,default='Online')
    SubEvent_Reg_Fees = models.IntegerField()
    SubEvent_Participation = models.CharField(max_length=100,choices=PARTICIPATION_CHOICES)
    SubEvent_Note = models.CharField(max_length=50,default=None)
    SubEvent_Type = models.CharField(max_length=20,choices=TYPE_CHOICES)

    def __str__(self):
        return self.SubEvent_Name