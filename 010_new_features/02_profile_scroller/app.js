const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    loctaion: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg',
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    loctaion: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg',
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    loctaion: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg',
  },
];

const profiles = profileIterator(data);

//Call first profile
nextProfile();

//Next event
document.getElementById('next').addEventListener('click', nextProfile);

//Next profile display
function nextProfile() {
  var currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById(
      'profileDisplay'
    ).innerHTML = `<ul class="list-group">
  <li class="list-group-item">Name: ${currentProfile.name}</li>
  <li class="list-group-item">Age: ${currentProfile.age}</li>
  <li class="list-group-item">Location: ${currentProfile.location}</li>
  <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
  </ul>`;
    document.getElementById(
      'imageDisplay'
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    //No more profiles
    window.location.reload();
  }
}

//Profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
