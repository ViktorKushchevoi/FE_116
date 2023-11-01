let form = document.forms.main;
let elements = document.forms.main.elements;
form.addEventListener('submit', function (e) {
    let namevalue = '';
    let agevalue = '';
    let messagevalue = '';
    e.preventDefault();
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].name === 'name') {
            namevalue = elements[i].value;
        }
        else if (elements[i].name === 'age') {
            agevalue = elements[i].value;
        }
        else if (elements[i].name === 'message'){
            messagevalue = elements[i].value;
        }
    }
    if (namevalue !== '' && agevalue !== '' && messagevalue !== '') {
        alert('Форма заповнена \n' + namevalue + '\n '+ agevalue + '\n '+ messagevalue);
    }
    else {
        alert('Заповніть всі поля перед тим як надсилати форму');
    }
});

