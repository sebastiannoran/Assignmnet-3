// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()
const posterImage = document.getElementById("poster-image");
const posterTitle = document.getElementById("poster-title");
const posterQuote = document.getElementById("poster-quote");
const quoteInput = document.getElementById("poster-form-quote");
const titleInput = document.getElementById("poster-form-title");
const posterForm = document.getElementById("poster-form");

let lastSelectedImage = posterImage.src;

// Array of predefined poster objects
const posters = [
    {
      image: 'https://images.fineartamerica.com/images-medium-large-5/motivational-landscape-faith-hope-overcome-tree-sunset-eszra-tanner.jpg',
      title: 'Snow',
      quote: 'Success is walking from failure to failure with no loss of enthusiasm',
    },
    {
      image: 'https://t4.ftcdn.net/jpg/02/09/50/23/360_F_209502355_uLqWNDSZFdGCgCUlW68b56YmAPOhVOzF.jpg',
      title: 'Climb',
      quote: "If you're going through hell keep going.",
    },
    {
      image: 'https://www.tokyoweekender.com/wp-content/uploads/2021/03/%E7%88%B6%E6%AF%8D%E3%81%8B%E3%82%99%E6%B5%9C.jpg',
      title: 'Reflection',
      quote: 'The starting point of all achievement is desire',
    },
    // Add more poster objects as needed
  ];

  
  // Event listener for randomize button
  // TODO: Add an event listener to the randomizeButton that calls a function when clicked
    const randomizeButton = document.getElementById("randomize"); // grabbing the elements is the first to do when working on DOM
    randomizeButton.addEventListener("click", generateRandomPoster);

  
  // Event listener for submit button
  // TODO: Add an event listener to the submitButton that calls a function when clicked
    const submitButtom = document.getElementById("submit")
    submitButtom.addEventListener("click", generateCustomPoster);
  

    // Function to generate a random poster
  function generateRandomPoster() {
    // TODO: Generate a random index within the range of the posters array length
    // TODO: Retrieve the random poster object from the posters array
    const randomIndex = Math.floor(Math.random() * posters.length)
    const randomPoster = posters[randomIndex];
    // TODO: Call the function to update the DOM with the values from the random poster object
    // call update poster to update the DOM with values
    updatePoster(randomPoster.image, randomPoster.title, randomPoster.quote);

  }
  
  // Function to generate a custom poster
  function generateCustomPoster(event) {
    event.preventDefault();
    // TODO: Retrieve the entered quote and author from the input fields
    const customQuote = quoteInput.value;
    const customTitle = titleInput.value;
    const customPoster = {
      image: lastSelectedImage,
      title: customTitle,
      quote: customQuote,
    };
    // TODO: Create a custom poster object with the entered values
  
    // TODO: Call the function to update the DOM with the values from the custom poster object
    updatePoster(customPoster.image, customPoster.title, customPoster.quote);
  }
  
  // Function to update the poster content in the DOM
  function updatePoster(imageUrl, title, quote) {
    // TODO: Update the DOM with the values provided for the poster image, title, and quote
    posterImage.src = imageUrl;
    posterTitle.textContent = title;
    posterQuote.textContent = quote;
  }