var languagebtn = document.getElementById('dropdown');
var worldimg = document.getElementById('worldimg');


languagebtn.onmouseover = function change_World_Img(){
    worldimg.src = '../forceproject/images/worldhover.png';
}

languagebtn.onmouseleave = function reset_World_Img(){
    worldimg.src = '../forceproject/images/world.png';
}


var burgerimg = document.getElementById('hamburger-img');
var closeimg = document.getElementById('close-img')
var sidemenu = document.getElementById('menu-hidden');

//Fix 1st rotation
burgerimg.onclick = function openwindow(){
    if(burgerimg.style.transform === 'rotateY(360deg)'){
        burgerimg.style.transform = "rotateY(-360deg)";
    } else{
        burgerimg.style.transform = "rotateY(360deg)";
    }
    //burgerimg.style.display = "none";
    sidemenu.style.display ="grid";
    setTimeout(() => {
        burgerimg.style.display = "none";
        closeimg.style.display = "inline";
    }, 500);

    //closeimg.style.display = "inline";
};

closeimg.onclick = function closewindow(){
    if(closeimg.style.transform === 'rotateY(360deg)'){
        closeimg.style.transform = "rotateY(-360deg)";
    } else{
        closeimg.style.transform = "rotateY(360deg)";
    }
    //burgerimg.style.display = "none";
    sidemenu.style.display ="none";
    setTimeout(() => {
        closeimg.style.display = "none";
        burgerimg.style.display = "inline";
    }, 500);
};



var box1 = document.getElementById('box1');  
var box2 = document.getElementById('box2'); 
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');



box1.onmouseover = function enlargebox1(){
    box1.style.gridArea = '1 / 1 / 9 / 9';
    box1.style.zIndex = '2';
    gotodiv1.style.display = 'flex';
}

box1.onmouseleave = function resizebox1(){
    box1.style.gridArea = '1 / 1 / 6 / 6';
    box1.style.removeProperty('z-index')
    gotodiv1.style.display = 'none';

}

box2.onmouseenter = function enlargebox2(){
    box2.style.gridArea = '1 / 3 / 9 / 11';
    box2.style.zIndex = '2';
    gotodiv2.style.display = 'flex';
    
}

box2.onmouseleave = function resizebox2(){
    box2.style.gridArea = '1 / 6 / 6 / 11';
    box2.style.removeProperty('z-index');
    gotodiv2.style.display = 'none';
    


}

box3.onmouseenter = function enlargebox3(){
    box3.style.gridArea = '3 / 1 / 11 / 9';
    box3.style.zIndex = '2';
    gotodiv3.style.display = 'flex';
    
}

box3.onmouseleave = function resizebox3(){
    box3.style.gridArea = '6 / 1 / 11 / 6';
    box3.style.removeProperty('z-index')
    gotodiv3.style.display = 'none';
    


}

box4.onmouseenter = function enlargebox4(){
    box4.style.gridArea = '3 / 3 / 11 / 11';
    box4.style.zIndex = '2';
    gotodiv4.style.display = 'flex';

    
}



box4.onmouseleave = function resizebox4(){
    box4.style.gridArea = '6 / 6 / 11 / 11 ';
    box4.style.removeProperty('z-index');
    gotodiv4.style.display = 'none';
}


var arrowpic1 = document.getElementById('arrowpic1');
var gotodiv1 = document.getElementById('gotodiv1');

gotodiv1.onmouseover = function changeimg1(){
    arrowpic1.src = '../forceproject/images/chevron-yellow.png';
}

gotodiv1.onmouseleave = function resetimg1(){
    arrowpic1.src = '../forceproject/images/chevron-black.png';
}

var arrowpic2 = document.getElementById('arrowpic2');
var gotodiv2 = document.getElementById('gotodiv2');

gotodiv2.onmouseover = function changeimg2(){
    arrowpic2.src = '../forceproject/images/chevron-yellow.png';
}

gotodiv2.onmouseleave = function resetimg2(){
    arrowpic2.src = '../forceproject/images/chevron-black.png';
}


var arrowpic3 = document.getElementById('arrowpic3');
var gotodiv3 = document.getElementById('gotodiv3');

gotodiv3.onmouseover = function changeimg3(){
    arrowpic3.src = '../forceproject/images/chevron-yellow.png';
}

gotodiv3.onmouseleave = function resetimg3(){
    arrowpic3.src = '../forceproject/images/chevron-black.png';
}

var arrowpic4 = document.getElementById('arrowpic4');
var gotodiv4 = document.getElementById('gotodiv4');

gotodiv4.onmouseover = function changeimg4(){
    arrowpic4.src = '../forceproject/images/chevron-yellow.png';
}

gotodiv4.onmouseleave = function resetimg4(){
    arrowpic4.src = '../forceproject/images/chevron-black.png';
}






