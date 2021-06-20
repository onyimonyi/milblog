from django.urls import path
from .views import (
    info_view,
    home_view,
    privacy_view,
    terms_view,
    section_view,
    fear_view,

)

app_name = 'us'
urlpatterns = [
    path('contact/', info_view, name='contact'),
    path('home/', home_view, name='home-view'),
    path('privacy/', privacy_view, name='privacy'),
    path('terms/', terms_view, name='terms'),
    path('section/', section_view, name='section'),
    path('no-fear/', fear_view, name='no-fear'),

]
