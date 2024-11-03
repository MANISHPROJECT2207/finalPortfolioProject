from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note,Personal,Education,Experience,Skills,Project

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id","email","password"]
        extra_kwargs = {"password": {"write_only": True}}
    
    def create(self,validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user  


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id","title","content","created_at","author"]
        extra_kwargs = {"author": {"read_only": True}}

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ["id","course","college","stream","cgpa","created_at","author"]
        extra_kwargs = {"author": {"read_only": True}}

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ["id","domain","company","tech","des","created_at","author"]
        extra_kwargs = {"author": {"read_only": True}}


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ["id","title","link","tech","des","created_at","author"]
        extra_kwargs = {"author": {"read_only": True}}        

class PersonalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personal
        fields = ["id","name","email","domain","dev","dsa","resume","linkdin","github","created_at","author"]
        extra_kwargs = {"author": {"read_only": True}}        
    
class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = ["id","list_of_skill","created_at","author"]
        extra_kwargs = {"author": {"read_only": True}} 

