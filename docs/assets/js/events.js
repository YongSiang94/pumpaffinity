// var isAttending = document.querySelector('#attendance').checked;

// document.getElementById('attendance').addEventListener("change", function() {
//     if (this.checked) {
//         console.log("Please activate dietary restriction")
//         document.getElementById("dietary_restriction").readOnly = false;
//     } else {
//         console.log("Hide/ Disable Dietary Restriction");
//         document.getElementById("dietary_restriction").readOnly = true;
//     }
// })

// // Detect the operating system
// function detectOS() {
//     const userAgent = navigator.userAgent || navigator.vendor || window.opera;

//     if (/android/i.test(userAgent)) {
//         return "Android";
//     } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//         return "iOS";
//     } else {
//         return "Other";
//     }
// }

// // Redirect to appropriate maps link
// function redirectToMaps() {
//     const os = detectOS();
//     const destination = "Intercontinental Singapore, 80 Middle Road, Singapore 188966";

//     if (os === "Android") {
//         // Google Maps link
//         document.querySelector("#location_link").href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
//     } else if (os === "iOS") {
//         // Apple Maps link
//         document.querySelector("#location_link").href = `https://maps.apple.com/?daddr=${encodeURIComponent(destination)}`;
//     } else {
//         // Default to Google Maps or prompt
//         document.querySelector("#location_link").href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
//     }
// }

// // Call the function when ready
// redirectToMaps();
