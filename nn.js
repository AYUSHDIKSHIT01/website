

  function info(){
    if(document.getElementById("lop").value=="white")
    {
      $('html,body').animate({
          scrollTop: $("#white").offset().top},
          1000);
  
          $("#white").addClass("aq");
    }
    else if(document.getElementById("lop").value=="chinch")
    {
      $('html,body').animate({
          scrollTop: $("#chinch").offset().top},
          1000);
  
          $("#chinch").addClass("aq");
    }
  
    else if(document.getElementById("lop").value=="night")
    {
      $('html,body').animate({
          scrollTop: $("#night").offset().top},
          1000);
  
          $("#night").addClass("aq");
    }
  
  
  }
