// The next slide to be displayed
var slideIndex = 0;
// The current timer
var timer;
// The number of images in the slideshow
var numImages;

$(init);

function init() {
    // The relative path to the directory holding the images
    var imgPath = "img/";
    // All the images, names only
    var imgSrc = ["slide1.png","slide2.png","slide3.png","slide4.png"];
    // The image descriptions to be overlayed on the slideshow
    var imgText = [];
    // The number of images in the slideshow
    numImages = imgSrc.length;

    // For every image in the slideshow
    for (var i = 0; i < numImages; i++) {
        // Create a main div to hold the image and all its info
        var mainDiv = $("<div>").addClass("mySlides").addClass("fade");
        // Create a child div to hold the numbering (e.g. "1 / 3")
        var numberDiv = $("<div>").addClass("numberText").text((i + 1) + " / " + numImages);
        // Create the image element
        var image = $("<img>").attr("src", imgPath + imgSrc[i]);
        // Create the image description caption div
        var textDiv = $("<div>").addClass("text").text(imgText[i]);

        // Add all the child divs to the main div
        mainDiv.append(numberDiv);
        mainDiv.append(image);
        mainDiv.append(textDiv);

        // Add the main div to the slideshow
        $(".slideshow-container").append(mainDiv);

        // Capture current value of i
        const dotIndex = i;

        // Create a clickable dot to select images
        var dot = $("<span>").addClass("dot").click(function () {
            currentSlide(dotIndex);
        });

        // Add the dot to its container
        $("#dots").append(dot);
    }

    // To use an event handler with parameters, it must be wrapped inside another function
    $(".prev").click(function () {
        plusSlides(-1);
    });

    $(".next").click(function () {
        plusSlides(1)
    });

    // Show the first image
    showSlides();
}

// Next/previous controls
function plusSlides(n) {
    // Stop the current timer
    clearTimeout(timer);
    // Set the desired slide number
    slideIndex += n - 1;
    // Restart the timer
    showSlides();
}

// Thumbnail image controls
function currentSlide(n) {
    // Stop the current timer
    clearTimeout(timer);
    // Set the desired slide number
    slideIndex = n;
    // Restart the timer
    showSlides();
}

// Controls the slideshow progression
function showSlides() {
    // Wrap around if they reach the end/beginning of the slideshow
    if (slideIndex >= numImages) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = numImages - 1;
    }
    // Show the desired slide
    showSlide(slideIndex);
    // Advance the counter for next time
    slideIndex++;
    // Start a time to call this function in 4 seconds
    timer = setTimeout(showSlides, 4000);
}

// Makes the slide at index n the visible one
function showSlide(n) {
    // Hides all the slide divs and shows only the desired one
    $(".mySlides").hide().eq(n).show();
    // Removes the 'active' class from all dots, then adds it only to the desired one
    $("span.dot").removeClass("active").eq(n).addClass("active");
}