document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const moreText = document.querySelector('.more-text');

    readMoreBtn.addEventListener('click', function() {
        moreText.style.display = moreText.style.display === 'none' || moreText.style.display === '' ? 'inline' : 'none';
        readMoreBtn.textContent = moreText.style.display === 'none' ? 'Read More' : 'Read Less';
    });
});
// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }