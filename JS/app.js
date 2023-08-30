let icon = document.querySelectorAll("button");

let content = document.querySelector('.maindiv');

function changeTheme(){

    if(!content.classList.contains("dark")){
        content.classList.toggle("dark");
        icon[1].classList.replace('btndark','btnlight')
    }
    else{
        content.classList.toggle("dark"); 
        icon[1].classList.replace( 'btnlight',  'btndark')
    }


}

icon[1].addEventListener('click' ,changeTheme);


/////////////////////////

let input = document.querySelectorAll("input");



function getcolor(){

    let v1 = input[0].value;

    let v2 = input[1].value;

    content.style.backgroundColor = v1;

    content.style.color = v2;

}
icon[0].addEventListener('click' , getcolor);
