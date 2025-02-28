const ratingStars = [...document.getElementsByClassName("rating__star")];

const executeRating = function (stars) {
  const starClassActive = "rating__star fas fa-star";
  const starClassInactive = "rating__star far fa-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);
      if (star.className === starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i)
          stars[i + 1].className = starClassInactive;
      }
    };
  });
};

executeRating(ratingStars);
