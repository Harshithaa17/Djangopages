document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Add code to handle signup (e.g., send data to server)
    // After successful signup, redirect to login page or index page
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Add code to handle login (e.g., send data to server and authenticate)
    // After successful login, redirect to index page
    window.location.href = 'C:\\Users\\KIDDO\\OneDrive\\Desktop\\New\\index.html';

    document.getElementById('logoutButton').addEventListener('click', function() {
        // Add any necessary logout actions here
        
        // Redirect to the login page
        window.location.href = 'C:\\Users\\KIDDO\\OneDrive\\Desktop\\New\\login.html';
    });

    // Inside script.js

function searchProjects() {
    const searchInput = document.getElementById('search').value;

    // Assuming you have a function 'fetchSearchResults' that retrieves search results from your backend
    fetchSearchResults(searchInput);
}

function fetchSearchResults(query) {
    // Make a request to your backend to fetch search results based on the query
    // For example using fetch or XMLHttpRequest
    // Once you have the results, update the 'results' div in search.html
    const resultsDiv = document.getElementById('results');

    // Example: Display a sample result
    resultsDiv.innerHTML = `
        <div class="result">
            <h3>Sample Project Title</h3>
            <p>Project Description</p>
        </div>
    `;
}

});
