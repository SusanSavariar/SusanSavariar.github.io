// Add click listener to all quadrants to call expandQuad function

loadPageContent();
$('.menuItem').on('click', expandQuad);


//
function expandQuad(event) {

  //Set variable qID to what quadrant is clicked on event is click, target is quadrant, quad number is id.
  var qId = event.currentTarget.id;

  //Select quadrant and change css styling to z index and bring quad to forground of page.
  $('#' + qId).css('z-index','1000');

  //When selected quad expands to bring in the pageContent, the menuContent fades out.
  $('#' + qId + ' .menuContent').fadeOut(250);

  //Execute animate function on selected quad. Expand to 100 vw,vh. Timer set at 1000 seconds. Anonymous callback function executes after the animate function is done.
  $('#' + qId).animate({
      width: "100vw",
      height: "100vh"
    }, 1000, function() {

      //Click listener triggers the expandQuad function off when clicked and allows function contractQuad to run.
      // Removes click listener, prevents expandQuad from running on quad click
      $('#' + qId).off('click', expandQuad);

      //When select quadrant is clicked contractQuad function is triggered on by click listener.
      // Adds new click listener to quad that will trigger the contractQuad function when clicked
      // $('#' + qId).on('click', contractQuad);

      //Select quad clicked and pageContent fades in the time alotted.
      // Select quad and child pageContent element, initiate fade in the time allotted
      $('#' + qId + ' .pageContent').fadeIn(250);
    });
}

// contractQuad function accepts event as an argument
function contractQuad(event) {

  //Quadrant is selected by click (event, target (quad), id (quad #))
  // Creating qId variable and setting equal to the id (id) of the quad (target) that was clicked in the click event (event)
  var qId = $(event.target).parents('.menuItem').attr('id');

  console.log(qId);

  //Select quadrant pageContent fades out
  $('#' + qId + ' .pageContent').fadeOut(250);

  //Execute animate function on selected quad. Contract to 50 vw,vh. Timer set at 1000 seconds. Anonymous callback function executes after the animate function is done.
  $('#' + qId).animate({
      width: "50vw",
      height: "50vh"
    }, 1000, function() {

        //Select quadrant and change css styling z-index to 1, resetting it in line with other quadrants
        $('#' + qId).css('z-index', 1);

        //Click listener triggers the contractQuad function to turn off when clicked and allows function expandQuad to run.
        // $('#' + qId).off('click', contractQuad);

        //Click listener triggers the expandQuad function to turn on when clicked allowing the quads to be clicked on more than once.
        $('#' + qId).on('click', expandQuad);

        //Select quadrant menuContent fades in in allotted time
        $('#' + qId + ' .menuContent').fadeIn(250);
    });
}


function loadPageContent() {
   $.ajax({
    method: "GET",
    url: "about.html",
    dataType: "html"
  }).done(function(data) {
    $('#quad1 .pageContent').html(data);
    $('#quad1 .nav .button').on('click', contractQuad);
  });

  $.ajax({
    method: "GET",
    url: "blog.html",
    dataType: "html"
  }).done(function(data) {
    $('#quad2 .pageContent').html(data);
    $('#quad2 .nav .button').on('click', contractQuad);
  });

   $.ajax({
    method: "GET",
    url: "portfolio.html",
    dataType: "html"
  }).done(function(data) {
    $('#quad3 .pageContent').html(data);
    $('#quad3 .nav .button').on('click', contractQuad);
  });

  $.ajax({
    method: "GET",
    url: "resume.html",
    dataType: "html"
  }).done(function(data) {
    $('#quad4 .pageContent').html(data);
    $('#quad4 .nav .button').on('click', contractQuad);
  });

}

