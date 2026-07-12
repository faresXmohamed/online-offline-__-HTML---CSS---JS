let myTitle=document.querySelector('.container .title');
let myUl=document.querySelector('.container ul');
let myBtn=document.querySelector('.container .reload');
    window.onload=function(){
        if(window.navigator.onLine){
            online()
        }
        else{
            offline();
        }
    }

    window.addEventListener('online', _ =>online());
    window.addEventListener('offline', _ =>offline());

function online(){
    myTitle.innerHTML='Online Now';
    myTitle.style.color="green";
    myUl.style.display='none';
    myBtn.style.display='none';
}
function offline(){
    myTitle.innerHTML='Offline Now';
    myTitle.style.color="gray";
    myUl.style.display='block';
    myBtn.style.display='block';
}
myBtn.onclick=function(){
    window.location.reload();
}