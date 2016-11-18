/*     Project Name:  Recipe Display Application
      
      Author: DeVon Singleton
      
      Date:   11/18/2016

      Filename: drill4.js
   */
   
   //displays the next element after the current target 
   
   function display(event) {  
         $(event.currentTarget).next().fadeIn("slow");
      }//end of display 
      
      //attach event listener to h3 elements to invoke display function when clicked 
      
      // $("h3").click(display); 
      
      //displays and animates the next element after the current target  function display2(event) {  
      function display2(event) {
      $(event.currentTarget).next().animate( {height: ‘toggle’}, “slow”);  
      }//end of display2 
      
      //attach event listener to h3 elements to invoke display function when clicked
      $("h3").click(display2);
      
      //change the background color h3 element when mouse hovers over it  
      $("h3").hover(function(){        
            $(this).css("background-color", "yellowz");      
            }, function(){        
            $(this).css("background-color", "blue"); });
                  
      //hover () will triger display2 method each time mouse hovers over header 
      $("h3").hover(display2);
      