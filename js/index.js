const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// === nav ===
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link, index) =>{
    link.textContent = siteContent['nav'][`nav-item-${index+1}`];
    link.style.color = 'green';
  });

  let nav = document.querySelector('nav');

  let teamLink = {
    href: '#',
    textContent: 'Team'
  }
  
  const newlinkTeam = document.createElement('a')
  
  newlinkTeam.href = teamLink.href
  newlinkTeam.textContent = teamLink.textContent
  
  nav.appendChild(newlinkTeam);

  let homeLink = {
    href: '#',
    textContent: 'Home'
  }

  const newLinkHome = document.createElement('a');

  newLinkHome.href = homeLink.href;
  newLinkHome.textContent = homeLink.textContent;

  nav.prepend(newLinkHome);


// === cta section ===
let title = document.querySelector('.cta-text h1');
title.textContent = siteContent['cta']['h1'];

let mainCta = document.querySelector('.cta-text button');
mainCta.textContent = siteContent['cta']['button'];

let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//=== main section===
let features = document.querySelector('.top-content .text-content:nth-of-type(1)');
features.querySelector('h4').textContent = siteContent['main-content']['features-h4'];
features.querySelector('p').textContent = siteContent['main-content']['features-content'];

let about = document.querySelector('.top-content .text-content:nth-of-type(2)');
about.querySelector('h4').textContent = siteContent['main-content']['about-h4'];
about.querySelector('p').textContent = siteContent['main-content']['about-content'];

let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let services = document.querySelector('.bottom-content .text-content:nth-of-type(1)');
services.querySelector('h4').textContent = siteContent['main-content']['services-h4'];
services.querySelector('p').textContent = siteContent['main-content']['services-content'];

let product = document.querySelector('.bottom-content .text-content:nth-of-type(2)');
product.querySelector('h4').textContent = siteContent['main-content']['product-h4'];
product.querySelector('p').textContent = siteContent['main-content']['product-content'];

let vision = document.querySelector('.bottom-content .text-content:nth-of-type(3)');
vision.querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
vision.querySelector('p').textContent = siteContent['main-content']['vision-content'];

//===contact section===

let contact = document.querySelector('.contact');
contact.querySelector('h4').textContent = siteContent['contact']['contact-h4'];
contact.querySelector('p:nth-of-type(1)').textContent = siteContent['contact']['address'];
contact.querySelector('p:nth-of-type(2)').textContent = siteContent['contact']['phone'];
contact.querySelector('p:nth-of-type(3)').textContent = siteContent['contact']['email'];

//===footer=== 

let footer = document.querySelector('footer');
footer.querySelector('p').textContent = siteContent['footer']['copyright'];