

//Tour par Tour init
whoPlaying = document.querySelector('#tours')
if (whoPlaying.content === undefined) {
    initWhoPlaying();
}

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

    play(column,columns){
        
        //console.log(column.querySelector('[data-case="2"]')) console.log(column.getAttribute('data-col')) console.log(column)  console.log(this.getColor())
        

        let div1 = column.querySelector('[data-case="6"]')
        let div2 = column.querySelector('[data-case="5"]')
        let div3 = column.querySelector('[data-case="4"]')
        let div4 = column.querySelector('[data-case="3"]')
        let div5 = column.querySelector('[data-case="2"]')
        let div6 = column.querySelector('[data-case="1"]')



         //la 1ere div de thisColumn contien un jeton
        if (div1.classList.contains('red') || div1.classList.contains('yellow')) {
                console.log ("Impossible dajouter un jeton ici")
                if (div2.classList.contains('red') ||div2.classList.contains('yellow') ) {
                             console.log ("Impossible dajouter un jeton ici")
                            if (div3.classList.contains('red') || div3.classList.contains('yellow') ) {
                                     console.log ("Impossible dajouter un jeton ici")
                                    if (div4.classList.contains('red') ||div4.classList.contains('yellow') ) {  
                                        console.log ("Impossible dajouter un jeton ici")
                                        if (div5.classList.contains('red') || div5.classList.contains('yellow') ) {
                                            console.log ("Impossible dajouter un jeton ici")
                                            if (div6.classList.contains('red') || div6.classList.contains('yellow') ) {
                                                console.log ("Impossible dajouter un jeton ici => Colonne Pleine")
                                            }else{
                                                console.log ("6 vide")
                                                this.addJeton(div6,columns)
                                            }
                                        }else {
                                            console.log ("5 vide")
                                            this.addJeton(div5,columns)
                                         }
                                    }else {
                                        console.log ("4 vide")
                                        this.addJeton(div4,columns)       
                                 }
                            }else {
                                  console.log ("3 vide")
                                  this.addJeton(div3,columns)   
                            }
                }else {
                        console.log ("2 vide")
                        this.addJeton(div2,columns)  
                }
        }else {
            console.log ("1 vide")
            this.addJeton(div1,columns)
        }

    }
    addJeton(div,columns){
        if (this.name == 'Hamza1') {
            this.changeWhoPlaying()
            div.classList.add(this.getColor())
            this.isWin(div,columns); 
        }else{
            this.changeWhoPlaying()
            div.classList.add(this.getColor())
            this.isWin(div,columns); 
        }
        
    }
    changeWhoPlaying(){
        whoPlaying = document.querySelector('#tours')
        switch (whoPlaying.textContent) {
            case  'Hamza-1':
                    whoPlaying.innerHTML = 'Hamza-2'
                break;
            case  'Hamza-2':
                    whoPlaying.innerHTML = 'Hamza-1'
                break;
        }
        return whoPlaying
    }
    isWin(lastSetDiv,columns){

        //Pas Tout de suite Mec !!!!

        this.horizontal(lastSetDiv,columns)
        this.vertical(lastSetDiv,columns)
        this.diagonalGauche(lastSetDiv,columns)
        this.diagonalDroite(lastSetDiv,columns)
    }


    horizontal(div,column){
            console.log(div.parentNode)
            console.log(div.parentNode.getAttribute('data-col'))
        //.parentNode
        //.childNodes
        div.parentNode.forEach(child=>{
            console.log(child)
        })
        if (div.parentNode.getAttribute('data-col')){

        }

    }
    vertical(){}
    diagonalGauche(){}
    diagonalDroite(){}
  }

Hamza1 = new Joueurs("Hamza1","red");
Hamza2 = new Joueurs("Hamza2","yellow");
// Joueur1.getColor()
// Joueur2.getColor()
// console.log(Joueur1)
// console.log(Joueur2)
whoPlaying = document.querySelector('#tours')


//Click d'une colonne déclanche le Tour du joueur
    columns = document.querySelectorAll('#columns')
     columns.forEach(column => {
    
        column.addEventListener('click',function(e){
            whoPlaying = document.querySelector('#tours')
            switch (whoPlaying.textContent) {
                case  'Hamza-1':

                        Hamza1.play(column,columns);
                        whoPlaying.innerHTML = 'Hamza-2'
                    break;
                case  'Hamza-2':
                    
                        Hamza2.play(column,columns);
                        whoPlaying.innerHTML = 'Hamza-1'
                    break;
            }
        })



    });


function initWhoPlaying(){
    whoPlaying = document.getElementById('tours')
    whoPlaying.innerHTML = 'Hamza-1'
return 
    
}


