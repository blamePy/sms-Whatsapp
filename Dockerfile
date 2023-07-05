# Utilizar una imagen de Node.js versión 14 como base
FROM node:14-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de la aplicación
COPY . .

# Instalar las dependencias
RUN npm install --production

# Exponer el puerto en el que la aplicación estará escuchando
EXPOSE 3005

# Comando para ejecutar la aplicación
CMD [ "node", "app.js" ]
