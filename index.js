//CHECK FOR TOGGLE CLICK
const toggle = document.querySelector('input#toggle');
const switchToggle = document.querySelector('.switch-toggle');
const switchThumb = document.querySelector('.switch-thumb');
const body = document.querySelector('body');




toggle.addEventListener('click', () => {
    //CHECK VALUE OF INPUT
    if(toggle.checked){
        //CHANGE DARK
        if(body.classList.contains('light')){
            setTimeout(function(){
                body.classList.remove('light');
                body.classList.add('dark');
                toggleIndicator();
            }, 1500);
        }
        
        //HANDLE TOGGLE
        if(switchToggle.classList.contains('off')){
            switchToggle.classList.remove('off');
            switchToggle.classList.add('on');
        }
        
        //MOVE THUMB
        if(switchThumb.classList.contains('off')){
            switchThumb.classList.remove('off');
            switchThumb.classList.add('on');
        }
    }else{
        //CHANGE DARK
        if(body.classList.contains('dark')){
            setTimeout(function(){
                body.classList.remove('dark');
                body.classList.add('light');
                toggleIndicator();
            }, 1500);
        }
        
        //HANDLE TOGGLE
        if(switchThumb.classList.contains('on')){
            switchThumb.classList.remove('on');
            switchThumb.classList.add('off');
        }
        
        //MOVE THUMB 
        if(switchToggle.classList.contains('on')){
            switchToggle.classList.remove('on');
            switchToggle.classList.add('off');
        }
    }
});



function toggleIndicator(){
    var allIndicator = document.querySelectorAll('.switch-indicator');
    
    allIndicator.forEach(indicator =>{
        indicator.classList.toggle('active');
    });
    
    var title = document.querySelector('.title');
    title.classList.toggle('active');
}




