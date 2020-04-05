var rating;

// This snippet allows you to automatically fill all the 
// PUP SIS Survey questions in just a single keyboard click.
// 
// 
// Snippet by Michael C. Bataller
// License can be found in LICENSE file, All Rights Reserved 2020.

// Replace the null below with your rating, else
// the program will not work.
// Example: rating = 5;

rating = 5;

const loop = (rating = 5) => {
    for (var i = 1; i <= 20; i++) {
        console.log(`Q${i}${rating}`)
        // document.getElementById(`Q${i}${rating}`).checked = true;
    }
}

// execute the function
loop(rating);