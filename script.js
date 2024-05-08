document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        // Add an event listener to the form with the id 'searchForm' for the 'submit' event
        event.preventDefault();
        // Prevent the default form submission behavior
        var searchTerm = document.querySelector('.s-input').value;
        // Get the value of the input field with the class 's-input' (search term)
        if (searchTerm.trim() !== '') {
             // Check if the search term is not empty after trimming whitespace
            // For now, just redirect to Google search results page
            window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);
            // Redirect the user to the Google search results page with the search term as a query parameter
            // encodeURIComponent is used to properly encode special characters in the search term
        }
    });
});
