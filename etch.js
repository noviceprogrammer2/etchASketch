const container = document.querySelector('#container'); //to work with container node to generate divs in 
let layout = document.querySelector('.grid') // to work with layout variable which represents the grid class in css 
function divGenerator(input) {
    //generates divs 
    // sets css vars to be whatever input is, so if its 16, it generates 16 rows and 16 cols 
    
    layout.style.setProperty('--cols', input);
    layout.style.setProperty('--rows', input);
    let grid = input * input
    for (let i = 0; i < grid; i++) {
        const div = document.createElement('div');
        div.className = 'square';
        container.appendChild(div);
        console.log('div generated');
        div.addEventListener('mouseover',colorFill)
        
       
    }
    const box = document.querySelectorAll('div.square'); 
    console.log(box)
}

// div is passed to color fill
function colorFill(object){
    console.log('should be working')
    object.target.style.backgroundColor = 'black' //target references the object on which the event was triggered on
    
    // basically, hovering over the div triggers the event, div.target is a reference to that specific div, then i change the color of that referenced div
    // once i've targeted the specific element, i can change it's properties 
    // 
    
}
/* creating mouse hover function and listener*/

//selects all divs with class square (all generated divs have class square )


