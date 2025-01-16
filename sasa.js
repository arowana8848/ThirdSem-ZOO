// Toggle section visibility
function toggleSection(sectionId, button) {
  const section = document.getElementById(sectionId);
  const buttons = document.querySelectorAll('.toggle-btn');

  // Hide all sections
  document.querySelectorAll('main section').forEach(sec => sec.classList.add('hidden'));

  // Show the clicked section
  section.classList.toggle('hidden');

  // Change color of clicked button to black and reset others
  buttons.forEach(btn => btn.style.backgroundColor = '#ccc');
  button.style.backgroundColor = 'black';
  button.style.color = 'white'; // Text color changes to white for better visibility
}

// Add an animal
const animalForm = document.getElementById('add-animal-form');
const animalTable = document.getElementById('animal-table').getElementsByTagName('tbody')[0];

animalForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('animal-name').value;
  const cageNumber = document.getElementById('cage-number').value;
  const species = document.getElementById('animal-species').value;
  const animalCount = document.getElementById('animal-count').value;
  const maleCount = document.getElementById('male-count').value;
  const femaleCount = document.getElementById('female-count').value;

  // Create new row in table
  const newRow = animalTable.insertRow();
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${cageNumber}</td>
    <td>${species}</td>
    <td>${animalCount}</td>
    <td>${maleCount}</td>
    <td>${femaleCount}</td>
    <td>
      <button onclick="editAnimal(this)">Edit</button>
      <button onclick="removeAnimal(this)">Remove</button>
    </td>
  `;

  // Clear form fields after submission
  animalForm.reset();
});

// Remove an animal
function removeAnimal(button) {
  const row = button.closest('tr');
  row.remove();
}

// Edit animal details
function editAnimal(button) {
  const row = button.closest('tr');
  const name = row.cells[0].textContent;
  const cageNumber = row.cells[1].textContent;
  const species = row.cells[2].textContent;
  const animalCount = row.cells[3].textContent;
  const maleCount = row.cells[4].textContent;
  const femaleCount = row.cells[5].textContent;

  // Populate the form with the current details
  document.getElementById('animal-name').value = name;
  document.getElementById('cage-number').value = cageNumber;
  document.getElementById('animal-species').value = species;
  document.getElementById('animal-count').value = animalCount;
  document.getElementById('male-count').value = maleCount;
  document.getElementById('female-count').value = femaleCount;

  // Remove the row
  removeAnimal(button);
}

// Add a visitor
const visitorForm = document.getElementById('add-visitor-form');
const visitorTable = document.getElementById('visitor-table').getElementsByTagName('tbody')[0];

visitorForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('visitor-name').value;
  const contact = document.getElementById('visitor-contact').value;
  const gender = document.getElementById('visitor-gender').value;
  const ticketPrice = document.getElementById('ticket-price').value;

  // Create new row in table
  const newRow = visitorTable.insertRow();
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${contact}</td>
    <td>${gender}</td>
    <td>${ticketPrice}</td>
    <td>
      <button onclick="editVisitor(this)">Edit</button>
      <button onclick="removeVisitor(this)">Remove</button>
    </td>
  `;

  // Clear form fields after submission
  visitorForm.reset();
});

// Remove a visitor
function removeVisitor(button) {
  const row = button.closest('tr');
  row.remove();
}

// Edit visitor details
function editVisitor(button) {
  const row = button.closest('tr');
  const name = row.cells[0].textContent;
  const contact = row.cells[1].textContent;
  const gender = row.cells[2].textContent;
  const ticketPrice = row.cells[3].textContent;

  // Populate the form with the current details
  document.getElementById('visitor-name').value = name;
  document.getElementById('visitor-contact').value = contact;
  document.getElementById('visitor-gender').value = gender;
  document.getElementById('ticket-price').value = ticketPrice;

  // Remove the row
  removeVisitor(button);
}

// Handle Feeding Schedule
document.addEventListener('DOMContentLoaded', () => {
  const feedingForm = document.getElementById('add-feeding-form');
  const feedingTableBody = document.getElementById('feeding-table').querySelector('tbody');

  feedingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const cageNumber = document.getElementById('cage-number').value;
    const feedingTime1 = document.getElementById('feeding-time1').value;
    const feedingTime2 = document.getElementById('feeding-time2').value;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${cageNumber}</td>
      <td>${feedingTime1} <button class="action-btn" onclick="toggleFeedingStatus(this)">Not Fed</button></td>
      <td>${feedingTime2} <button class="action-btn" onclick="toggleFeedingStatus(this)">Not Fed</button></td>
      <td><button class="delete-btn" onclick="removeFeedingSchedule(this)">Delete</button></td>
    `;

    // Add delete button functionality
    row.querySelector('.delete-btn').addEventListener('click', () => {
      row.remove();
    });

    feedingTableBody.appendChild(row);

    // Clear form inputs
    feedingForm.reset();
  });
});

function toggleFeedingStatus(button) {
  if (button.classList.contains('completed')) {
    button.classList.remove('completed');
    button.textContent = 'Not Fed';
  } else {
    button.classList.add('completed');
    button.textContent = 'Fed';
  }
}

function removeFeedingSchedule(button) {
  const row = button.closest('tr');
  row.remove();
}
