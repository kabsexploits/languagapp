from django.shortcuts import render ,redirect,get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
import json
import datetime
from .models import * 

from . serializers import *

from.forms import productcreation

from django.contrib import messages

from django.contrib.auth import logout as django_logout,authenticate,login

def api_home(request,*args,**kwargs):

	body = request.body
	data={}
	try:
		data = json.loads(body)
	except:
		pass
	print(data)
	print(body)
	return JsonResponse({"manchester":"united"})


def language(request):
	try:
	    if request.method == 'POST':
	      
	        text = request.POST['text']
	        meaning = request.POST['meaning']
	        Language.objects.create(Text = text,Meaning =meaning)
	       

	        

	       
	    return render(request,"store/edit.html")
	except:
	 print('error ocured')


def ResultTrans(request):
    lan =  Language.objects.all()
    for i in lan:
        print(i.Text,i.Meaning,i.id)
    context={'lan':lan}
    return render(request,'store/resultTrans.html',context)


@api_view(['GET'])	
def Translate(request):
	  lan =  Language.objects.all()
	  seriliazers = SE_Language(lan,many=True)
	  return Response(seriliazers.data)

@api_view(['GET'])
def getroutes(request):

	images = Imagesapp.objects.all()

	seriliazers = SE_Imagesapp(images,many=True)
	return Response(seriliazers.data)
@api_view(['GET'])
def View_Photo(request, pk):
	image =Imagesapp.objects.get(id=pk)
	seriliazers = SE_Imagesapp(image,many=False)
	return Response(seriliazers.data)


def MyImagesPage(request):
	images = Imagesapp.objects.all()
	context = {'images':images}
	return render(request, 'store/store.html', context)


def crispy(request):
	return render(request,'store/crispyform.html')


def register(request):
	if request.method=="POST":
		username = request.POST['username']
		email    = request.POST['email']
		password1= request.POST['password1']
		password2= request.POST['password2']

		if password1 == password2:
			if User.objects.filter(username=username).exists():
				messages.error(request,'username taken')
			else:

				user = User.objects.create_user(username=username,email=email,password=password1)
				user.save()
				messages.success(request,'successfully created for ' + f'{user}')
				return redirect('Login')

		else:
			messages.error(request,'Invalid password or email')
	

	return render(request,'store/register.html')

def Login(request):
	if request.method == 'POST':
		username = request.POST['username']
		password = request.POST['password']
		
        
		user = authenticate(request,username=username,password=password)
	
			

		if user is not None:

			login(request,user)
			return redirect('store')
		else:
			messages.info(request,'Invalid Credentials')
			return redirect('Login')
	else:
		if request.user.is_authenticated:
			return redirect('store')

		else:
			return render(request,'store/login.html')

def logout(request):
    django_logout(request)
    return redirect('Login')


def createproducts(request):
	
		form = productcreation()
		if request.method == 'POST':
			form = productcreation(request.POST,request.FILES)
			if form.is_valid():
				form.save()
				messages.success(request, 'User created')
				return redirect('store')
		context = { 'form':form }
			


	
		return render(request,'store/createproducts.html',context)
	


def store(request):
	

	images = Imagesapp.objects.all()
	context = {'images':images}
	return render(request, 'store/store.html', context)


def edit(request,pk):
	obj = get_object_or_404(Imagesapp,id=pk)
	form = productcreation(instance=obj)
	if request.method == 'POST':
		form = productcreation(request.POST,request.FILES,instance=obj)
		if form.is_valid():
			form.save()
	
		return redirect('store')
	context = { 'form':form }

	return render(request,'store/recreate.html',context)

"""
def edit(request,pk):
	obj = Imagesapp.objects.get(id=pk)
	obj.delete()
	django_logout(request)
	return redirect('recreate')
"""
	
def recreate(request):
	if request.POST:
			
			
			
			productname =request.POST['productname']
			
	                                               
		
			images = request.FILES.get('images')
		
			
			Imagesapp.objects.create(
			         
			         name = productname,
			        
			         image = images,
			        
			        )
			return redirect('Login')
	return render(request,'store/recreate.html')

def viewPhoto(request, pk):
    photo =Imagesapp.objects.get(id=pk)
    return render(request, 'store/photo.html', {'photo': photo})	

	



def confirm(request,pk):
	id=pk
	context={'id':id}	
	return render(request, 'store/confirm.html',context)	

	

def delete(request,pk):
	
	
	

	obj = Imagesapp.objects.get(id=pk)

	obj.delete()
	return redirect('store')


def dele(request,pk):
	

	images = Language.objects.all()
	context = {'images':images}
	
	return render(request, 'store/dele.html',context)
