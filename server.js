const express = require('express');
const app = express();

app.use(express.text({ type: '*/*' }));

app.route('/iclock/cdata')
  .get((req, res) => {
    console.log("Cihaz bağlandı (GET talebi)");
    res.send("1");
  })
  .post((req, res) => {
    const attendanceData = req.body;
    console.log("Gelen Geçiş Verisi:\n", attendanceData);
    res.send("OK\n");
  });

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`ZKTeco Node.js köprü sunucusu ${PORT} portunda çalışıyor...`);
});
