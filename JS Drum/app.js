window.addEventListener('keydown',function(e){
    const audio=document.querySelector( 'audio[data-key="'+e.keyCode+'"]');
    const key = document.querySelector('.key[data-key="' + e.keyCode + '"]');
    if(!audio){return;}
    audio.currentTime=0;
    // audio.currentTime=0; : this enables us to rewind or basically replay instantly when the button is repeated again
    audio.play();
    /*  play() method attempts to begin playback of the media. It returns a Promise  */

    key.classList.add('playing');
});

function removeTransition(e){
    // here we will be checking whehter the property is transform or not as if we don't return for other propertiens as transitin is occurring n several properties
    if(e.propertyName!=='transform'){return ;}

    // this refers to the global scope objects so here this is referring to keys
    console.log(this);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
console.log(keys);
// we cannot use directly add the eventListener to key node as so we added loop over it
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

/* "transitionend" is a event which looks for the end of the any transition and we get the transition on multiple evets and there we will check on which property we wnat to listen for the transition end */