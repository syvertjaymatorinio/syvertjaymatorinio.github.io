
// let toggler = document.querySelector('#toggler');

// toggler.onclick = () =>{

//     if(toggler.classList.contains('fa-sun')){
//         toggler.classList.replace('fa-sun', 'fa-moon');
//         document.body.classList.add('active');
//     }else{
//         toggler.classList.replace('fa-moon', 'fa-sun');
//         document.body.classList.remove('active');
//     }

// }

document.querySelectorAll('.small-img-1').forEach(image =>{
    image.addEventListener('click', () =>{
        var src = image.getAttribute('src');
        document.querySelector('.big-img-1').src = src;
    });
});

document.querySelectorAll('.small-img-2').forEach(image =>{
    image.addEventListener('click', () =>{
        var src = image.getAttribute('src');
        document.querySelector('.big-img-2').src = src;
    });
});

document.querySelectorAll('.small-img-3').forEach(image =>{
    image.addEventListener('click', () =>{
        var src = image.getAttribute('src');
        document.querySelector('.big-img-3').src = src;
    });
});

document.querySelectorAll('.small-img-4').forEach(image =>{
    image.addEventListener('click', () =>{
        var src = image.getAttribute('src');
        document.querySelector('.big-img-4').src = src;
    });
});




document.querySelector('.second-img-1').style.display = 'none';

var firstImages = document.querySelectorAll('.first-img-1');
firstImages.forEach(function(image) {
  image.addEventListener('click', function() {
    image.style.display = 'none';
    
    var secondImage = document.querySelector('.second-img-1');
    secondImage.style.display = 'block';
    secondImage.src = image.getAttribute('src');
  });
});





