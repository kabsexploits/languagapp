from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm 
from django.contrib.auth.models import User
from django import forms

from.models import Imagesapp





class All_Users_Form(UserCreationForm):
	class Meta:
		model = User
		fields = ['username','email','password1','password2']


    
class productcreation(ModelForm):
	class Meta:
		model = Imagesapp
		fields = '__all__'