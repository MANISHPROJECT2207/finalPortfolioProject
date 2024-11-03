from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name="notes")

    def __str__(self):
        return self.title


class Skills(models.Model):
    list_of_skill = models.JSONField(default=list)
    created_at =  models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name="skills")



class Education(models.Model):
    course = models.CharField(max_length=100)
    college = models.CharField(max_length=100)
    stream = models.CharField(max_length=100)
    cgpa = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name="education")

    def __str__(self):
        return self.course
 
class Experience(models.Model):
    domain = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    tech = models.CharField(max_length=100)
    des = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name="experience")
    def __str__(self):
        return self.company
 
class Project(models.Model):
    title = models.CharField(max_length=100)
    link = models.CharField(max_length=100)
    tech = models.CharField(max_length=100)
    des = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name="project")
    def __str__(self):
        return self.title
 


class Personal(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    mobile =models.TextField()
    domain =models.TextField()
    dev =models.TextField()
    dsa =models.TextField()
    resume = models.TextField()
    linkdin =models.TextField()
    github=models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name="Personal")

    def __str__(self):
        return self.name    



