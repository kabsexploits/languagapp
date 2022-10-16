def register(request):
    form = BookCreate()
    if request.method == 'POST':
        form = BookCreate(request.POST)
        if form.is_valid():
            form.save()
            img = form.cleaned_data.get(" picture")
            describe =form.cleaned_data.get('describe')
            email = form.cleaned_data.get('email')
            search = form.cleaned_data.get('search')
	    obj = Book.objects.create(name = name,images= img,describe=describe,
                                      author=author,email = email,search =search)
	    return redirect('login_page')
	else:
            messages.error(request, "Invalid email or password")
            return redirect('register')
        all_forms = {'forms':form}
        return render(request,'store/registe.html',all_forms)
	
