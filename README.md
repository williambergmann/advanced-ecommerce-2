### Intro
Let's practice compoment communication by adding a little complexity to a simple ecommerce site. Intead of just looking at all products, we now want to look at products that are in a certain category. The user needs to be able to click on a button in one component that then changes what happens in another component.
This application is based on an existing website that does not use React. If you worked for this company, they might ask you to update their site to use React. 
https://p.w3layouts.com/demos/spareparts/web/index.html

### Setup
Fork, Clone, npm install, npm start

### Do
* Take the html out of the App component and put in separate components
  * Header 
    * look for div with a className of "top-header" (in App.js)
    * take that content and place it in the Header component
  * Footer 
    * look for div with a className of "footer" (in App.js)
    * take that content and place it in the Footer component
    * ...the component may not exist yet
  * ImageSlider 
    * look for div with className of "image-slider" (in App.js)
    * take that content and place it in the ImageSlider component
  * ProductDetail 
    * look for div with className of "grid_1_of_5" (in App.js)
    * take that content and place it in the ProductDetail component
    * Use PropTypes to require a prop "product"
    * Use product prop to populate the UI instead of hard coded 
  * SubHeader
    * look for div with className of "sub-header" (in App.js)
    * take that content and place it in the SubHeader component
  * TopNav
    * look for div with className of "top-nav" (in App.js)
    * take that content and place it in the TopNav component

* Make sure to import and use all these components back in App

* Create a variable in index.js called currentCategory and set it to "tires"

* Create a function in index.js called changeCategory thats takes a parameter category. It will assign category to currentCategory and call render()

* Send the changeCategory function to App and then to the TopNav component by way of props

* Send the currentCategory to App by way of props

* App should use the currentCategory value to filter the array of products by category and then map over them to create ProductDetail components

* Modify TopNav
  * Remove existing href and replace with "#"
  * Register onClick for the links, make sure to use arrow function. Make sure to preventDefault.
  * In the arrow function call props.changeCategory("tires"). Send in the category that is appropriate for the link
