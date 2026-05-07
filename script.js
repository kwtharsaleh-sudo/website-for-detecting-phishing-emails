body {
  margin: 0;
  font-family: Arial;
  background: white;

  /* مهم جداً: توسيط كامل */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* العنوان في النص */
h1 {
  margin-top: 50px;
  font-size: 24px;
  text-align: center;
  color: #222;
}

/* الصندوق في الوسط */
.box {
  margin-top: 60px;
  background: white;
  width: 350px;
  padding: 30px;
  border-radius: 15px;

  box-shadow: 0 0 15px rgba(0,0,0,0.15);
  text-align: center;
}

/* input */
input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 10px;
  outline: none;
}

/* زر */
button {
  width: 100%;
  padding: 12px;
  background: black;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background: #333;
}

/* النتيجة */
#result {
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
}
