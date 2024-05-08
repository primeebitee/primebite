document.addEventListener("DOMContentLoaded", function() {
    var moreButton = document.getElementById("moreButton");
    var hiddenRestaurants = document.querySelectorAll(".restaurant:nth-last-child(-n+2)");
    var searchBox = document.getElementById("searchBox");
    var restaurants = document.querySelectorAll(".restaurant");

    // Function to hide the last two restaurants initially
    hiddenRestaurants.forEach(function(restaurant) {
        restaurant.style.display = "none";
    });

    // Function to show all restaurants
    function showAllRestaurants() {
        restaurants.forEach(function(restaurant) {
            restaurant.style.display = "block";
        });
    }

    moreButton.addEventListener("click", function() {
        hiddenRestaurants.forEach(function(restaurant) {
            restaurant.style.display = (restaurant.style.display === "none") ? "block" : "none";
        });

        // Toggle the text of the button based on the visibility of hidden restaurants
        moreButton.textContent = (hiddenRestaurants[0].style.display === "none") ? "More" : "Less";
    });

    if (searchBox) {
        searchBox.addEventListener("input", function() {
            var searchValue = searchBox.value.trim().toLowerCase();

            restaurants.forEach(function(restaurant) {
                restaurant.style.display = "none";
            });

            if (searchValue !== "") {
                var matchingRestaurant = document.getElementById(searchValue);
                if (matchingRestaurant) {
                    matchingRestaurant.style.display = "block";
                    moreButton.style.display = "none"; // Hide the "More" button when a search is performed
                }
            } else {
                showAllRestaurants();
                moreButton.style.display = "block"; // Show the "More" button when the search box is empty
            }
        });
    }

    // Display current week's starting date
    var currentWeekDateElement = document.getElementById("currentWeekDate");
    currentWeekDateElement.textContent = " (Current Week : " + getCurrentWeekStartDate() + ")";

    // Function to get current week's start date
    function getCurrentWeekStartDate() {
        var currentDate = new Date();
        var dayOfWeek = currentDate.getDay();
        var sundayDate = new Date(currentDate);
        sundayDate.setDate(currentDate.getDate() - dayOfWeek);
        return sundayDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
});

        function darkMode() {
            var element = document.body;
            element.classList.toggle("dark-mode");
        }