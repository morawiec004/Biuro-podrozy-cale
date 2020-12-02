function sendEmail() {
    const name = document.getElementById('contactFormInputName');
    const email = document.getElementById('contactFormInputEmail');
    const subject = document.getElementById('contactFormInputSubject');
    const content = document.getElementById('contactFormInputArea');
    const emailConfirmationH4 = document.getElementById('emailConfirmation');

    const emailConfirmationMessage = confirm(name.value + ", czy chcesz wysłać wiadomość o treści: "
        + content.value + " korzystając z adresu email: " + email.value);

    if (emailConfirmationMessage) {
        emailConfirmationH4.style.visibility = 'visible';
        emailConfirmationH4.innerHTML = 'Email został wysłany!';
        emailConfirmationH4.style.color = 'green';
        name.value = '';
        email.value = '';
        subject.value = '';
        content.value = '';
    } else {
        emailConfirmationH4.style.visibility = 'visible';
        emailConfirmationH4.style.color = 'red';
        emailConfirmationH4.innerHTML = 'Email nie został wysłany!';
    }
}