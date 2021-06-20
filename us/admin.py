from django.contrib import admin
from django.contrib.auth.models import Group

# Register your models here.
from .models import Information, Organization, Reason


def make_approval(modeladmin, request, queryset):
    queryset.update(requested=False, granted=True)


make_approval.short_description = 'Update pending requests'

class InformationAdmin(admin.ModelAdmin):
    list_display = [
        'phone_number',
        'email',
        'reason',
        'date',
        'organization',
        'description',
        'full_name',
        'requested',
        'granted',

    ]
    list_display_links = [
        'email',
    ]

    list_filter = [
        'date',
        'requested',

    ]

    search_fields = [
        'email',
        'date',
        'requested',
    ]

    actions = [make_approval]





admin.site.register(Information, InformationAdmin)
admin.site.register(Organization)
admin.site.register(Reason)
admin.site.unregister(Group)



