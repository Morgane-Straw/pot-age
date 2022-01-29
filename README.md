# Initialisation du projet
Pour votre premier pull, vous devez :
- créer un dossier "pot-age"

Dans ce dossier vous devez :
- Installer laravel pour créer le backend : 
(vous tapez la commande : 
  composer create-project --prefer-dist laravel/laravel backend
)
- Installer next pour créer le frontend : 
(vous tapez la commande : 
  npx create-next-app frontend --use-npm
)
- Suppression des fichiers génant 
sudo rm frontend/style/*;
sudo rm frontend/public/*;
sudo rm frontend/pages/*;
sudo rm frontend/package-lock.json;
sudo rm frontend/next.config.js;
sudo rm frontend/README.md;
sudo rm frontend/.gitignore;
sudo rm frontend/.eslintrc.json;

# Relier a git
- mettez vous dans votre dossier pot-age
- tapez :
-   git init
-   git add .
-   git commit -am "my first commit *pseudo"
-   git remote add origin https://github.com/Morgane-Straw/pot-age.git
-   (si on vous demande de taper un message, taper juste "debut de mon git *pseudo" et fermer la fenêtre en validant)
-   git pull origin master --allow-unrelated-histories
-   git push --set-upstream origin master
Vous voila désormais avec le dépot qui contient votre configuration

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
