//functions 
function redirectToDashboard() {
    window.location.href = "dashboard.html";
    
}
function redirectToHomepage() {
    window.location.href = "index.html";
}
function showAlert(message) {
    alert(message);
}

function authenticateUser(username, password) {
    
    fetch('login.json')
        .then(response => response.json())
        .then(data => {
            const user = data.users.find(user => user.username === username && user.password === password);

            if (user) {
                showAlert("Login sucs!")
                if (user.role === "admin" ) {
                    redirectToDashboard();
                    // window.location.href = "dashboard.html";
                } 
                else if (user.role === "user") {
                    redirectToHomepage();
                    // window.location.href="index.html";
                }

            }
            else {
                showAlert("Invalid username or password!")
            }
            
            
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            showAlert("Failed to authenticate. Please try again later.");
        });
}

//form submission
function handleFormSubmission(event) {
    event.preventDefault(); 

    
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    authenticateUser(username, password);
}

// Add event listener to the form for form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmission);
});
// 
