


let coupJoué = 0

class Joueurs {
    constructor(name, color){
        this.name = name
        this.color = color
 
    }
    getColor(){
        return this.color
    }
    getName(){
        return this.name
    }

    play(column){
        
//-----------EMPILEMENT DES JETONS---------//
        for (let j = 6; j >= 0; j--) {
            let div = column.querySelector('[data-case="'+j+'"]')
            if (div == undefined) {
                console.log ("Impossible dajouter un jeton ici => Colonne Pleine")
                break;
            }else if (div !==undefined && div.classList.contains('red') || div.classList.contains('yellow')) {
              
            }else{
                this.addJeton(div,column)
                break;
            }
        }
    }
    addJeton(div,column){
        
        coupJoué++
        document.querySelector('.bonus').innerHTML ='<h4>'+'Nombre de coups joué = '+coupJoué
        if (this.name == 'Joueur1') {
            this.changeWhoPlaying()
            div.classList.add(this.getColor())
            this.isWin(div,column); 
        }else{
            this.changeWhoPlaying()
            div.classList.add(this.getColor())
            this.isWin(div,column); 
        }
        
    }
    changeWhoPlaying(){
        whoPlaying = document.querySelector('#tours')
        switch (whoPlaying.textContent) {
            case  'Joueur1':
                    whoPlaying.innerHTML = 'Joueur2'
                break;
            case  'Joueur2':
                    whoPlaying.innerHTML = 'Joueur1'
                break;
        }
        return whoPlaying
    }
    isWin(lastSetDiv,column){

        this.horizontal(lastSetDiv,column)
        this.vertical(lastSetDiv,columns)
        this.diagonal(lastSetDiv,columns)
    }

    horizontal(div,column){
        
        let counterHorizontal = 1
        let tableau = []
        let bottomCase = column.children[div.getAttribute('data-case')]
        let caseSuivante = 0
        tableau.push(div)

    //METHOD AVEC WHILE
        while (bottomCase !== undefined && bottomCase.classList.contains(this.getColor())){
            
            caseSuivante++
            tableau.push(bottomCase)
            bottomCase = column.children[+div.getAttribute('data-case')+(+caseSuivante)]
            counterHorizontal ++
        }
    //counterHorizontal  FIN DE GAME
        if (counterHorizontal >= 4) {
            tableau.forEach(table => {
               table.classList.add('borderWin') 
            });
            console.log('win : '+ this.getName() +' color ' + this.getColor())
            document.querySelector('H2').innerHTML = this.getName() + ' A Remporté la partie en horizontale'
        
        }

    }
    vertical(div,columns){

        let tableau = []
        tableau.push(div)

        let counterVertical = 1

        let colonnePrecedente = 1
        let colonneSuivante = 1

        let ColonneNumber = (div.parentNode.getAttribute('data-col')-1)

        let columnBefore = columns[ColonneNumber-colonnePrecedente]
        let columnAfter = columns[(ColonneNumber)+colonneSuivante]


    //METHOD WHILE SUITE A GAUCHE 
        while (columnBefore !== undefined && columnBefore.children[div.getAttribute('data-case')-1].classList.contains(this.getColor())){
                counterVertical++
                colonnePrecedente+=1
                tableau.push(columnBefore.children[div.getAttribute('data-case')-1])
                columnBefore = columns[ColonneNumber-colonnePrecedente]
        }
    //METHOD WHILE SUITE A DROITE
        while (columnAfter !== undefined && columnAfter.children[div.getAttribute('data-case')-1].classList.contains(this.getColor())){
            counterVertical++
            colonneSuivante+=1
            tableau.push(columnAfter.children[div.getAttribute('data-case')-1])
            columnAfter = columns[(div.parentNode.getAttribute('data-col')-1)+colonneSuivante]
        }   

    //counterVertical  FIN DE GAME
        if (counterVertical >= 4) {
            tableau.forEach(table => {table.classList.add('borderWin')});
            
            console.log('win : '+ this.getName() +' color ' + this.getColor())
            document.querySelector('H2').innerHTML = this.getName() + ' A Remporté la partie en vertical'
        }  
    }

    diagonal(div,columns){

        let tableau = []
        tableau.push(div)

        let counterDiagonal = 1

        let colonnePrecedente = 1
        let colonneSuivante = 1

        let ColonneNumber = (div.parentNode.getAttribute('data-col')-1)

        let cadreSuivant = 2
        let columnBefore = columns[ColonneNumber-colonnePrecedente]
        let columnAfter = columns[(ColonneNumber)+colonneSuivante]


    //METHOD WHILE SUITE HAUTE GAUCHE 
        while ( columnBefore !== undefined && 
                columnBefore.children[div.getAttribute('data-case')-cadreSuivant] !== undefined && 
                columnBefore.children[div.getAttribute('data-case')-cadreSuivant].classList.contains(this.getColor()) )
        {
            tableau.push(columnBefore.children[div.getAttribute('data-case')-cadreSuivant])
                    
                    colonnePrecedente+=1
                    cadreSuivant++
                    columnBefore = columns[ColonneNumber-colonnePrecedente]
                    counterDiagonal++
        }    

    //METHOD WHILE SUITE HAUTE DROITE
        while ( columnAfter !== undefined && 
                columnAfter.children[div.getAttribute('data-case')-cadreSuivant] !== undefined &&
                columnAfter.children[div.getAttribute('data-case')-cadreSuivant].classList.contains(this.getColor()))
        {
            tableau.push(columnAfter.children[div.getAttribute('data-case')-cadreSuivant])
                    
                    colonneSuivante+=1
                    cadreSuivant ++
                    columnAfter = columns[ColonneNumber+colonneSuivante]
                    counterDiagonal++
        }   

    //-----------------------------------------------------------------------------------------------------//

        cadreSuivant = 0


    //METHOD WHILE SUITE BAS GAUCHE 
        while ( columnBefore !== undefined && 
                columnBefore.children[div.getAttribute('data-case')-cadreSuivant] !== undefined && 
                columnBefore.children[div.getAttribute('data-case')-cadreSuivant].classList.contains(this.getColor()) )
        {
            tableau.push(columnBefore.children[div.getAttribute('data-case')-cadreSuivant])
                
                    colonnePrecedente+=1
                    cadreSuivant--
                    columnBefore = columns[ColonneNumber-colonnePrecedente]
                    counterDiagonal++
        }    

    //METHOD WHILE SUITE BAS DROITE
        while ( columnAfter !== undefined && 
                columnAfter.children[div.getAttribute('data-case')-cadreSuivant] !== undefined &&
                columnAfter.children[div.getAttribute('data-case')-cadreSuivant].classList.contains(this.getColor()))
        {
        
            tableau.push(columnAfter.children[div.getAttribute('data-case')-cadreSuivant])

                    colonneSuivante+=1
                    cadreSuivant --
                    columnAfter = columns[ColonneNumber+colonneSuivante]
                    counterDiagonal++
} 


//-----------------------------------------------------------------------------------------------------//

    //counterDiagonal  FIN DE GAME

        if (counterDiagonal >= 4) {
            tableau.forEach(table => {table.classList.add('borderWin')});
            console.log('win : '+ this.getName() +' color ' + this.getColor())
            document.querySelector('H2').innerHTML = this.getName() + ' A Remporté la partie en diagonale'
        }  
    }
}
 //Instance des joueurs
 Joueur1 = new Joueurs("Joueur1","red");
 Joueur2 = new Joueurs("Joueur2","yellow");


//Tour par Tour initialisation début de game 
whoPlaying = document.querySelector('#tours')
if (whoPlaying.content === undefined) {

    initWhoPlaying();
}




 //Click d'une colonne déclanche le Tour du joueur
     columns = document.querySelectorAll('#columns')
      columns.forEach(column => {
  
         column.addEventListener('click',function(e){
             whoPlaying = document.querySelector('#tours')
             switch (whoPlaying.textContent) {
                 case  'Joueur1':
                         Joueur1.play(column);
                     
                     break;
                 case  'Joueur2':
                  
                         Joueur2.play(column);
                     break;
             }
         })
     });
 function initWhoPlaying(){
     whoPlaying = document.getElementById('tours')
     whoPlaying.innerHTML = 'Joueur1'
 return 
  
 }

