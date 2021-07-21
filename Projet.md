# Description du projet
## Find Zip Code

Le but est de retrouver le nom d'une commune de France à partir d'un code postal.

L'idée m'est venue alors que je faisais un achat en ligne. Certains sites proposent le nom de la commune automaniquement et d'autres non. Je me suis dit que j'allais voir comment cela fonctionne en React. 

Je voudrais dans un premier temps tester un hook d'état et un appel à une base de données.

## Préparation pour coder

Erreur: Node Sass version 6.0.1 is incompatible with ^4.0.0 || ^5.0.0.
La version de node n'accepte pas la version de sass. Je désintalle node sass pour mettre une version moins récente.
https://stackoverflow.com/questions/64625050/error-node-sass-version-5-0-0-is-incompatible-with-4-0-0

Mais j'ai l'impression que sass ne marche pas. Impossible d'appeler les vars depuis les fichiers de style. A suivre.


## ajaxCity

L'idée est de récupérer dans la base de données de l'Insee (je pensais un json local mais j'ai trouvé une API) le nom de la ville qui correspond au code postal qu'on a entré dans le state. Je vais m'inspirer de code utilisé pour une application de conversion de monnaie faite en cours.


Solution de facilité? 
https://developers.google.com/maps/documentation/javascript/places-autocomplete


