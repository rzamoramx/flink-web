# flink-web

Servicio Frontend de simbolos para prueba de flink, escrito en noddejs y expressjs.

## Requerimientos

* node 12+
* npm 8+

## Instrucciones

### Metodo 1
Se puede usar docker, crear la imagen y correr el contenedor 
```
sudo docker build -t flink-test-web-node .
```
y luego
```
sudo docker run -it -d --name flink-test-web -p 3000:3000 flink-test-web-node:latest
```
### Metodo 2
o se puede clonar el repo y ejecutar
```
npm i
```
y luego

```
node index.js
```

## Uso local

ir al navegador con la direccion
```
localhost:3000/index
```

## Uso en la nube

ir al navegador con la direccion
```
https://s2g3de.deta.dev/index
```