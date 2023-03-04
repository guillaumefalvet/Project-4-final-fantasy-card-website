# Atelier Solo : Triple Triad Deck Builder

Triple Triad est un jeu de plateau à base de cartes, inventé par SquareEnix et présent dans Final Fantasy 8.

Les règles sont plutôt simples, mais ce n'est pas ce qui nous intéresse aujourd'hui !

On a récupéré toutes les données relatives aux cartes ainsi que leurs visuels. Et on voudrait construire une application pour gérer nos cartes, chercher des cartes selon plusieurs critères, et même gérer nos decks.

# SETUP
1. `npm install`
2. create a psql user and database.
3. add `./data/create_db.sql` in a psql database.
4. rename `.env_example` to `.env` and change the information in it according the the psql user and database you created.