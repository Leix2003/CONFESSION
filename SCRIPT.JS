<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confession to Telegram</title>
</head>
<body>
  <h1>Confession Telegram</h1>
  <form id="confessionForm">
    <textarea id="message" rows="5" placeholder="Tulis confession anda di sini..." required></textarea>
    <button type="submit">Hantar Confession</button>
  </form>

  <script>
    const form = document.getElementById('confessionForm');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();  // Halang refresh page

      const message = document.getElementById('message').value;
      const botToken = '7683386867:AAFG5XheT-ImjcB-6dLk4WFPLUIJZpRzae8';  // Token bot anda
      const chatID = '-1002415472310';  // Gantikan dengan Chat ID grup anda

      // URL API untuk hantar mesej
      const url = https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatID}&text=${encodeURIComponent(message)};

      try {
        const response = await fetch(url);  // Hantar permintaan ke Telegram
        if (response.ok) {
          alert('Confession berjaya dihantar!');
          form.reset();  // Kosongkan borang selepas penghantaran
        } else {
          alert('Ralat semasa menghantar confession: ' + response.status);
        }
      } catch (error) {
        alert('Tidak dapat berhubung dengan Telegram: ' + error);
      }
    });
  </script>
</body>
</html>