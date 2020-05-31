
class Plateau {

    initGame(){
        plateau = document.querySelector('#plateau')

        for (let a = 0; a <= 6; a++) {
            let divCol = document.createElement("div");
            divCol.classList.add('col')
            for (let b = 0; b <= 5; b++) {
                let divCase = document.createElement("div");
                divCase.classList.add('row', 'text-center', 'cases')
                divCol.appendChild(divCase);
            }
            plateau.appendChild(divCol);   
        }
        let cols = document.querySelectorAll('.col')
        for (let c = 0; c < cols.length; c++) {
            console.log(cols[c])
            cols[c].setAttribute('data-col',c+1)
            cols[c].setAttribute('id','columns')
            let cases = cols[c].children
            console.log(cases.length)
            for (let d = 0; d <= cases.length-1; d++){          
                cases[d].setAttribute('data-case',d+1)
                cases[d].setAttribute('id','cases')
            }
        }
        let test = document.createElement("H2");
        test.innerHTML ="C'est au tour de "

        //test.innerHTML +='<span id="tours"></span>'
        plateau.parentNode.appendChild(test)
        let span = document.createElement("span");
        document.querySelector('H2').appendChild(span)
        document.querySelector('span').setAttribute('id','tours')
        test.innerHTML += ' de jouer.'
        test.classList.add('text-center')
    }        
}



let Game = new Plateau
Game.initGame()