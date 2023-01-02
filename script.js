$(document).ready(function() {
  $.ajax({
      url: "/data",
      dataType: "json",
      cache: false,
      success: function(data) {
          $("#home div").append("<p>"+ data.about[0] + "</p>");
          $("#home div").append("<p>"+ data.about[1] + "</p>");
          //$('#work p:nth-child(2)').text(data.work[0].companyName);

          work = data.work                 
          $(work).each(function(index){
              $("#work div").append("<h5>"+ work[index].companyName + ":("+ work[index].duration +")" +"</h5>")
              $("#work div").append('<ul id="ul' + index + '" ></ul>')
              $('#ul' + index).append("<li>Projects: "+ work[index].project +"</li>")
              $('#ul' + index).append("<li>Tech: "+ work[index].tech +"</li>")                           
          })


          education = data.education                 
          $(education).each(function(index){
              $("#education div").append("<h5>"+ education[index].institution +  
                  ":("+ education[index].year +")" +"</h5>")
              $("#education div").append('<ul id="eul' + index + '" ></ul>')
              $('#eul' + index).append("<li>"+ education[index].qualification +"</li>")
          })

          skills = data.skill 

          for (let i = 0; i < skills.length; i++) {
              $("#skill div").append("<h5>"+ Object.keys(skills[i]) + "</h5>")
              $("#skill div").append('<ul id="sul' + i + '" ></ul>')

              switch(Object.keys(skills[i])[0]){
                      case "interpersonal":
                          for (let y = 0; y < skills[i].interpersonal.length; y++) {
                              $('#sul' + i).append("<li>"+ skills[i].interpersonal[y]  +"</li>")
                          }
                          break
                      case "programming":
                      for (let y = 0; y < skills[i].programming.length; y++) {
                          $('#sul' + i).append("<li>"+ skills[i].programming[y]  +"</li>")
                      }
                      break
                      case "framework":
                      for (let y = 0; y < skills[i].framework.length; y++) {
                          $('#sul' + i).append("<li>"+ skills[i].framework[y]  +"</li>")
                      }
                      break
              }  
          }

          interest = data.interest 
          $("#interest div").append("<h5>Interest</h5>")
          $("#interest div").append('<ul id="hobbies" ></ul>')

          $(interest).each(function(index){                            
              $('#hobbies').append("<li>"+ interest[index] +"</li>")
          })

          contact = data.contacts
          $("#contact div").append("<h5>Contacts</h5>")
          $("#contact div").append('<ul id="contacts" style="list-style-type:none;" ></ul>')
          $("#contacts").append("<li class='bi bi-telephone'> "+ contact.cell +"</li>")
          $("#contacts").append("<li><a href=" + contact.twitter +" class='bi bi-twitter'> @iamtipe</a></li>")                       
          $("#contacts").append("<li class='bi bi-envelope'> "+ contact.email +" </li>")
          $("#contacts").append("<li><a href=" + contact.github +" class='bi bi-github'> @Lesiba-Tipe</a></li>")

          
          
          
      }.bind(this),error: function(xhr, status, err) {
          alert("Failed to connect to server")
      }
  });

  window.onscroll = function(){
      var navbar = document.getElementById("navbar");
      var sticky = navbar.offsetTop;

      if(window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
      } 
      else {
          navbar.classList.remove("sticky");
      }
  };
 
});