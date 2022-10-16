from django.urls import path

from . import views

urlpatterns = [
	#Leave as empty string for base url
	 path('api/', views.api_home, name="api_home"),
	 path('lanre/', views.ResultTrans, name="ResultTrans"),
    path('lan/', views.Translate, name="Translate"),
	path('', views.getroutes, name="getroutes"),
	
	path('language/', views.language, name="language"),

	
	path('createproducts/', views.createproducts, name="createproducts"),

	path('MyImagesPage/', views.MyImagesPage, name="MyImagesPage"),
    path('register/', views.register, name="register"),
	path('store/', views.store, name="store"),
	path('logout/', views.logout, name="logout"),
	path('edit/<int:pk>/', views.edit, name="edit"),
	  path('photo/<str:pk>/', views.viewPhoto, name='photo'),
	    path('View_Photo/<str:pk>/', views.View_Photo, name='View_Photo'),
	path('recreate/', views.recreate, name="recreate"),
	path('delete/<int:pk>/', views.delete, name="delete"),
	path('dele/<int:pk>/', views.dele, name="dele"),
	path('confirm/<int:pk>/', views.confirm, name="confirm"),

	path('Login/', views.Login, name="Login"),


	path('crispy/', views.crispy, name="crispy"),


]