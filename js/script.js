function x(elem){
    return document.querySelector(elem);
}

function startFan(speed){
    if(speed == 0){
        x('#fanBoxx').style.animationPlayState = 'paused';
        x('[onclick="startFan(0)"]').style.backgroundPosition = '0px -12px';
    }else if(speed == 1){
        x('#fanBoxx').style.animationDuration = '1.5s';
        x('#fanBoxx').style.animationPlayState = 'running';
        x('[onclick="startFan(0)"]').style.backgroundPosition = '0px -78px';
    }else if(speed == 2){
        x('#fanBoxx').style.animationDuration = '1s';
        x('#fanBoxx').style.animationPlayState = 'running';
        x('[onclick="startFan(0)"]').style.backgroundPosition = '0px -78px';
    }else{
        x("#fanBoxx").style.animationDuration = '0.5s';
        x("#fanBoxx").style.animationPlayState = 'running';
        x('[onclick="startFan(0)"]').style.backgroundPosition = '0px -78px';
    }
}