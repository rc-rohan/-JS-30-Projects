const inputSelector=document.querySelectorAll('.controls input');
function handleUpdate(){

    // we have used the suffix 'px' in 2 input fields to set the vlue so for that we will get the vaue of those
    const suffix=this.dataset.sizing || '';/* dataset method gets the values of the 'data-' attribute in which we are selecting sizing property and if nothing is the value then it will set to ''(blank) */

    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
    /* document.documentElement method selects the entire html (i.e root element) and now in this the root element adds stye propery with values speciified      instead of using $(this,name we can also used('--'+this.name,this.value+suffix)) */
}

inputSelector.forEach(input => input.addEventListener('change',handleUpdate));

// since the abvoe "change" listener is not showing all the instant change in values so we will be using "mouse listenrs also over it"
inputSelector.forEach(input=> input.addEventListener('mousemove',handleUpdate))


/* 
--> arrow function details
    forEach(function(input){func-body}); equivalent to forEach(input =>{func.-body});

    inputselector.forEach(function(input){
        input.addEventListener('change',handleUpdate);
    });

     inputselector.forEach(input => input.addEventListener('change',handleUpdate));
    //since there is only one line so we are not using the braces
*/
