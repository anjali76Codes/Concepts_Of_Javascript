/*
location
history
innerHeight()
innerWidth()
open()
close()
resizeBy()
resizeTo()
moveBy()
moveTo()
scrollBy()
scrollTo()
scroll()
print()
document
*/


// The window object represents an open window in a browser

// The location object contains information about the current URL of the document


// Redirects the current page to the specified URL
location.href = 'https://developer.mozilla.org/en-US/';

// history object --> provides  the browser  history
history


// Moves the browser forward 3 pages in the history
history.forward(3);

// Moves the browser backward 3 pages 
history.back(3); 

// Moves the browser forward 7 pages 
history.forward(7);

// Moves the browser to a specific page in the session history
history.go(-7); // Negative value moves backward


// *Window Dimensions
// innerHeight and innerWidth return the inner height and width of the window's content area

// outerHeight and outerWidth return the outer height and width of the window, including toolbars and scrollbars

console.log(window.innerHeight); // Height of the window's content area
console.log(window.innerWidth);  // Width of the window's content area
console.log(window.outerHeight); // Full height of the browser window
console.log(window.outerWidth);  // Full width of the browser window



// Example of combined usage
console.log(window.outerHeight + window.innerHeight);
console.log(window.outerWidth);


//* Window Methods
// open(): Opens a new browser window or tab
// close(): Closes the current window or a window that was opened using open()

// Opens a new tab with the specified URL
let mdnWindow = open('https://developer.mozilla.org/en-US/plus');

// Closes the window that was opened using window.open()
mdnWindow.close();


let youtubeWindow = open('https://www.youtube.com/');
youtubeWindow.close();


// Resizing and Moving the Window
// resizeTo(width, height): Resizes the window to the specified width and height

// Resizes the window to 600 pixels wide and 500 pixels tall
resizeTo(600, 500);


// resizeBy(widthDelta, heightDelta): Resizes the window by adding/subtracting the specified amounts from its current dimensions

// Resizes the window by adding 200 pixels to the width and 300 pixels to the height
resizeBy(200, 300);


// moveBy(x, y): Moves the window by the specified amounts along the x and y axes

// Moves the window 100 pixels to the right
moveBy(100, 0);


// moveTo(x, y): Moves the window to the specified x and y coordinates
// Moves the window to the coordinates (300, 500)
moveTo(300, 500);


// *Scrolling
// scroll(), scrollBy(), scrollTo(): These methods are used for scrolling the content of the window

// Scrolls the window to the top-left corner
scroll();

// Scrolls the window 500 pixels to the right
scrollBy(500, 0);

// Scrolls the window to the coordinates (235, 466)
scrollTo(235, 466);



//* Printing
// print(): Opens the print dialog to print the current document

// Opens the print dialog
print();



// *Document object
// The document object represents the web page loaded in the browser an
// Document --> work for viewport

console.log(document);
