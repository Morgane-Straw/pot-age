Le site est accessible à http://www.xjacobguizon.com:8080/
Pgadmin est accessible à http://www.xjacobguizon.com:5050/login?next=%2F
Les requêtes API sont disponible à www.xjacobguizon.com:8080/api/fonction avec Postman par exemple

Sur vos machine, remplacer tout ce qui est avant le port part localhost

# Initialisation du projet

Cloner le projet

git clone https://github.com/Morgane-Straw/pot-age.git

cd pot-age


# Initialiser Laravel

cd backend

composer install

un soucis avec composer, essayez la dernière solution de ce post https://github.com/maximebf/php-debugbar/issues/482


# Initialiser nextjs

cd ../frontend/

yarn

(et si yarn marche pas npm install --global yarn


 et après 
 
 yarn
 
 
 )

# Créer le projet
Revenez en arrière
cd ..

- Construire votre projet, ca peut prendre du temps (5min max) :

(vous tapez la commande :

  sudo docker-compose build
  
)

- Testez votre projet :

(vous tapez la commande :

  sudo docker-compose up
  
)

Vous pouvez voir le résultat à http://localhost:3000





# Commande utile

- Installer laravel pour créer le backend : 
(vous tapez la commande : 
  
  composer create-project --prefer-dist laravel/laravel backend

)
- Installer next pour créer le frontend : 
(vous tapez la commande : 
  
  npx create-next-app frontend --use-npm

# Pour lancer le serveur

- Construire votre projet, ca peut prendre du temps (5min max) :
(vous tapez la commande :
  sudo docker-compose build
)
- Testez votre projet :
(vous tapez la commande :
  sudo docker-compose up
)
Vous pouvez voir le résultat à http://localhost:3000


# En cas de problème de mise à jour du site
Essayer sudo docker-compose build

# Pour modifier next
Modifier les fichiers dans frontend/
Vous pouvez modifier les fichier alors que le serveur est lancé, les mises à jour seront automatique

# Pour modifier laravel
Modifier les fichiers dans backend/
Vous pouvez modifier les fichier alors que le serveur est lancé, les mises à jour seront automatique











# !!!!! Ancien Readme !!!!! #
# pot-age
Faut avoir installé Node : https://nodejs.org/ 


Après installer yarn avec cette commande :



npm install --global yarn




Et après vous ouvrez la console dans le dossier "pot-age" taper :



yarn



et ça vous installe toutes les librairies nécessaires pour run le projet :)


# Clonage
