// JavaScript to handle the Feeding Schedule
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
        <td><button class="delete-btn">Delete</button></td>
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
  
  function toggleSection(sectionId, button) {
    const section = document.getElementById(sectionId);
    if (section.classList.contains('hidden')) {
      section.classList.remove('hidden');
      button.textContent = 'Hide ' + button.textContent.split(' ')[1];
    } else {
      section.classList.add('hidden');
      button.textContent = button.textContent.replace('Hide', 'Show');
    }
  }
  