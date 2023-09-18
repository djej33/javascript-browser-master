### Exercices JavaScript : Fetch API

Ce projet propose six exercices pour vous aider à comprendre l'utilisation de la Fetch API en JavaScript en effectuant des requêtes vers des API gratuites. Les exercices portent sur la création, l'envoi, et la gestion des requêtes Fetch pour récupérer des données à partir de ressources distantes.

#### Exercice 1 : Effectuer une Requête GET vers une API
**Objectif :** Effectuez une requête GET vers une API à l'aide de la Fetch API.

1. Créez une fonction JavaScript nommée `fetchGetRequest` qui utilise la Fetch API pour effectuer une requête GET vers une API de météo gratuite (par exemple, OpenWeatherMap API : `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=VOTRE_CLE_API`).
2. Utilisez `console.log` pour afficher la réponse de la requête dans la console.

#### Exercice 2 : Gérer les Réponses JSON depuis une API
**Objectif :** Gérez les réponses JSON lors de l'envoi de requêtes avec Fetch depuis une API.

1. Créez une fonction JavaScript nommée `fetchJsonResponse` qui envoie une requête GET vers une API de taux de change (par exemple, ExchangeRate-API : `https://api.apilayer.com/exchangerates_data/latest`).
2. Utilisez la méthode `json()` de la réponse pour extraire les données JSON.
3. Affichez les taux de change dans la console.

#### Exercice 3 : Envoyer une Requête POST vers une API
**Objectif :** Envoyez une requête POST vers une API gratuite à l'aide de la Fetch API.

1. Créez une fonction JavaScript nommée `fetchPostRequest` qui envoie une requête POST vers une API de création de tâches (par exemple, JSONPlaceholder API : `https://jsonplaceholder.typicode.com/todos`).
2. Utilisez `console.log` pour afficher la réponse de la requête dans la console.

#### Exercice 4 : Gérer les Erreurs de Requête depuis une API
**Objectif :** Gérez les erreurs lors de l'envoi de requêtes avec Fetch vers une API.

1. Créez une fonction JavaScript nommée `handleFetchErrors` qui gère les erreurs lors de l'envoi de requêtes Fetch vers une API de génération de blagues (par exemple, JokeAPI : `https://v2.jokeapi.dev/joke/Programming`).
2. Affichez un message d'erreur dans la console en cas d'échec de la requête.

#### Exercice 5 : Gérer les En-têtes de Requête pour une API
**Objectif :** Utilisez des en-têtes personnalisés lors de l'envoi de requêtes Fetch vers une API gratuite.

1. Créez une fonction JavaScript nommée `fetchWithHeaders` qui envoie une requête GET vers une API de traduction (par exemple, RapidAPI Language Translation : `https://rapidapi.p.rapidapi.com/language/translate/v2`).
2. Utilisez `console.log` pour afficher la réponse de la requête dans la console.

#### Exercice 6 : Annuler une Requête Fetch vers une API
**Objectif :** Annulez une requête Fetch vers une API gratuite en cours d'exécution.

1. Créez une fonction JavaScript nommée `cancelFetchRequest` qui permet d'annuler une requête Fetch en cours d'exécution vers une API de photos aléatoires (par exemple, Lorem Picsum : `https://picsum.photos/v2/list`).
2. Affichez un message indiquant que la requête a été annulée dans la console.

Ces exercices vous aideront à vous familiariser avec l'utilisation de la Fetch API pour effectuer des requêtes HTTP asynchrones en JavaScript tout en utilisant des API gratuites. Amusez-vous bien !
