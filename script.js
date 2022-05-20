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
    featuredImage: 'lorians.JPG',
    Name: 'Lorians Mercy Ogallo',
    title: 'The CEO at Mochez model International',
    description: 'Lorians is the founder of Mochez models and in charge of implementing the companys goals, mission and vision',
    content: 'show',
  },
  {
    id: 2,
    featuredImage: 'nicole.jpg',
    Name: 'Nicole Terry',
    title: 'Health, nutritionist and lifestyle coach',
    description: 'As a lifestyle coach, Terry educates individuals on the need to identify their dietary requirements and restrictions',
    content: 'show',
  },
  {
    id: 3,
    featuredImage: 'pamela.jpg',
    Name: 'Pamela Grace',
    title: 'Psychologist leader',
    description: 'Pamela is an experienced psychologist and a has published several books on dealing with anxiety and depression',
    content: 'show',
  },
  {
    id: 4,
    featuredImage: 'patricia.jpg',
    Name: 'Vanita Joy',
    title: 'Photographer',
    description: 'Vanita has been leading various photography projects and exhibition. Get a chance to learn from the best',
    content: 'hide',
    profileName: 'showSpeaker',
  },
  {
    id: 5,
    featuredImage: 'lorians.JPG',
    Name: 'M. Quincy',
    title: 'Designer',
    description: '“Good design is actually a lot harder to notice than poor design, in part because good designs fit our needs so well that the design is invisible,”',
    content: 'hide',
    profileName: 'showSpeaker',
  },
  {
    id: 6,
    featuredImage: 'nicole.jpg',
    Name: 'Patricia G',
    title: 'Fitness Instructor',
    description: '“To keep the body in good health is a duty… otherwise we shall not be able to keep our mind strong and clear.” “When it comes to eating right and exercising, there is no I will start tomorrow.” “It never gets easier, you just get better.”',
    content: 'hide',
    profileName: 'showSpeaker',
  },
];

const allSpeakers = speakers.map((speaker) => `<div class="speaker ${speaker.content} ${speaker.profileName}">
    <img src="images/${speaker.featuredImage}" alt="">
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
