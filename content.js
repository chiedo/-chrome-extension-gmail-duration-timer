console.log("Gmail Duration Timer Enabled.");
var chiedo_timeInEmails = 0;

// Counter
setInterval(function() {
  chiedo_timeInEmails++;
  
  // For each interval of X minutes, alert the user to hurry up
  // their emails
  
  if(chiedo_timeInEmails % 60 === 0) {
    console.log("You've now spent " + Math.ceil(chiedo_timeInEmails / 60) + " minutes in gmail.");
  }

  if(chiedo_timeInEmails % 600 === 0) {
    alert("You've now spent " + Math.ceil(chiedo_timeInEmails / 60) + " minutes in gmail.");
  }
}, 1000);
