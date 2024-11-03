from django.urls import path
from . import views

urlpatterns = [
    path("notes/",views.NoteListCreate.as_view(),name="note-list"),
    path("notes/delete/<int:pk>/",views.NoteDelete.as_view(),name="delete-note"),
    path("notes/update/<int:id>/",views.UpdateNote.as_view(),name="update-note"),
    path("Personal/",views.PersonalCreate.as_view(),name="personal"),
    path("education/",views.EducationCreate.as_view(),name="education"),
    path("education/delete/<int:pk>/",views.EducationDelete.as_view(),name="delete-education"),
    path("experience/",views.ExperienceCreate.as_view(),name="experience"),
    path("experience/delete/<int:pk>/",views.ExperienceDelete.as_view(),name="delete-exp"),
    path("project/",views.ProjectCreate.as_view(),name="project"),
    path("project/delete/<int:pk>/",views.ProjectDelete.as_view(),name="delete-project"),
    path("skills/",views.SkillsCreate.as_view(),name="skills"),
    path("skills/update/<int:id>/",views.UpdateSkills.as_view(),name="update-skill"),
    # path('skills/<int:id>', views.SkillsUpdate.as_view(), name='skills_update'),
]
