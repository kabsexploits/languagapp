from dataclasses import fields
from rest_framework.serializers import ModelSerializer
from . models import *

class SE_Imagesapp(ModelSerializer):
    class Meta:
        model = Imagesapp
        fields = '__all__'



class SE_Language(ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'