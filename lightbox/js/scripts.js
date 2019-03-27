// Open the Modal
let openModal = () => {
    document.getElementById('myModal').style.display = "block";
};
  
  // Close the Modal
let closeModal = () => {
    document.getElementById('myModal').style.display = "none";
};
  
let slideIndex = 1;
showSlides(slideIndex);
  
  // Next/previous controls
let plusSlides = (n) => {
    showSlides(slideIndex += n);
};
  
  // Thumbnail image controls
let currentSlide = (n) => {
    showSlides(slideIndex = n);
};
  
let showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = do
    cument.getElementsByClassName("modal-demo");
    let captionText = document.getElementById("modal-caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

  //event listeners to open the modal when thumbnail is clicked
  let thumbnails = document.getElementsByClassName('modal-hover-shadow');
  for (let i = 0; i < thumbnails.length; i++) {
      let index = i + 1;
      thumbnails[i].addEventListener('click', function(){
        openModal();
        currentSlide(index);
      });
  };

  //event listener to close modal
  let modalClose = document.getElementsByClassName('modal-close');
  modalClose[0].addEventListener('click', closeModal);

  //event listeners for the next and prev buttons
  let prevImg = document.getElementsByClassName('prev');
  prevImg[0].addEventListener('click', function(){
    plusSlides(-1);
  });
  let nextImg = document.getElementsByClassName('next');
  nextImg[0].addEventListener('click', function(){
    plusSlides(1);
  });