function submitForm(e) {
    e.preventDefault();
    var firstName = document.forms["userForm"][0];
    var lastName = document.forms["userForm"][1];
    var age = document.forms["userForm"][2];

    alert('Hello ' + firstName.value + ' ' + lastName.value + ', You are ' + age.value + ' years old');

    firstName.value = "";
    lastName.value = "";
    age.value = "";
}
