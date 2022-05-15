const container = document.querySelector('#container'); // to work with container node to generate divs in
let layout = document.querySelector('.grid') // to work with layout variable which represents the grid class in css

divGenerator(16)


function divGenerator(input) {
    // ^^generates divs
    console.log('function called')
    removeGrid()

    // sets css vars to be whatever input is, so if its 16, it generates 16 rows and 16 cols
    layout.style.setProperty('--cols', input);
    layout.style.setProperty('--rows', input);

    // generates squares based on grid area, ex 10 by 10 is 100 squares
    let gridArea = input * input

    for (let i = 0; i < gridArea; i++) { // create a div
        const div = document.createElement('div');

        // add event listener to generated div
        div.addEventListener('mouseover', colorFill)
        // add created div as a child to container
        container.appendChild(div);
        // test output to see if div was generated
        console.log('div generated');
    }
}


// div is passed to color fill
function colorFill(object) {
    console.log('should be working')
    object.target.style.backgroundColor = 'black'

    // returns dom element that triggered mouseover event (in this case the div is passed to this function)
    // then i modify that specific dom element's background color and change it to black
}

function removeGrid() {
    container.replaceChildren();

}

function shake() {
    console.log('shake triggered')
    container.classList.add('shake');
    console.log(container);
    setTimeout(shakeClassGridRemove, 1000)
    
    


}

function shakeClassGridRemove(){
    container.classList.remove('shake');
    divGenerator(16);
    console.log(container)
    console.log('class and grid removed')
}