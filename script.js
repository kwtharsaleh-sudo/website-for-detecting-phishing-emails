<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>Email Checker Pro</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

<canvas id="bg"></canvas>

<div class="container">

  <div class="card">

    <h2>مرحباً بك </h2>
    <p2>نظام كشف الإيميلات</p2>

    <input type="text" id="email" placeholder="اكتب الإيميل هنا">

    <button onclick="checkEmail()">فحص الايميل</button>

    <div id="result"></div>

  </div>

</div>

<!-- الصوت -->
<audio id="safeSound" src="https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg"></audio>
<audio id="dangerSound" src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"></audio>

<script src="script.js"></script>
</body>
</html>
