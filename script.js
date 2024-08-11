// script.js

// Fetch data from the JSON API
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Get the container element where we will display the data
        const userContainer = document.getElementById('user-container');

        // Iterate over the JSON data and create HTML for each user
        data.forEach(user => {
            // Create a div for each user
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');

            // Add user data to the div
            userDiv.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Message:</strong> ${user.message}</p>
            `;

            // Append the user div to the container
            userContainer.appendChild(userDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching the JSON data:', error);
    });
