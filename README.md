# TEST para Sooft

Comentarios, para instalar el codigo usar

```
npm install
```

Luego ejecutar el entorno con

```
npm run dev
```

# Variables de entorno

Se debe crear un archivo .env en la raiz del proyecto con el siguiente contenido

```
API_PORT=3000
NODE_ENV=development
```

# Metodos para utilizar desde Postman o Insomnia

Guardar restaurante - Via POST

```
http://localhost:3000/api/restorant/save
```

Con la estructura

```json
{
	"name" : "Alsina Restorant",
	"kindOfRestaurant": "chilena",
	"songs" : [
		"Sweet Child O’mine","Persiana Americana","Don’t stop me now"
	]
}
```

Obtener la lista de restaurantes - Via GET

```
http://localhost:3000/api/restorant
```

Buscar un resturante por el campo kindOfRestaurant - Via GET

```
http://localhost:3000/api/restorant/kindOfRestaurant/chilena
```

