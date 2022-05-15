const container = document.querySelector('#container'); // to work with container node to generate divs in
let layout = document.querySelector('.grid') // to work with layout variable which represents the grid class in css
const etchBox = document.querySelector('div.etchBox')
var output = document.getElementById('number')
divGenerator(16)


function divGenerator(input) {
    // ^^generates divs
    console.log('function called')
    removeGrid()
    output.innerHTML = input
    // sets css vars to be whatever input is, so if its 16, it generates 16 rows and 16 cols
    layout.style.setProperty('--cols', input);
    layout.style.setProperty('--rows', input);

    // generates squares based on grid area, ex 10 by 10 is 100 squares
    let gridArea = input * input

    for (let i = 0; i < gridArea; i++) { // create a div
        const div = document.createElement('div');
        div.classList.add('square')
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
    etchBox.classList.add('shake');
    console.log(etchBox);
    setTimeout(shakeClassGridRemove, 1000)
    
    


}

function shakeClassGridRemove(){
    etchBox.classList.remove('shake');
    divGenerator(16);
    console.log(etchBox)
    console.log('class and grid removed')
}



