$(document).ready(()=>{

  // first time call
   $.ajax({url: "https://randomuser.me/api/", success: (result)=>{
      // iimg name, gender, City, email load form here html tag
        $('.img-src').attr('src',result.results[0].picture.large);
      $(".name").html(result.results[0].name.first)
      $(".gender").html(result.results[0].gender)
      $(".city").html(result.results[0].location.city)
      $(".email").html(result.results[0].email);
    }});

// **img name, gender, City, email load form here   **
 $.ajax({url: "https://randomuser.me/api/", success: (result)=>{
      // insert API value(name, gender, city, email) into html tag
        $('.img-src1').attr('src',result.results[0].picture.large);
      $(".name1").html(result.results[0].name.first)
      $(".gender1").html(result.results[0].gender)
      $(".city1").html(result.results[0].location.city)
      $(".email1").html(result.results[0].email);
    }});

 // button
   $(".button1 > button").click(()=>{
     $.ajax({url: "https://randomuser.me/api/", success: (result)=>{
      // insert API value in html tag
        $('.img-src1').attr('src',result.results[0].picture.large);
      $(".name1").html(result.results[0].name.first)
      $(".gender1").html(result.results[0].gender)
      $(".city1").html(result.results[0].location.city)
      $(".email1").html(result.results[0].email);
    }});
   })
// ************************************************************************
   // button 2
 $.ajax({url: "https://randomuser.me/api/", success: (result)=>{
      // insert API value in html tag
        $('.img-src2').attr('src',result.results[0].picture.large);
      $(".name2").html(result.results[0].name.first)
      $(".gender2").html(result.results[0].gender)
      $(".city2").html(result.results[0].location.city)
      $(".email2").html(result.results[0].email);
    }});

    $(".button2 > button").click(()=>{
     $.ajax({url: "https://randomuser.me/api/", success:(result)=>{
      // insert API value in html tag
        $('.img-src2').attr('src',result.results[0].picture.large);
      $(".name2").html(result.results[0].name.first)
      $(".gender2").html(result.results[0].gender)
      $(".city2").html(result.results[0].location.city)
      $(".email2").html(result.results[0].email);
    }});
   })

// *********  card three img name etc load form here ************

// button 3
 $.ajax({url: "https://randomuser.me/api/", success: (result)=>{
      // insert API value in html tag
        $('.img-src3').attr('src',result.results[0].picture.large);
      $(".name3").html(result.results[0].name.first)
      $(".gender3").html(result.results[0].gender)
      $(".city3").html(result.results[0].location.city)
      $(".email3").html(result.results[0].email);
    }});

   $(".button3 > button").click(()=>{
     $.ajax({url: "https://randomuser.me/api/", success: (result)=>{
      // insert API value in html tag
        $('.img-src3').attr('src',result.results[0].picture.large);
      $(".name3").html(result.results[0].name.first)
      $(".gender3").html(result.results[0].gender)
      $(".city3").html(result.results[0].location.city)
      $(".email3").html(result.results[0].email);
    }});
   })

});
