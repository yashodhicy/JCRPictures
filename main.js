// mobile menu

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('#menu');

const toggleMenuMenu = () => {
  hamburger.classList.toggle('hamburger');
  hamburger.classList.toggle('rotate');
  mobileMenu.classList.toggle('hide');
};

hamburger.addEventListener('click', toggleMenuMenu);

// add nominies section
const nomines = [
  {
    image: 'images/Michelle_Yeoh.jpg',
    name: 'Michelle Yeoh',
    nomine: 'best actress for everything everywhere at once movie',
    bio: 'Yeoh returned to acting with Police Story 3: Super Cop (1992) after having divorced Poon.[27] She appeared in The Heroic Trio (1993), and the Yuen Woo-ping films Tai Chi Master and Wing Chun in 1993 and 1994, respectively.',
  },

  {
    image: 'images/Austin_Butler.jpg',
    name: 'Austin_Butler',
    nomine: 'best actor for Elvis at movie',
    bio: 'Austin Robert Butler (born August 17, 1991) is an American actor. He is known for portraying Elvis Presley in the musical biopic Elvis (2022), for which he won a Golden Globe Award.',
  },

  {
    image: 'images/Ana_de_Armas.jpg',
    name: 'Ana_de_Armas',
    nomine: 'best actress for blonde movie',
    bio: 'Ana Celia de Armas Caso (born 30 April 1988) is a Cuban and Spanish actress. She began her career in Cuba with a leading role in the romantic drama Una rosa de Francia (2006)',
  },

  {
    image: 'images/Brendan_Fraser.jpg',
    name: 'Brendan_Fraser',
    nomine: 'best actor for whale movie',
    bio: 'Brendan James Fraser (born December 3, 1968) is a Canadian-American actor. Having graduated from the Cornish College of the Arts in 1990, he made his film debut in Dogfight (1991)',
  },

  {
    image: 'images/Jamie_Lee_Curtis.jpg',
    name: 'Jamie_Lee_Curtis',
    nomine: 'best suppor actress for everything everywhere at once movie',
    bio: "Jamie Lee Curtis (born November 22, 1958) is an American actress, producer, and children's author. Known for her performances in the horror and slasher genres, she is regarded as a scream queen.",
  },

  {
    image: 'images/Ke_Huy_Quan.jpg',
    name: 'Ke_Huy_Quan',
    nomine: 'best suppor actor for everything everywhere at once movie',
    bio: 'Ke Huy Quan (born August 20, 1971) is an American actor. As a child actor, Quan rose to fame playing Short Round in Indiana Jones and the Temple of Doom (1984) and Data in The Goonies (1985)',
  },
];
const container = document.getElementById('namelist');

const fragment = document.createDocumentFragment();

nomines.forEach((nominy) => {
  const celebrity = document.createElement('div');
  celebrity.classList.add('person');

  const imageEl = document.createElement('img');
  imageEl.src = nominy.image;
  imageEl.classList.add('cphoto');
  celebrity.appendChild(imageEl);

  const textEl = document.createElement('div');
  textEl.classList.add('text');
  celebrity.appendChild(textEl);

  const name = document.createElement('h3');
  name.innerText = nominy.name;
  textEl.appendChild(name);

  const desc = document.createElement('h4');
  desc.innerText = nominy.nomine;
  textEl.appendChild(desc);

  const bio = document.createElement('p');
  bio.innerText = nominy.bio;
  textEl.appendChild(bio);

  fragment.appendChild(celebrity);
});

container.appendChild(fragment);
const seemore = document.querySelector('#footdiv');

seemore.addEventListener('click', () => {
  const hidden = document.querySelectorAll('.person:nth-child(n+3)');
  hidden.forEach((item) => {
    item.style.display = 'flex';
    seemore.style.display = 'none';
  });
});