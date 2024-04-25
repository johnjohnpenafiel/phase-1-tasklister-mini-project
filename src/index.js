document.addEventListener("DOMContentLoaded", () => {

// adding to the list
document.querySelector('#create-task-form').addEventListener('submit', (event) => {
event.preventDefault();
const task = event.target['new-task-description'].value;
const listing = document.createElement('li');
listing.textContent = task;
document.querySelector("#tasks").append(listing);
document.querySelector('form').reset();
})
});



