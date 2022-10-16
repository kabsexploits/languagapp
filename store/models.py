from distutils.command.upload import upload
from django.db import models
from django.contrib.auth.models import User

# Create your models here.




class Imagesapp(models.Model):
	id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=200)
	image = models.ImageField(upload_to='img')
	date_added = models.DateTimeField(auto_now_add=True)
	

	def __str__(self):
		return self.name

	@property
	def imageURL(self):
		try:
			url = self.image.url
		except:
			url = ''
		return url


class Language(models.Model):
	id = models.AutoField(primary_key=True)
	Text = models.TextField(max_length=200)
	Meaning = models.TextField(max_length=200)

	def __str__(self):
		return self.Text
