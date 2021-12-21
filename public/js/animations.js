let learnmore = document.getElementById("learnmore");

learnmore.addEventListener('mouseenter', animateButtons);
learnmore.addEventListener('mouseleave', animateButtons);

let toggled = false;
function animateButtons(){
    if(toggled){
        learnmore.style.boxShadow = "5px 5px black"
    }else{

    }
    toggled = !toggled;
}