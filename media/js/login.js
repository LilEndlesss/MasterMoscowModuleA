document.addEventListener("DOMContentLoaded", function () {
    var recoveryForm = document.getElementById("password-recovery-form");
    var successMessage = document.getElementById("success-message");
    var recoverButton = document.getElementById("recover-password-button");
    var forgotPasswordLink = document.getElementById("forgot-password-link");

    forgotPasswordLink.addEventListener("click", function (event) {
        event.preventDefault();
        recoveryForm.style.display = "block";
    });

    recoverButton.addEventListener("click", function () {

        recoveryForm.style.display = "none";
        successMessage.style.display = "block";
    });
});
