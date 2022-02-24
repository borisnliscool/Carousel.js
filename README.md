# Carousel.js
Carousel.js is a simple Javascript library that creates a fully customizable carousel.<br>
Comming in at only 4kb it has great performance and is easy to use.

## Documentation

### Creating a carousel
To create a carousel simply create a new carousel object.
Bellow you can find an example on how to create a simple carousel.
```js
const carousel = new Carousel(
    ["image1.png", "image2.png", "image3.png"],
    document.querySelector("#wrapper"),
    "Nezt!",
    "Previouz!"
);
```


**Arguments**


1. Array of images.
2. DOM element where the carousel should be made in (Not required, defaults to the HTML body).
3. String for the next button (Not required, defaults to "Next")
3. String for the previous button (Not required, defaults to "Previous")

## Helper Functions

### nextSlide
```js
carousel.nextSlide();
```
Pretty self explanatory, once executed it will update the slide to the next one.

### previousSlide
```js
carousel.previousSlide();
```
Also self explanatory, once executed it will update the slide to the previous one.

### setAutomaticSlideUpdate
```js
carousel.setAutomaticSlideUpdate(interval, callback, direction);
```
Sets the automatic slide update in milliseconds

**Arguments**

1. Interval in milliseconds
2. Function that runs everytime the slide updates. (not required)
3. The direction that the slides updates in, 1 = forward, -1 = backwards. (not required)

### setNextBtnText
```js
carousel.setNextBtnText(text);
```
Sets the text for the next button.

**Arguments**

1. String to set the text to.

### setPrevBtnText
```js
carousel.setPrevBtnText(text);
```
Sets the text for the previous button.

**Arguments**

1. String to set the text to.

### setNextBtnCallback
```js
carousel.setNextBtnCallback(callback);
```
Sets the function that is ran every time the user clicks on the next button.

**Arguments**

1. Function to run every time the next button is clicked.

### setPrevBtnCallback
```js
carousel.setPrevBtnCallback(callback);
```
Sets the function that is ran every time the user clicks on the previous button.

**Arguments**

1. Function to run every time the previous button is clicked.

### setSlideUpdateCallback
```js
carousel.setSlideUpdateCallback(callback);
```
Sets the function that is ran every time the slide updates.

**Arguments**

1. Function to run every time the slide updates.

## CSS Classes

### .carousel
```css
.carousel {
    width: 50vw;
    padding: 25px 25px;
    border-radius: 15px;
}
```
Class for the main parent object of the carousel, used for setting the size of the carousel.

### .carousel-active
```css
.carousel-active {
    display: block;
}
```
Class that is added to the carousel slide that is active, only 1 slide has this class at a time.

### .carousel-inactive
```css
.carousel-inactive {
    display: none;
}
```
Class that is added to the carousel slides that are inactive.

### .carousel-inner img
```css
.carousel-inner img {
    width: 50vw;
    aspect-ratio: 16/9;
    border-radius: 10px;
    user-select: none;
}
```
Class that sets the styling of the image, used for sizing the image and setting the border radius.

### .carousel-buttons
```css
.carousel-buttons {
    margin-top: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```
Parent class for the carousel buttons, places them correctly under the image.

### .carousel-buttons button
```css
.carousel-buttons button {
    padding: 15px 20px;
    border-radius: 5px;
    min-width: 100px;
    background-color: white;
    color: #D22B2B;
    outline: none;
    border: 1px solid #D22B2B;
    cursor: pointer;
    transition: background-color 200ms, color 200ms;
}

.carousel-buttons button:hover {
    background-color: #D22B2B;
    color: white;
}
```
Classes for the buttons itself, these are fully customizable so set them to the colours you want!

### .carousel-next
```css
.carousel-next {}
```
Class that is added to the next button, the default doesn't add special stying but it is an option.

### .carousel-previous
```css
.carousel-previous {}
```
Class that is added to the previous button, the default doesn't add special stying but it is an option.
