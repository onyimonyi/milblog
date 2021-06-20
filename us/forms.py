from django import forms
from .models import Organization, Reason, Information



class InfoForm(forms.ModelForm):
    description = forms.CharField(widget=forms.Textarea(attrs={
        'rows': 3,
        'placeholder': 'Comment * Max: 500 Characters',
        'class': 'form-control'
    }))
    email = forms.EmailField(widget=forms.TextInput(attrs={
        'label':'name',
        'placeholder': 'email@',
        'class': 'form-control'}))
    full_name = forms.CharField(widget=forms.TextInput(attrs={
        'label': 'name',
        'placeholder': 'FULL NAME',
        'class': 'form-control'}))
    organization = forms.ModelChoiceField(widget=forms.Select(attrs={
        'class': 'form-control',
        'placeholder': 'select organization'
    }), queryset=Organization.objects.all(), to_field_name="org")
    reason = forms.ModelChoiceField(widget=forms.Select(attrs={
        'class': 'form-control',
        'placeholder': 'select your reason'
    }), queryset=Reason.objects.all(), to_field_name="why")
    phone_number = forms.CharField(widget=forms.NumberInput(attrs={
        'placeholder': 'your phone number',
        'class': 'form-control'
    }))

    class Meta:
        model = Information
        fields = ['full_name', 'email', 'description', 'reason', 'organization', 'phone_number']
