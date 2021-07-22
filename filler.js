// Author: Michael C. Bataller
// 
// Instructions: Paste this in your 
// browser's DevTools console.
window.scrollTo(0, document.body.scrollHeight)
let yourRating = 3;
try {
    (function (rating = 1) {
        for (var i = 1; i <= 40; i++) {
            document.getElementById(`q${i}${rating}`).checked = true;
        }
    })(yourRating)
}
catch (err) {
    document.getElementById('btnsubmit').click()
}
