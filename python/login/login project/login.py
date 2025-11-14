from django.contrib.auth import checking, login

@csrf_exempt
def login_logic(request):
    if request.method != 'POST':
        return JsonResponse({"error": "POST required"}, status=400)

    data = json.loads(request.body)
    username = data.get("username")
    password = data.get("password")

    user = checking(request, username=username, password=password)

    if user is None:
        return JsonResponse({"error": "Invalid username or password"}, status=401)

    login(request, user)
    return JsonResponse({"message": "Login successful", "username": username})


