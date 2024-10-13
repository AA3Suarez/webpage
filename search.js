// search.js
document.getElementById('search-input').addEventListener('input', function () {
    searchAndFilter(); // Call the search function on input change
});

function searchAndFilter() {
    let filter = document.getElementById('search-input').value.toLowerCase(); // Get search input in lowercase
    let headings = document.querySelectorAll('h2, h3'); // Select all h2 and h3 elements

    headings.forEach(function (heading) {
        // If the element has 'always-visible', keep it visible
        if (heading.classList.contains('always-visible')) {
            heading.style.display = ''; // Ensure it's visible
            let content = heading.nextElementSibling;
            if (content) content.style.display = ''; // Ensure sibling is also visible
            return; // Skip further logic for always-visible elements
        }

        let text = heading.textContent.toLowerCase(); // Get the heading's text content

        if (filter === '') {
            // Show all elements when the input is empty
            heading.style.display = ''; // Show all headings
            heading.classList.remove('fade-in', 'fade-out'); // Reset animations

            let content = heading.nextElementSibling;
            if (content) {
                content.style.display = ''; // Show all sibling content
                content.classList.remove('fade-in', 'fade-out'); // Reset animations
            }
        } else {
            if (text.includes(filter)) {
                // If it matches the filter, show the heading and content
                heading.style.display = ''; // Ensure it's visible
                heading.classList.remove('fade-out');
                heading.classList.add('fade-in');

                let content = heading.nextElementSibling;
                if (content) {
                    content.style.display = ''; // Ensure sibling is visible
                    content.classList.remove('fade-out');
                    content.classList.add('fade-in');
                }
            } else {
                // If it doesn't match, hide without animations
                heading.style.display = 'none'; // Hide immediately
                heading.classList.remove('fade-in'); // Remove fade-in class

                let content = heading.nextElementSibling;
                if (content) {
                    content.style.display = 'none'; // Hide sibling immediately
                    content.classList.remove('fade-in'); // Remove fade-in class
                }
            }
        }
    });
}