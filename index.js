console.log('This is CV Screener Project');

//Data is an array of object which contains the information about candidates
const data = [
    {
        name: 'Ajay Purohit',
        age: 23,
        city: 'Jodhpur',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/18.jpg'
    },

    {
        name: 'Gaurav Rajawat',
        age: 23,
        city: 'Jaipur',
        language: 'JavaScript',
        framework: 'React JS',
        image: 'https://randomuser.me/api/portraits/men/28.jpg'
    },

    {
        name: 'Abhimanyu',
        age: 21,
        city: 'Kishangarh',
        language: 'Go',
        framework: 'Go-F',
        image: 'https://randomuser.me/api/portraits/men/45.jpg'
    },

    {
        name: 'Devashish Vyas',
        age: 20,
        city: 'Phalodi',
        language: 'ASP.NET',
        framework: 'ADO',
        image: 'https://randomuser.me/api/portraits/men/12.jpg'
    },

    {
        name: 'Rakesh Sharma',
        age: 26,
        city: 'Bangaluru',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/8.jpg'
    },

    {
        name: 'Gaurv Upadhyay',
        age: 23,
        city: 'Los Angeles',
        language: 'Java',
        framework: 'Spring Boot',
        image: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
];

//CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
};
const candidates = cvIterator(data);

//Button listerner for next Button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);
nextCV();

function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src = '${currentCandidate.image}'>`;

        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name : ${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.age} years old</li>
        <li class="list-group-item">Lives in ${currentCandidate.city}</li>
        <li class="list-group-item">Primarily working in ${currentCandidate.language}</li>
        <li class="list-group-item">Uses ${currentCandidate.framework}</li>
        </ul>`
    }
    else {
        alert('End of Candidate Application');
        window.location.reload();
    }
}