function checkEmail() {
  let email = document.getElementById("emailInput").value;
  let result = document.getElementById("result");

  // فحص بسيط (شكل ايميل فقط)
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    result.innerHTML = "الرجاء إدخال ايميل";
    result.style.color = "red";
  }
  else if (pattern.test(email)) {
    result.innerHTML = "✔ الايميل آمن";
    result.style.color = "green";
  }
  else {
    result.innerHTML = "⚠ الايميل غير صحيح أو مشبوه";
    result.style.color = "red";
  }
}
