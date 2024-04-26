document.addEventListener("DOMContentLoaded", () => {

// adding to the list
document.querySelector('#create-task-form').addEventListener('submit', (event) => {
event.preventDefault();
const task = event.target['new-task-description'].value;
const listing = document.createElement('li');
listing.textContent = task;
document.querySelector("#tasks").append(listing);

// delete from the list

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => {
        listing.remove()
    })
listing.append(deleteButton);
document.querySelector('#tasks').append(listing);
document.querySelector('form').reset();
})


});




