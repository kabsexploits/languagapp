let saveButton = document.getElementById('myModelSave');
saveButton.onclick = function() {
    let accepted = confirm("Are you sure you want to save?");
    if (accepted) {
        document.getElementById('myModelForm').submit();
    }
}