function checkEmail() {

    let email = document.getElementById("emailText").value.toLowerCase().trim();
    let result = document.getElementById("result");

    // 1. فحص الشكل الأساسي
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 2. مؤشرات خطر (مش كلمات حتمية، إشارات فقط)
    let riskySignals = [
        "verify",
        "password",
        "bank",
        "urgent",
        "click",
        "winner",
        "free",
        "login",
        "account",
        "update"
    ];

    let riskCount = 0;

    // فحص الشكل
    if (!emailPattern.test(email)) {
        result.innerHTML = "⚠️ الإيميل غير صحيح شكليًا";
        result.className = "danger";
        return;
    }

    // فحص المؤشرات
    for (let i = 0; i < riskySignals.length; i++) {
        if (email.includes(riskySignals[i])) {
            riskCount++;
        }
    }

    // النتيجة الذكية
    if (riskCount === 0) {

        result.innerHTML = "✅ الإيميل آمن";
        result.className = "safe";

    } else if (riskCount <= 2) {

        result.innerHTML = "⚠️ الإيميل مشتبه فيه";
        result.className = "danger";

    } else {

        result.innerHTML = "🚨 الإيميل خطر جداً";
        result.className = "danger";

    }

}
