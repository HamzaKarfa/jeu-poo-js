import {Joueurs} from './js/Joueurs.js'

"use strict"
 class Plateau {
     constructor(){
         this.plateau = document.querySelector('#plateau');
         this.whoPlaying = document.getElementById('tours')
         this.text = document.createElement("H2");
         this.divCol 
         this.divCase 
         this.cases 
         this.Joueur1
         this.Joueur2
         this.columns
         this.timer
         this.test = 0
     }
     //---------GETTERS-------//
    getPLateau(){
        return this.plateau
    }    
    getWhoPlaying(){
        return document.querySelector('#tours')
    }

    getCols(){
        return document.querySelectorAll('.col')
    }
    getColumns(){
        return document.querySelectorAll('#columns')
    }
    //------SETTERS------//
    setDivCol(){
        this.divCol = document.createElement("div")
        return this.divCol
    }
    setDivCase(){
        this.divCase = document.createElement("div")
        return this.divCase
    }
    setCase(c){
        this.cases = this.getCols()[c].children
    }

    //-----TEXT GAME-----//
    writeTextGame(){
 
        this.text.innerHTML ="C'est au tour de "

        this.getPLateau().parentNode.appendChild(this.text)
        let span = document.createElement("span");
        document.querySelector('H2').appendChild(span)
        document.querySelector('span').setAttribute('id','tours')
        this.text.innerHTML += ' de jouer.'
        this.text.classList.add('text-center')
        
    }

    initGame(){
        this.initCols()
        this.writeTextGame()
        this.initWhoPlaying()
        this.setJoueurs()
    }

    //-------Création de Colonnes et de Cases-------//
    initCols(){        
        for (let a = 0; a <= 6; a++) {
            this.setDivCol().classList.add('col')
            this.initCase()
            this.getPLateau().appendChild( this.divCol); 
        }
        this.initColsAttribute()
    }
    initCase(){
        for (let b = 0; b <= 5; b++) {   
            this.setDivCase().classList.add('row', 'text-center', 'cases')
            this.divCol.appendChild(this.divCase);
        }
    }
    //-------Attributes------//
    initColsAttribute(){
        for (let c = 0; c < this.getCols().length; c++) {
            this.getCols()[c].setAttribute('data-col',c+1)
            this.getCols()[c].setAttribute('id','columns')
            this.setCase(c)
            this.initCasesAttribute()
        }
    }
    initCasesAttribute(){
        for (let d = 0; d <= this.cases.length-1; d++){          
            this.cases[d].setAttribute('data-case',d+1)
            this.cases[d].setAttribute('id','cases')
        }
    }

    //----InitPremierTour----//
    initWhoPlaying(){
        document.getElementById('tours').innerHTML = 'Joueur 1'
    return 
     
    }
    //-----Création de Joueurs-----//
    setJoueurs(){
        //Instance des joueurs
        this.Joueur1 = new Joueurs("Joueur 1","red");
        this.Joueur2 = new Joueurs("Joueur 2","yellow");
        //Click d'une colonne déclanche le Tour du joueur
        // this.columns = document.querySelectorAll('#columns')
        this.getColumns().forEach(column => {
        
            column.addEventListener('click',e=>{
                
                //this.startTimer()
                switch (this.getWhoPlaying().textContent) {
                    case  'Joueur 1':
                            this.Joueur1.play(column);

                        break;
                    case  'Joueur 2':

                            this.Joueur2.play(column);
                        break;
                }
            })
        });
    }      
}



let Game = new Plateau
Game.initGame()







// //Tour par Tour initialisation début de game 
// let whoPlaying = document.querySelector('#tours')
// if (whoPlaying.content === undefined) {


// }



