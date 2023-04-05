// Load your images on page-load

function preloader() {

  const imagesList = [

     "./img/city.jpg",

     "./img/mountains.jpg",

     "./img/nature.jpg"

  ];

  const images = [];

  for (let i = 0; i < imagesList.length; i++) {

      images[i] = new Image();

      images[i].src = imagesList[i];

  }



  // Images ready to be used:

  console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);

};

window.addEventListener("load", preloader);








// Get all buttons in a NODE LIST of buttons (array like structure)

const buttons = document.querySelector(".buttons").children;



// Complete your resource-object that will store the dynamic content.

const resource = {

  firstObject: {

      headingContent: "City",

      bodyText: "First object's body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum velit a ligula cursus interdum. Sed dignissim ante ligula, sed viverra augue iaculis vel. In hahabitasse platea dictumst. Sed vulputate euismvelit, eget dignissim eros. Proin pharetra lectusvel nunc vulputate, et lacinia est fringilla. Nulla facilisi. Integer sodales ligula eu ex dignissim ultrices. Vestibulum eu risus a velit euismod fringilla.Sed lobortis ante a orci maximus, in venenatis justo pretium. Integer nec sapien euismod, auctor augue non,ultrices velit.",

      imgUrl: "./img/city.jpg",

      imgAlt: "City"

  },

  secondObject: {

      headingContent: "Mountains",

      bodyText: "Second object's body textFirst object's body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum velit a ligula cursus interdum. Sed dignissim ante ligula, sed viverra augue iaculis vel. In hahabitasse platea dictumst. Sed vulputate euismvelit, eget dignissim eros. Proin pharetra lectusvel nunc vulputate, et lacinia est fringilla. Nulla facilisi. Integer sodales ligula eu ex dignissim ultrices. Vestibulum eu risus a velit euismod fringilla.Sed lobortis ante a orci maximus, in venenatis justo pretium. Integer nec sapien euismod, auctor augue non,ultrices velit.",

      imgUrl: "./img/mountains.jpg",

      imgAlt: "Mountains"

  },

  thirdObject: {

      headingContent: "Nature",

      bodyText: "Third object's body textFirst object's body Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum velit a ligula cursus interdum. Sed dignissim ante ligula, sed viverra augue iaculis vel. In hahabitasse platea dictumst. Sed vulputate euismvelit, eget dignissim eros. Proin pharetra lectusvel nunc vulputate, et lacinia est fringilla. Nulla facilisi. Integer sodales ligula eu ex dignissim ultrices. Vestibulum eu risus a velit euismod fringilla.Sed lobortis ante a orci maximus, in venenatis justo pretium. Integer nec sapien euismod, auctor augue non,ultrices velit.",

      imgUrl: "./img/nature.jpg",

      imgAlt: "Nature"

  }

};
// Get the reference to your HTML-container

const contentContainer = document.getElementById("content");

// Load the first content from the resource-object on page load

contentContainer.innerHTML = `

  <h1>${resource.firstObject.headingContent}</h1>
  <img src="${resource.firstObject.imgUrl}" alt="${resource.firstObject.imgAlt}">
  <p>${resource.firstObject.bodyText}</p>

`;



// Start your handleSelection function here.

function handleSelection(event) {

  // console.log(event.target.innerHTML);
 
  // Remove the id active-button from the element that contains it prior to the click-event.
  [...buttons].forEach(button => {
      if (button.hasAttribute("id")) {
          button.removeAttribute("id");
      }
  });



  // Set the id active-button to the currently clicked button.
  event.target.setAttribute("id", "active-button");

  // Check which button is clicked and create HTML content based on that.
  switch (event.target.textContent) {
      case 'Solution 1':
          contentContainer.innerHTML = `
              <h1>${resource.firstObject.headingContent}</h1>
              <img src="${resource.firstObject.imgUrl}" alt="${resource.firstObject.imgAlt}">
              <p>${resource.firstObject.bodyText}</p>
          `;
          break;
      case 'Solution 2':
        contentContainer.innerHTML = `
        <h1>${resource.secondObject.headingContent}</h1>
        <img src="${resource.secondObject.imgUrl}" alt="${resource.secondObject.imgAlt}">
        <p>${resource.secondObject.bodyText}</p>
    `;
          break;
      case 'Solution 3':
        contentContainer.innerHTML = `
        <h1>${resource.thirdObject.headingContent}</h1>
        <img src="${resource.thirdObject.imgUrl}" alt="${resource.thirdObject.imgAlt}">
        <p>${resource.thirdObject.bodyText}</p>
    `;
          break;
  }


  // Load the content to the HTML-container.


  
}



// Register all buttons to click event.
// https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array/foreach

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleSelection);
}
