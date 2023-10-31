// trafic light 
let button = document.querySelector('.change');
let i = 1;
button.addEventListener('click', function(){
    document.querySelector('.item-1').classList.remove('active');
    document.querySelector('.item-2').classList.remove('active');
    document.querySelector('.item-3').classList.remove('active');
    document.querySelector('.item-' + i).classList.add('active');
    i++
    if (i === 4) i = 1;
});

// text box
let box = document.querySelector('.box');

box.addEventListener('mousedown', function(event) {
    let {left, top, width, height} = box.getBoundingClientRect();

    if (event.x > left + width - 15 && event.y > top + height - 15) {

        document.onmousemove = function(event) {
            box.style.width = event.clientX - left + 'px';
            box.style.height = event.clientY - top + 'px';
        }

        document.onmouseup = function() {
            document.onmousemove = null;
        }
    }
});
