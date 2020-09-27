const secondSelector=document.querySelector('.second');
const minuteSelector=document.querySelector('.minute');
const hourSelector=document.querySelector('.hour');

function setDate(){
    const date= new Date();
    const seconds =date.getSeconds();
    const secondsDeg=((seconds/60)*360);    //(seconds/total_seconds)*full_rotation;
    secondSelector.style.transform='rotate('+secondsDeg+'deg)';

    const minutes=date.getMinutes();
    const minuteDeg=(minutes/60)*360;
    minuteSelector.style.transform='rotate('+minuteDeg+'deg)'

    const hours=date.getHours();
    const hourDeg=(hours/12)*360;
    hourSelector.style.transform='rotate('+hourDeg+'deg)'

    console.log(hours+":"+minutes+":"+seconds);

}
setInterval(setDate,1000);//calls a function or evaluates a functions after specified interval of time here in this case we are calling date function after every 1000 millisecond