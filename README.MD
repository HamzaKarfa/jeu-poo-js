# Jeu POO JS
## Instruction de création du code

http://hk-puissance-4-poo-js.projets.simplon-roanne.com

Jeu puissance 4 : 


Class Joueurs (Utilisateurs)
    Instance de class Pour Joueur 1 assignation de couleur rouge
    Instance de class Pour Joueur 2 assignation de couleur jaune



//Règle pour le GAMEPLAY


Le joueur click sur une colonne

Parcourir les cases du bas en haut

SI la cases n’existe pas :
       	return “colonne pleine”
       
SINON SI la case contient la class rouge ou jaune
   	//ne rien faire passer à la case suivante
SINON
	Ajout d’une class css sur la case
   	Arrêter de parcourir les cases 

FINSI 


//Condition de VICTOIRE 



//Suite horizontale

A = Récupérer le dernier pion jouer

TANT QUE la case en dessous de A contient la même couleur 
    A = Récupération de cette case
compteur +1
return le compteur 
SI le compteur = 4 
FIN TANT QUE 
FIN DE LA GAME

//Suite horizontale 

Récupérer le dernier pion joué  
Pos = Récupérer La position
Récupérer  la colonne du dernier pion joué 

//-----horizontale Gauche

TANT QUE la colonne -1 existe et que le pion à la position équivalente à POS existe : 
    SI Le pion à la même couleur que le dernier pion posé
        compteur ++
    FINSI
FIN TANTQUE



//-----horizontale Droite

TANT QUE la colonne +1 existe et que le pion à la position équivalente à POS existe : 
    SI Le pion à la même couleur que le dernier pion posé
        compteur ++
FINSI
FIN TANTQUE
    
    





//Suite diagonale

Récupérer le dernier pion joué  
Pos = Récupérer La position
Récupérer  la colonne du dernier pion joué 


//-----Diagonale haute Gauche 

TANT QUE la colonne -1 existe et que le pion à la position -1 à POS existe et que le pion à la même couleur que le dernier pion posé: 
            compteur ++

FIN TANTQUE

//-----Diagonale haute Droite

TANT QUE la colonne +1 existe et que le pion à la position -1 à POS existe et que le pion à la même couleur que le dernier pion posé: 
            compteur ++

FIN TANTQUE

//-----Diagonale Basse Gauche 

TANT QUE la colonne -1 existe et que le pion à la position +1 à POS existe et que le pion à la même couleur que le dernier pion posé: 
            compteur ++

FIN TANTQUE

//-----Diagonale Basse Droite

TANT QUE la colonne +1 existe et que le pion à la position +1 à POS existe et que le pion a la même couleur que le dernier pion posé: 
            compteur ++

FIN TANTQUE




Si compteur = 4 
    - Le joueur de cette couleur a Gagner 
    - Arrêter le jeu


Compteur Diagonal Droite = Bas Gauche + haut Droite
Compteur Diagonal Gauche = Bas Droite + haut Gauche
