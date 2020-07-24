console.log('asdfghjkl');
//array of object which contains iformation about the candidate
const data = [
    {
        name: 'riya das',
        age: 18,
        city: 'kanpur',
        language: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/33.jpg'
    },
    {
        name: 'rohan das',
        age: 19,
        city: 'kolkatta',
        language: 'java',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name: 'rohit',
        age: 20,
        city: 'solapur',
        language: 'javascript',
        framework: 'android',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'deepika',
        age: 21,
        city: 'mumbai',
        language: 'c++',
        framework: 'android',
        image: 'https://randomuser.me/api/portraits/women/74.jpg'
    },
    {
        name: 'sana',
        age: 21,
        city: 'allahabad',
        language: 'c',
        framework: 'android',
        image: 'https://randomuser.me/api/portraits/women/76.jpg'
    },
    
    {
        name: 'Aradhya Dwivedi',
        age: 17,
        city: 'allahabad',
        language: 'c',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        name: 'Golu Dwivedi',
        age: 17,
        city: 'allahabad',
        language: 'c',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/45.jpg'
    },
    
    
    
    
    {
        name: 'neeraj',
        age: 20,
        city: 'jharkhand',
        language: 'c++,c,mysql',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/90.jpg'
    },
    {
        name: 'aks',
        age: 20,
        city: 'bhagalpur',
        language: 'c++,c,mysql',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/98.jpg'
    },
    {
        name: 'ansh',
        age: 11,
        city: 'fatehpur',
        language: 'c++',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/97.jpg'
    },
    {
        name: 'Sarita',
        age: 39,
        city: 'fatehpur',
        language: 'c++',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/97.jpg'
    },
    {
        name: 'Lalit',
        age: 41,
        city: 'fatehpur',
        language: 'c++',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        name: 'divya',
        age: 16,
        city: 'fatehpur',
        language: 'java',
        framework: 'django',
        image: 'https://randomuser.me/api/portraits/women/19.jpg'
    },
    {
        name: 'geeta tiwari',
        age: 68,
        city: 'fatehpur',
        language: 'c',
        framework: 'web',
        image: 'https://randomuser.me/api/portraits/women/31.jpg'
    },
    {
        name: 'mansha',
        age: 15,
        city: 'fatehpur',
        language: 'javascript',
        framework: 'app',
        image: 'https://randomuser.me/api/portraits/women/22.jpg'
    },
    {
        name: 'ashu',
        age: 29,
        city: 'fatehpur',
        language: 'angular development',
        framework: 'app',
        image: 'https://randomuser.me/api/portraits/men/13.jpg'
    },
    {
        name: 'prinshu',
        age: 24,
        city: 'fatehpur',
        language: 'python',
        framework: 'android development',
        image: 'https://randomuser.me/api/portraits/men/62.jpg'
    },
    {
        name: 'siya',
        age: 15,
        city: 'fatehpur',
        language: 'javascript',
        framework: 'app',
        image: 'https://randomuser.me/api/portraits/women/38.jpg'
    },
    
    
    





]
//cv iterator
function cvIerator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?

                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}
const candidates = cvIerator(data);
nextCV();
//button listener for next
const next = document.getElementById('next');
next.addEventListener('click', nextCV);
function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src=${currentCandidate.image}>`;

        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">name: ${currentCandidate.name}</li>
    <li class="list-group-item">age:${currentCandidate.age}</li>
    <li class="list-group-item">lives in:${currentCandidate.city}</li>
    <li class="list-group-item">primarily works on:${currentCandidate.language}</li>
    <li class="list-group-item">framework:${currentCandidate.framework}</li>
  </ul>`;
    }
    else {
        alert('end of candidate applicatipon');
        window.location.reload();
    }

}



