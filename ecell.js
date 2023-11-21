let navbar = document.querySelector('.header .navbar ');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}
window.onscroll = () => {
    navbar.classList.remove('active'); 
}


// document.onclick = () => applyCursorRippleEffect(event);
// function applyCursorRippleEffect(e)  {
//     const ripple=document.createElement();
//     ripple.className="ripple";
//     document.body.appendChild(ripple);

//     ripple.style.left = `${e.clientX}px` ;
//     ripple.style.top = `${e.clientY}px` ;


//     ripple.style.animation =`ripple-effect .4s linear`;
//     ripple.onanimationend = () => document.body.removeChild(ripple);
// }


document.onclick = function(e){
    let x = e.pageX;
    let y = e.pageY;

    let span = document.createElement("span");
    span.classList.add("click_effect");
    span.style.top = y + "px";
    span.style.left = x + "px";
    document.body.appendChild(span);


    setTimeout(() => {
        span.remove();
    }, 600)
}