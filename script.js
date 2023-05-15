let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.nav');
let searchbar = document.querySelector('#search-bar');
let search = document.querySelector('.search-form');

menubar.onclick = () =>{
       menubar.classList.toggle('fa-times')
       mynav.classList.toggle('active')
}

searchbar.onclick = () =>{
      
       search.classList.toggle('active')
}

// Define selector for selecting
      // anchor links with the hash
      let anchorSelector = 'a[href^="#"]';
   
      // Collect all such anchor links
      let anchorList =
          document.querySelectorAll(anchorSelector);
       
      // Iterate through each of the links
      anchorList.forEach(link => {
          link.onclick = function (e) {
   
              // Prevent scrolling if the
              // hash value is blank
              e.preventDefault();
       
              // Get the destination to scroll to
              // using the hash property
              let destination =
                  document.querySelector(this.hash);
       
              // Scroll to the destination using
              // scrollIntoView method
              destination.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });

$(window).on('scroll', function() {
    if ($(window).scrollTop() > 100) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });



  // function sendMail() {
  //   var params = {
  //     name: document.getElementById("email").value,
  //     name: document.getElementById("pwd").value,
  //     name: document.getElementById("comment").value,
  //   };

  //   const serviceID = "service_v6avpsd";
  //   const templateId = "template_ca1pnov";
  
  //   emailjs.send(serviceID,templateId,params)
  //   .then(
  //     res=>{
  //       document.getElementById("email").value= "";
  //       document.getElementById("pwd").value= "";
  //       document.getElementById("comment").value= "";
  //       console.log(res);
  //       alert("your message as been sent successfully")
  //     })
  // .catch((err) => console.log(err));
    
  // }
 
