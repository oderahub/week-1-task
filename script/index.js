let charbtn= document.querySelectorAll(".char-btn");
let charName = document.getElementById("charName");
let charHeight = document.getElementById("charHeight");
let charGender = document.getElementById("charGender");

fetch(`https://swapi.dev/api/people`)
    .then(res => res.json())
    .then(actualdata =>{
        let newdata = actualdata.results;
        for(i=0; i<charbtn.length; i++){
            charbtn[i].addEventListener("click", showChar)
        }
        function showChar(e){
            document.getElementById("modal-class-wrapper").style.display = "flex"
                let id = e.target.id;
                for(i = 0; i<charbtn.length; i++){
                charName.innerHTML = `Name: ${newdata[id].name}`
                charHeight.innerHTML = `Height: ${newdata[id].height}`
                charGender.innerHTML = `Gender: ${newdata[id].gender}`
            }
            

            
            
        }
    })

    let closebtn = document.getElementById("close-btn")
    closebtn.addEventListener("click", closeP);

    function closeP(){
        document.getElementById("modal-class-wrapper").style.display = "none"
    }


module.exports = { main}
