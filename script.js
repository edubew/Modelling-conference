// Navbar functionality
const hambuger = document.querySelector('.hambuger-menu');
const navbar = document.querySelector('.navbar-links');

hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('active');
  navbar.classList.toggle('active');
});

document.querySelectorAll('.nav-items').forEach((e) => e.addEventListener('click', () => {
  hambuger.classList.remove('active');
  hambuger.classList.remove('active');
}));

// Featured speakers section

const speakers = [
  {
    id: 1,
    featuredImage: 'N-Campbell.jpg',
    Name: 'Naomi Campbell',
    title: 'Model, actress and businesswoman',
    description: 'Lorem ipsum dolor sit amet. Ut dolor explicabo non internos dolor sit voluptatem ipsum non dolor dolor. Non sequi autem amet ipsam est voluptatem expedita est ipsum ipsam.',
    content: 'show',
  },
  {
    id: 2,
    featuredImage: 'Gigi.jpg',
    Name: 'Gigi Hadid',
    title: 'Award winning international model',
    description: 'Lorem ipsum dolor sit amet. Ut dolor explicabo non internos dolor sit voluptatem ipsum non dolor dolor. Non sequi autem amet ipsam est voluptatem expedita est ipsum ipsam.',
    content: 'show',
  },
  {
    id: 3,
    featuredImage: 'W-Harlow.jpg',
    Name: 'Winnie Harlow',
    title: 'Founder of CAY SKIN',
    description: 'Lorem ipsum dolor sit amet. Ut dolor explicabo non internos dolor sit voluptatem ipsum non dolor dolor. Non sequi autem amet ipsam est voluptatem expedita est ipsum ipsam.',
    content: 'show',
  },
  {
    id: 4,
    featuredImage: 'B-Portter.png',
    Name: 'Billy Porter',
    title: 'Fashion Icon',
    description: 'Lorem ipsum dolor sit amet. Ut dolor explicabo non internos dolor sit voluptatem ipsum non dolor dolor. Non sequi autem amet ipsam est voluptatem expedita est ipsum ipsam.',
    content: 'hide',
    profileName: 'showSpeaker',
  },
  {
    id: 5,
    featuredImage: 'Pic4.jpg',
    Name: 'Vanita Joy',
    title: 'Designer',
    description: 'Lorem ipsum dolor sit amet. Ut dolor explicabo non internos dolor sit voluptatem ipsum non dolor dolor. Non sequi autem amet ipsam est voluptatem expedita est ipsum ipsam.',
    content: 'hide',
    profileName: 'showSpeaker',
  },
  {
    id: 6,
    featuredImage: 'Pic6.jpg',
    Name: 'Lorians Mercy',
    title: 'Award winning Fashion model',
    description: 'Lorem ipsum dolor sit amet. Ut dolor explicabo non internos dolor sit voluptatem ipsum non dolor dolor. Non sequi autem amet ipsam est voluptatem expedita est ipsum ipsam.',
    content: 'hide',
    profileName: 'showSpeaker',
  },
];

const allSpeakers = speakers.map((speaker) => `<div class="speaker ${speaker.content} ${speaker.profileName}">
  <div id="profile-bg">
    <img src="images/${speaker.featuredImage}" alt="speaker's image">
  </div>
    <div class="content">
        <h2>${speaker.Name}</h2>
        <h3>${speaker.title}</h3>
        <p>${speaker.description}</p>
    </div>
</div>`).join('');

const featuredSpeaker = document.querySelector('.speakers');
featuredSpeaker.innerHTML += allSpeakers;

// Display three speakers in the mobile version and hide the rest
const btn = document.querySelector('.btn');
const profileName = document.querySelectorAll('.showSpeaker');

btn.addEventListener('click', () => {
  profileName.forEach((e) => e.classList.toggle('hide'));
});
