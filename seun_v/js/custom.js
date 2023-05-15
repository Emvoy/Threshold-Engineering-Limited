
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
      