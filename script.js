function checkEmail() {

    let email = document.getElementById("emailText").value.toLowerCase();

    let realDomains = [
        "gmail.com",
        "yahoo.com",
        "outlook.com",
        "hotmail.com",
        "icloud.com",
        "proton.me",
        "aol.com",
        "live.com",
        "msn.com",
        "yandex.com"
    ];

    let result = document.getElementById("result");

    let danger = false;

    if (email.includes("@")) {

        let domain = email.split("@")[1];

        if (!realDomains.includes(domain)) {

            danger = true;

        }

    } else {

        danger = true;

    }

    if (danger) {

        result.innerHTML = "⚠️ الإيميل خطر";
        result.className = "danger";

    } else {

        result.innerHTML = "✅ الإيميل آمن";
        result.className = "safe";

    }

}
