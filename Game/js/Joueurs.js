


"use strict"

export class Joueurs {
    constructor(name, color){
        //Propriété du joueur
        this.name = name
        this.color = color

        //Propriété du Gameplay 
        this.coupJoué = 0
        this.whoPlaying

        //Condition de victoire 
            this.tableau = []

            //Compteur
            this.counterHorizontale
            this.counterVerticale
            this.counterDiagonalDroite
            this.counterDiagonalGauche
            //Cases
            this.bottomCase
            this.caseSuivante
            this.div
            //Colonnes
            this.colonnePrecedente
            this.colonneSuivante 
            this.ColonneNumber
            this.columnBefore
            this.columnAfter
            this.column
            this.columns
            this.ColonneNumber
            this.columnBefore
            this.columnAfter 
            //Colonne+Case
            this.cadreSuivant
            
    }

    //-----GETTERS-----//
    getName(){
        return this.name
    }
    getColor(){
        return this.color
    }
    getCoupJoué(){
        return this.coupJoué
    }
    getWhoPlaying(){
        this.whoPlaying = document.querySelector('#tours')
        return this.whoPlaying
    }
    //-----SETTERS-----//
    setCoupJoué(){
        return this.coupJoué +=1
    } 
    //----METHOD GAME----//

    play(column){

        
        this.column = column
        this.columns = column.parentNode.children
//-----------EMPILEMENT DES JETONS---------//
        for (let j = 6; j >= 0; j--) {
            this.div = this.column.querySelector('[data-case="'+j+'"]')
            if (this.div == undefined) {
                console.log ("Impossible dajouter un jeton ici => Colonne Pleine")
                break;
            }else if (this.div !==undefined && this.div.classList.contains('red') || this.div.classList.contains('yellow')) {
              
            }else{
                this.addJeton()
                break;
            }
        }
    }
    addJeton(){
        
        this.setCoupJoué()
        document.querySelector('.bonus').innerHTML ='<h4>'+'Nombre de coups joué du ' + this.getName() +  ' = '+this.getCoupJoué()
        if (this.name == 'Joueur 1') {
            this.changeWhoPlaying()
            this.div.classList.add(this.getColor())
            this.isWin(); 
        }else{
            this.changeWhoPlaying()
            this.div.classList.add(this.getColor())
            this.isWin(); 
        }
        
    }
    changeWhoPlaying(){
        this.getWhoPlaying()
        switch (this.whoPlaying.textContent) {
            case  'Joueur 1':
                    this.whoPlaying.innerHTML = 'Joueur 2'
                break;
            case  'Joueur 2':
                    this.whoPlaying.innerHTML = 'Joueur 1'
                break;
        }
        return this.whoPlaying
    }
    isWin(){
        this.horizontal()
        this.vertical()
        this.diagonal()
    }

    vertical(){
        
        this.initVertical()

    //METHOD AVEC WHILE
    this.verticalBas()
    //counterVerticale  FIN DE GAME
        this.verticalCounter()

    }
    initVertical(){
        this.counterVerticale = 1
        this.tableau = []
        this.bottomCase = this.column.children[this.div.getAttribute('data-case')]
        this.caseSuivante = 0
        this.tableau.push(this.div)

    }
    verticalCounter(){
        //counterVerticale  FIN DE GAME
        if (this.counterVerticale >= 4) {
            this.tableau.forEach(table => {
               table.classList.add('borderWin') 
            });
            console.log('win : '+ this.getName() +' color ' + this.getColor())
            document.querySelector('H2').innerHTML = this.getName() + ' A Remporté la partie en Verticale'
            document.querySelector('H1').innerHTML += '<br> <button class="btn btn-secondary justify-content-center" onclick="document.location.reload(true);">Rejoué</button>'
        
        }
    }
    verticalBas(){
            //METHOD AVEC WHILE
            while (this.bottomCase !== undefined && this.bottomCase.classList.contains(this.getColor())){
            
                this.caseSuivante++
                this.tableau.push(this.bottomCase)
                this.bottomCase = this.column.children[+this.div.getAttribute('data-case')+(+this.caseSuivante)]
                this.counterVerticale ++
            }
    }
    horizontal(){
    
    //Initialisation des propriétés Avant la condition 
        this.initHorizontalContition()
    //METHOD WHILE SUITE A GAUCHE 
        this.horizontalGauche()
    //METHOD WHILE SUITE A DROITE
        this.horizontalDroite()
    //counterVertical  FIN DE GAME
        this.counterHorizontal() 
    }
    diagonal(){

        //Initialisation des propriétés Avant la condition 
            this.initDiagCondition();
    
        //METHOD WHILE SUITE HAUTE GAUCHE 
        
            this.diagHautGauche()
            
        //METHOD WHILE SUITE BAS GAUCHE 
        
            this.diagBasGauche()
    
        //METHOD WHILE SUITE HAUTE DROITE
    
            this.diagHautDroite()
    
        //METHOD WHILE SUITE BAS DROITE
    
            this.diagBasDroite()
    
        //counterDiagonal  FIN DE GAME
    
            this.diagCounter();
    }
    initHorizontalContition(){
        this.tableau.push(this.div)
        //Compteur
        this.counterHorizontale = 1
        //Colonnes
        this.colonnePrecedente = 1
        this.colonneSuivante = 1
        this.ColonneNumber = (this.div.parentNode.getAttribute('data-col')-1)
        this.columnBefore = this.columns[this.ColonneNumber-this.colonnePrecedente]
        this.columnAfter = this.columns[(this.ColonneNumber)+this.colonneSuivante]
    }
    horizontalGauche(){
        
        //METHOD WHILE SUITE A GAUCHE 
        while (this.columnBefore !== undefined && this.columnBefore.children[this.div.getAttribute('data-case')-1].classList.contains(this.getColor())){
            this.counterHorizontale++
            this.colonnePrecedente+=1
            this.tableau.push(this.columnBefore.children[this.div.getAttribute('data-case')-1])
            this.columnBefore = this.columns[this.ColonneNumber-this.colonnePrecedente]
        }
    }
    counterHorizontal(){
            //counterVertical  FIN DE GAME
            if (this.counterHorizontale >= 4) {
                this.tableau.forEach(table => {table.classList.add('borderWin')});
                
                console.log('win : '+ this.getName() +' color ' + this.getColor())
                document.querySelector('H2').innerHTML = this.getName() + ' A Remporté la partie en horizontale'
            }  
    }
    horizontalDroite(){
        //METHOD WHILE SUITE A DROITE
        while (this.columnAfter !== undefined && this.columnAfter.children[this.div.getAttribute('data-case')-1].classList.contains(this.getColor())){
            this.counterHorizontale++
            this.colonneSuivante+=1
            this.tableau.push(this.columnAfter.children[this.div.getAttribute('data-case')-1])
            this.columnAfter = this.columns[(this.div.parentNode.getAttribute('data-col')-1)+this.colonneSuivante]
        }   
    }
    
    initDiagCondition(){
        this.tableau = []
        this.tableau.push(this.div)
        //Compteur
        this.counterDiagonalDroite = 1
        this.counterDiagonalGauche = 1
        //Colonnes
        this.colonnePrecedente = 1
        this.colonneSuivante = 1
        this.ColonneNumber = (this.div.parentNode.getAttribute('data-col')-1)
        this.columnBefore = this.columns[this.ColonneNumber - this.colonnePrecedente]
        this.columnAfter = this.columns[(this.ColonneNumber) + this.colonneSuivante]
    }
    diagHautGauche(){

        //METHOD WHILE SUITE HAUTE GAUCHE 
        this.cadreSuivant = 2
        while ( this.columnBefore !== undefined && 
                this.columnBefore.children[this.div.getAttribute('data-case') - this.cadreSuivant] !== undefined && 
                this.columnBefore.children[this.div.getAttribute('data-case') - this.cadreSuivant].classList.contains(this.getColor()) )
        {
            this.tableau.push(this.columnBefore.children[this.div.getAttribute('data-case')-this.cadreSuivant])
                    
                    this.colonnePrecedente+=1
                    this.cadreSuivant++
                    this.columnBefore = this.columns[this.ColonneNumber - this.colonnePrecedente]
                    this.counterDiagonalGauche++
                    

        }
    }
    diagBasDroite(){

        //METHOD WHILE SUITE BAS DROITE
        this.cadreSuivant = 0
        while ( this.columnAfter !== undefined && 
                this.columnAfter.children[this.div.getAttribute('data-case') - this.cadreSuivant] !== undefined &&
                this.columnAfter.children[this.div.getAttribute('data-case') - this.cadreSuivant].classList.contains(this.getColor()))
        {
        
            this.tableau.push(this.columnAfter.children[this.div.getAttribute('data-case')-this.cadreSuivant])

                    this.colonneSuivante+=1
                    this.cadreSuivant --
                    this.columnAfter = this.columns[this.ColonneNumber + this.colonneSuivante]
                    this.counterDiagonalGauche++
                    

        }
    }
    diagHautDroite(){


        //METHOD WHILE SUITE HAUTE DROITE

        this.cadreSuivant = 2   
        while ( this.columnAfter !== undefined && 
                this.columnAfter.children[this.div.getAttribute('data-case') - this.cadreSuivant] !== undefined &&
                this.columnAfter.children[this.div.getAttribute('data-case') - this.cadreSuivant].classList.contains(this.getColor()))
        {
            this.tableau.push(this.columnAfter.children[this.div.getAttribute('data-case')-this.cadreSuivant])
                    
                    this.colonneSuivante+=1
                    this.cadreSuivant ++
                    this.columnAfter = this.columns[this.ColonneNumber+this.colonneSuivante]
                    this.counterDiagonalDroite++
                    
        }
    }
    diagBasGauche(){
        //METHOD WHILE SUITE BAS GAUCHE
        this.cadreSuivant = 0
        while ( this.columnBefore !== undefined && 
            this.columnBefore.children[this.div.getAttribute('data-case') - this.cadreSuivant] !== undefined && 
            this.columnBefore.children[this.div.getAttribute('data-case') - this.cadreSuivant].classList.contains(this.getColor()) )
        {
            this.tableau.push(this.columnBefore.children[this.div.getAttribute('data-case')-this.cadreSuivant])

                    this.colonnePrecedente+=1
                    this.cadreSuivant--
                    this.columnBefore = this.columns[this.ColonneNumber - this.colonnePrecedente]
                    this.counterDiagonalDroite++


        }
    }
    diagCounter(){
        if (this.counterDiagonalGauche >= 4 ||  this.counterDiagonalDroite >= 4 ) {
            this.tableau.forEach(table => {table.classList.add('borderWin')});
            console.log('win : '+ this.getName() +' color ' + this.getColor())
            document.querySelector('H2').innerHTML = this.getName() + ' A Remporté la partie en diagonale'
        }  
    }
}
 
