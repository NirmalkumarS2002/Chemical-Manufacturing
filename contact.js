const nameInput = document.querySelector("#c-name");
const companyInput = document.querySelector("#c-cname");
const emailInput = document.querySelector("#c-mail");
const phoneInput = document.querySelector(".c-no");
const messageInput = document.querySelector("textarea");
const sendBtn = document.querySelector(".sc-btn-solid");


// 1. NAME - Letters and space only
nameInput.addEventListener("input", () => {
    nameInput.value = nameInput.value.replace(/[^A-Za-z\s]/g, "");
});

companyInput.addEventListener("input", () => {
    companyInput.value = companyInput.value.replace(/[^A-Za-z\s]/g, "");
});

// 2. PHONE NUMBER - Numbers only
phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");

    // Maximum 10 digits
    if (phoneInput.value.length > 10) {
        phoneInput.value = phoneInput.value.slice(0, 10);
    }
});


// 3. SEND BUTTON VALIDATION
sendBtn.addEventListener("click", () => {

    const name = nameInput.value.trim();
    const company = companyInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();

    // Email Regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (name === "") {
        alert("Please enter your full name");
        nameInput.focus();
        return;
    }

    if (name.length < 3) {
        alert("Name must contain at least 3 characters");
        nameInput.focus();
        return;
    }

    if (company === "") {
        alert("Please enter your company name");
        companyInput.focus();
        return;
    }

    if (email === "") {
        alert("Please enter your email address");
        emailInput.focus();
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        emailInput.focus();
        return;
    }

    if (phone === "") {
        alert("Please enter your phone number");
        phoneInput.focus();
        return;
    }

    if (phone.length !== 10) {
        alert("Phone number must be exactly 10 digits");
        phoneInput.focus();
        return;
    }

    if (message === "") {
        alert("Please enter your requirement");
        messageInput.focus();
        return;
    }

    alert("Message sent successfully!");
    nameInput.value = ""
    companyInput.value = ""
    emailInput.value = ""
    phoneInput.value = ""
    messageInput.value = ""

});