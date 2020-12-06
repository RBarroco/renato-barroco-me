// Initialize and add the map
// function initMap() {
//   // Your location
//   const loc = { lat: 42.361145, lng: -71.057083 };
//   // Centered map on location
//   const map = new google.maps.Map(document.querySelector('.map'), {
//     zoom: 14,
//     center: loc
//   });
//   // The marker, positioned at location
//   const marker = new google.maps.Marker({ position: loc, map: map });
// }

// Sticky menu background
// window.addEventListener('scroll', function() {
//   if (window.scrollY > 150) {
//     document.querySelector('#navbar').style.opacity = 0.9;
//   } else {
//     document.querySelector('#navbar').style.opacity = 1;
//   }
// });


// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 230
      },
      800
    );
  }
});

function submitForm() {
  // Get the first form with the name
  // Usually the form name is not repeated
  // but duplicate names are possible in HTML
  // Therefore to work around the issue, enforce the correct index
  var frm = document.getElementsByName('contact')[0];
  frm.submit(); // Submit the form
  frm.reset();  // Reset all form data
  return false; // Prevent page refresh
}
// Fade on load
// var opacity = 0; 
// var intervalID = 0; 
// window.onload = fadeIn; 

// function fadeIn() { 
//     setInterval(show, 150) 
// } 

// function show() { 
//     var body = document.getElementById("home"); 
//     opacity = Number(window.getComputedStyle(body) 
//                      .getPropertyValue("opacity")); 
//     if (opacity < 1) { 
//         opacity = opacity + 0.1 
//         body.style.opacity = opacity 
//     } else { 
//         clearInterval(intervalID) 
//     } 
// } 
