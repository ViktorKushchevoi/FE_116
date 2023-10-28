/*ДЗ 
 Згенерувати header за допомогою JS використовуючи дані з об'єкту.
 При виконанні логотипу посилання на головну потрібно додати через атрибут, а текст через контент.
Навігація має бути динамічною, тобто вона має підлаштовуватись під кількість елементів.
Застилити header за допомогою js.*/
let headerData = {
    logo: {
        url: '/home',
        text: 'logo',
    },
    nav: {
        1: {
            url: '/home',
            text: 'Home',
        },
        2: {
            url: '/about',
            text: 'About',
        },
        3: {
            url: '/portfolio',
            text: 'Portfolio',
        },
        4: {
            url: '/contacts',
            text: 'Contacts',
        },
    },
    btn: ['LogIn', 'LogOut'],
}

// header
let body = document.querySelector('body');
let header = document.createElement('header');
header.style.cssText =
    'display: flex;' +
    'justify-content: space-between;' +
    'width: 100%;' +
    'max-width: 1170px;' +
    'margin: 0 auto';
body.prepend(header);

// logo
let logo = document.createElement('a');
logo.href = headerData.logo.url;
logo.textContent = headerData.logo.text;
logo.style.cssText =
    'color: orange;' +
    'font-size: 44px;' +
    'font-style: normal;' +
    'font-weight: 700;' +
    'line-height: 54px;' +
    'text-decoration: none';
header.prepend(logo);
logo.addEventListener('mouseover', function () {
    logo.style.color = 'black';
});
logo.addEventListener('mouseout', function () {
    logo.style.color = 'orange';
});

// nav
let nav = document.createElement('nav');
let ul = document.createElement('ul');
nav.append(ul);
ul.style.cssText =
    'display: flex;' +
    'align-items: center;' +
    'gap: 20px;' +
    'list-style-type: none';
for (let key in headerData.nav) {
    let item = headerData.nav[key];
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = item.url;
    a.textContent = item.text;
    li.append(a);
    ul.append(li);
    a.style.cssText =
        'color: black;' +
        'text-decoration: unset;' +
        'font-size: 20px;' +
        'font-style: normal;' +
        'font-weight: 400';
    a.addEventListener('mouseover', function () {
        a.style.color = 'orange';
    });
    a.addEventListener('mouseout', function () {
        a.style.color = 'black';
    });
}
header.append(nav);

// buttons
let buttons = document.createElement('div');
buttons.classList.add('buttons');
for (let items of headerData.btn) {
    let button = document.createElement('button');
    button.textContent = items;
    button.style.cssText =
        'border-radius: 4px;' +
        'background: #F90;' +
        'width: 110px;' +
        'height: 46px;' +
        'padding: 13px 25px;' +
        'display: flex;' +
        'justify-content: center;' +
        'align-items: center;' +
        'color: #FFF;' +
        'font-size: 16px;' +
        'font-style: normal;' +
        'font-weight: 600;' +
        'line-height: normal;' +
        'border: unset';
    button.addEventListener('mouseover', function () {
        button.style.background = 'white';
        button.style.color = 'orange';
        button.style.border = '1px solid orange';
    });
    button.addEventListener('mouseout', function () {
        button.style.background = 'orange';
        button.style.color = 'white';
        button.style.border = 'unset';
    });
    buttons.append(button);
}
header.append(buttons);
buttons.style.cssText =
    'display: flex;' +
    'align-items: center;' +
    'gap: 32px';