const loadUsers = () =>
{
    fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => console.log(data))
}

const displayUsers = user =>
{   
    const photoContainer = document.getElementById('photo-container');
    photoContainer.innerHTML = 
    `
    <img id="photo" src="${user.results[0].picture.large}">
    `

    const name = document.getElementById('name');
    name.innerText = user.results[0].name.title+' '+user.results[0].name.first+' '+user.results[0].name.last;

    const gender = document.getElementById('gender');
    gender.innerText = user.results[0].gender;

    const dob = document.getElementById('dob');
    dob.innerText = user.results[0].dob.date

    const age = document.getElementById('age');
    age.innerText = user.results[0].dob.age

    const phoneNum = user.results[0].cell;
    document.getElementById('phoneNum').innerText = phoneNum;

    const mail = user.results[0].email;
    document.getElementById('mail').innerText = mail;

    const location = document.getElementById('location');
    location.innerText = user.results[0].location.country+', '+user.results[0].location.city+', '+user.results[0].location.street.number;

}
loadUsers();