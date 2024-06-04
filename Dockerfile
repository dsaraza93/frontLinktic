# Etapa de compilación de la aplicación Angular
FROM node:16-alpine AS builder

WORKDIR /app

COPY . .

# Instalar dependencias y construir la aplicación Angular
RUN npm install
RUN npm run build -- --output-path=/app/dist

# Etapa de producción
FROM nginx:alpine

# Copia los archivos construidos de la etapa de compilación a la imagen final de Nginx
COPY ../../dist/front-linktic /usr/share/nginx/html

# Exponer el puerto 80 para la aplicación web
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]

