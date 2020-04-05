var rating;

// This snippet allows you to automatically fill all the 
// PUP SIS Survey questions in just a single keyboard click.
// 
// 
// Code snippet by Michael C. Bataller
// License can be found in LICENSE file, All Rights Reserved 2020.

// Replace the null below with your rating, else
// the program will not work.
// Example: rating = 5;

rating = null;

const loop = (rating = 5) => {
    for (var i = 1; i <= 20; i++) {
        document.getElementById(`Q${i}${rating}`).checked = true;
    }
}

// execute the function
loop(rating);