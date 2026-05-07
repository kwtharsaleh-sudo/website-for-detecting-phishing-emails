function checkEmail() {

  let email = document.getElementById("email").value;
  let result = document.getElementById("result");

  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    result.innerHTML = "اكتب ايميل";
    result.style.color = "red";
    return;
  }

  if (!pattern.test(email)) {
    result.innerHTML = "⚠ ايميل غير صحيح";
    result.style.color = "red";
    return;
  }

  let domain = email.split("@")[1];

  let fake = ["tempmail.com", "mailinator.com", "yopmail.com"];

  if (fake.some(d => domain.includes(d))) {
    result.innerHTML = "⚠ ايميل وهمي";
    result.style.color = "red";
  }
  else {
    result.innerHTML = "✔ ايميل آمن";
    result.style.color = "green";
  }
}
