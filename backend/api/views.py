from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer,NoteSerializer,PersonalSerializer,EducationSerializer,ExperienceSerializer,SkillsSerializer,ProjectSerializer
from rest_framework.permissions import IsAuthenticated,AllowAny
from .models import Note,Personal,Education,Experience,Skills,Project
# Create your views here.
from rest_framework.response import Response
from rest_framework import generics, status, pagination
from rest_framework.exceptions import NotFound


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]   


    def get_queryset(self):
        user = self.request.user
        # returning the list of note that user has designed
        return Note.objects.filter(author=user) 
    

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


class UpdateNote(generics.RetrieveUpdateAPIView):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()
    lookup_field = 'id'

    def post(self, request, id, *args, **kwargs):
        try:
            # user = User.objects.get(id=id)
            note = Note.objects.get(id = id)
            
            x = request.data.get('title')
            x = request.data.get('content')
            if x:
                note.branch = x
                note.save()
            
            serializer = NoteSerializer(note)
            return Response(serializer.data, status=status.HTTP_200_OK)

        except Note.DoesNotExist:
            return Response({"error": "Skills not found"}, status=status.HTTP_404_NOT_FOUND)

class EducationCreate(generics.ListCreateAPIView):
    serializer_class = EducationSerializer
    permission_classes = [IsAuthenticated]   


    def get_queryset(self):
        user = self.request.user
        # returning the list of note that user has designed
        return Education.objects.filter(author=user) 
    

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


class ExperienceCreate(generics.ListCreateAPIView):
    serializer_class = ExperienceSerializer
    permission_classes = [IsAuthenticated]   


    def get_queryset(self):
        user = self.request.user
        # returning the list of note that user has designed
        return Experience.objects.filter(author=user) 
    

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


class ProjectCreate(generics.ListCreateAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]   


    def get_queryset(self):
        user = self.request.user
        # returning the list of note that user has designed
        return Project.objects.filter(author=user) 
    

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)



class PersonalCreate(generics.ListCreateAPIView):
    serializer_class = PersonalSerializer
    permission_classes = [IsAuthenticated]   


    def get_queryset(self):
        user = self.request.user
        # returning the list of note that user has designed
        return Personal.objects.filter(author=user) 
    

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
            
        else:
            print(serializer.errors)   


class SkillsCreate(generics.ListCreateAPIView):
    serializer_class = SkillsSerializer
    permission_classes = [IsAuthenticated]   


    def get_queryset(self):
        user = self.request.user
        # returning the list of note that user has designed
        return Skills.objects.filter(author=user) 
    

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
            
        else:
            print(serializer.errors)  

class UpdateSkills(generics.RetrieveUpdateAPIView):
    serializer_class = SkillsSerializer
    queryset = Skills.objects.all()
    lookup_field = 'id'

    def post(self, request, id, *args, **kwargs):
        try:
            # user = User.objects.get(id=id)
            skill = Skills.objects.get(id=id)
            
            x = request.data.get('list_of_skill')
           
            if x:
                skill.list_of_skill = x
                skill.save()
            
            serializer = SkillsSerializer(skill)
            return Response(serializer.data, status=status.HTTP_200_OK)

        except Skills.DoesNotExist:
            return Response({"error": "Skills not found"}, status=status.HTTP_404_NOT_FOUND)

# class SkillsUpdate(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Skills.objects.all()
#     serializer_class = SkillsSerializer
#     lookup_field = 'id'

#     def update(self, request,id, *args, **kwargs):
#         try:
#             item = Skills.objects.get(author=id)
#             serializer = SkillsSerializer(item,list_of_skill = request.list_of_skill, partial=True)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response({"message": "Item updated successfully!", "item": serializer.data}, status=status.HTTP_205_RESET_CONTENT)
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#         except Skills.DoesNotExist:
#             raise NotFound(detail="Item not found", code=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, id, *args, **kwargs):
#         try:
#             item = Skills.objects.get(author=id)
#             item.delete()
#             return Response({"message": "Item deleted successfully!"}, status=status.HTTP_204_NO_CONTENT)
#         except Skills.DoesNotExist:
#             raise NotFound(detail="Item not found", code=status.HTTP_404_NOT_FOUND)
          

class d(generics.UpdateAPIView):
    pass


class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)
    

class EducationDelete(generics.DestroyAPIView):
    serializer_class = EducationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Education.objects.filter(author=user)
    
      
class ExperienceDelete(generics.DestroyAPIView):
    serializer_class = ExperienceSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Experience.objects.filter(author=user)
    

      
class ProjectDelete(generics.DestroyAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Project.objects.filter(author=user)


