// arrow (section header)
document.addEventListener("DOMContentLoaded", function () {
    const arrow = document.querySelector('.arrow');
    const nextSection = document.querySelector('.activity');
    arrow.addEventListener('click', function () {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Button MORE DETAILS (section activity)
$('.extra-text').readmore({
  speed: 500,
  moreLink: '<button class="more">MORE DETAILS</button>',
  lessLink: '<button class="less">LESS DETAILS</button>',
  collapsedHeight: 90
});

// Button SEE MORE (section gallery)
$('.extra-gallery').readmore({
  speed: 500,
  moreLink: '<button class="more">SEE MORE</button>',
  lessLink: '<button class="less">SEE LESS</button>',
  collapsedHeight: 438
});


// Burger menu (header)
let header = document.querySelector('header');
let nav = document.querySelector('nav');
let burger = document.querySelector('.burger');

burger.addEventListener('click', function () {
  header.classList.toggle('active');
  nav.classList.toggle('active');
  burger.classList.toggle('active');
});


//section scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    let href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = 100;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

let headerPosition = document.querySelector('header');
window.addEventListener('scroll', function () {
  if (window.scrollY > 53) {
    headerPosition.classList.add("header__sticky");
  } else {
    headerPosition.classList.remove("header__sticky");
  }
});

let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('nav ul a');
window.addEventListener('scroll', function () {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 400;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top > offset && top < offset + height) {
      navLink.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
});

//swiper (section news)
const options = {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.slider-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    1: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1170: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
}
const swiper = new Swiper('.news-slider', options);

// swiper1
const oneoptions = {
  direction: 'vertical',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.s-p-f-slider-pagination',
    clickable: true
  },
  keyboard: {
    enabled: true,
  }
};

if (window.matchMedia('(max-width: 768px)').matches) {
  oneoptions.direction = 'horizontal';
} else {
  oneoptions.direction = 'vertical';
}

const oneswiper = new Swiper('.first_slider', oneoptions);



// FancyBox (section gallery)
Fancybox.bind("[data-fancybox='gallery']", {
  Carousel: {
    infinite: true,
  },
});

/*document.getElementById('clickableSVG').addEventListener('click', function() {
  this.style.display = 'none';
});*/

// map
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: 50.4501, lng: 30.5234 },
    zoom: 7,
    mapId: '2f084b4895741534',
  });
  const marker = new google.maps.Marker({
    position: { lat: 50.4501, lng: 30.5234 },
    map: map,
    title: "Monticello",
    icon: {
      url: "https://i.postimg.cc/30jd33nS/Pin.png",
      scaledSize: new google.maps.Size(100, 100),
    },
  });
}

// form validation
$(document).ready(function () {
  $("#main-form").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
    },
    errorPlacement: function (error, element) {
      error.insertAfter(element);
      error.css({
        'color': 'red',
        'font-family': 'Montserrat',
        'font-size': '18px',       
        'font-style': 'normal',    
        'font-weight': '400'  
      });
    },
  });

  document.getElementById('main-form').addEventListener('submit', function (event) {
    var form = document.getElementById('main-form');
    form.style.gap = '10px';

    if ($("#main-form").valid()) {
      event.preventDefault();
    }
  });
});


