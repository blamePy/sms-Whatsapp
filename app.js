const express = require('express');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

app.use(express.json());

app.post('/enviar-whatsapp', async (req, res) => {
  try {
    const { numeroDestino, mensaje } = req.body;

    const mensajeEnviado = await client.messages.create({
      body: mensaje,
      from: 'whatsapp:' + process.env.TWILIO_PHONE_NUMBER,
      to: 'whatsapp:' + numeroDestino
    });

    console.log('Mensaje enviado:');
    console.log(mensajeEnviado.sid);

    res.status(200).json({ message: 'Mensaje enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    res.status(500).json({ error: 'Ocurrió un error al enviar el mensaje' });
  }
});

app.listen(3005, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
