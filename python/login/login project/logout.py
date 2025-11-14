from django.contrib.auth import logout

@csrf_exempt
def logout_logic(request):
    logout(request)
    return JsonResponse({"message": "Logged out"})
