function isSuspicious(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        return true;
    }

    let score = 0;

    const parts = email.split("@");
    const name = parts[0];

    if (name.length > 15) score++;
    if (/[0-9]{4,}/.test(name)) score++;
    if (/[^a-zA-Z0-9._%+-@]/.test(email)) score++;

    return score >= 2;
}

function checkEmail() {

    const email = document.getElementById("email").value;

    const result = document.getElementById("result");

    if (isSuspicious(email)) {

        result.innerHTML = "⚠️ الإيميل خطير";
        result.style.color = "red";

    } else {

        result.innerHTML = "✅ الإيميل آمن";
        result.style.color = "green";
    }
}