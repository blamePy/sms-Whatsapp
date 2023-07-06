# sms-Whatsapp
Api que envia sms whatsapp con Twilio

#para levantar proyecto

docker build -t whatsappsms:latest .

#para ejecutar

docker run -d -p 3005:3005 whatsappsms
