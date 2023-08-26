document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const locationDropdown = document.getElementById("location-dropdown");
    const searchButton = document.getElementById("search-button");
  
    searchButton.addEventListener("click", function () {
      const searchTerm = searchInput.value;
      const selectedLocation = locationDropdown.value;
      
      // Implement your search logic here
      // You can use the searchTerm and selectedLocation to perform a search operation
      // Example: Fetch properties from the server based on the search criteria
  
      // For now, let's just log the values
      console.log("Search Term:", searchTerm);
      console.log("Selected Location:", selectedLocation);
    });
  });
  