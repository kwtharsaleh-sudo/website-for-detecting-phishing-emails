function checkEmail(){

    let text = document.getElementById("emailText").value.toLowerCase();

    let fakeWords = [
        "ربحت",
        "اضغط هنا",
        "كلمة المرور",
        "تحويل أموال",
        "bank",
        "winner",
        "free",
        "click"
    ];

    let danger = false;

    for(let i = 0; i < fakeWords.length; i++){

        if(text.includes(fakeWords[i])){
            danger = true;
        }

    }

    let result = document.getElementById("result");

    if(danger){

        result.innerHTML = "⚠️ الإيميل خطر";
        result.className = "danger";

    }else{

        result.innerHTML = "✅ الإيميل آمن";
        result.className = "safe";

    }

}
