// ini javascript

function validateForm() {
    // Get value from input
    const nameInput = document.getElementById("name-input");

    // check if input is empty
    if (nameInput.value == "") {
        alert("Name must be filled out");
    } else {
        //write value to the page
    }
}

let bannerIndex = 0;
showBanner();

function nextBanner() {
    bannerIndex += 1;
    showBanner();
}

function showBanner() {
    const banners = document.getElementsByClassName("banner-img");

    if (bannerIndex >= banners.length) {
        bannerIndex = 0;
    }

    //Loop through all banner elements
    for (let i = 0; i < banners.length; i++) {
        banners[i].style.display = "none";
    }

    // show first banner
    banners[bannerIndex].style.display = 'block';
}

// set interval to change banner
setInterval(nextBanner, 3000);