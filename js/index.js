console.log("march");

let pgBar = document.getElementById("pgBar") ;
let numberValue = document.getElementById("numberValue") ;
let curseurValue =  document.getElementById("curseurValue") ;
let containerAtom =  document.getElementById("containerAtom") ;
let imgElec = document.createElement("img");
containerAtom.appendChild(imgElec)



curseurValue.addEventListener("mouseup" , changeCursor , false ) ;

function changeImage(){
    

    if (pgBar.value === 0){
        imgElec.src = "img/atom1bis.png"
        console.log("1")
    }

    else if (pgBar.value === 1){
        imgElec.src = "img/atom2.png"
        console.log("1")
    }

    else if (pgBar.value === 2){
        imgElec.src = "img/atom3.png"
        console.log("2")
    }

    else if (pgBar.value === 3){
        imgElec.src = "img/atom4.png"
    }

    else if (pgBar.value === 4){
        imgElec.src = "img/atom5.png"
    }
    else{
        imgElec.src = "img/atom1bis.png"
    }
}

changeImage()

function changeCursor(){
    pgBar.value = numberValue.value
    changeImage()  
}





