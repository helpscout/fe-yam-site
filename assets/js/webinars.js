// Gets and sets correct information for webinar modal

// When a scheduled webinar is clicked, find the webinar key
$('#webinarSchedule').on('click', 'li', function(event){
  let webKey = $(this).find('#webKey').data("webinar-key");
  // empty modal of any previous data 
  $('#webinarTitle').empty();
  
  // If there's no key, it's a prerecorded webinar. Append appropriate title
  if(!webKey){
    $('#webinarTitle').append(`
      <h5>You are registering for a 12-minute: </h5> 
      <h2>Prerecorded Webinar</h2>`);
  } else {
  // Else get the webinar info and append to modal header
    const $webinarInfo = $(this).find('p');
    const date = $webinarInfo[0].innerText;
    const time = $webinarInfo[1].innerText;

    $('#webinarTitle').append(`
      <h5>You are registering for a class on</h5>
      <h2>${date} at ${time}<h2>`);
  }
});