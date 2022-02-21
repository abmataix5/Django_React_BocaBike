from rest_framework import permissions

class IsStaff(permissions.BasePermission):
    message = 'You are not staff'
    def has_permission(self, request, view):
        return request.user and request.user.is_staff

        