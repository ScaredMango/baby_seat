let social = document.getElementsByClassName('img_program_item')

for(let i = 0 ; i<social.length; i++){
    social[i].addEventListener('mouseover', () =>{
        social[i].childNodes[1].classList.remove("card_show")
        console.log(social[i].childNodes[1])
    })
    social[i].addEventListener('mouseout', () =>{
        social[i].childNodes[1].classList.add("card_show")
        console.log(social[i].childNodes[1])
    })
}

let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    console.log(panel);
    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

