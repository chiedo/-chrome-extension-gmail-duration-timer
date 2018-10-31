console.log("Gmail Duration Timer Enabled.");
var chiedo_timeInEmails = 0;

// Counter
setInterval(function() {
  chiedo_timeInEmails++;

  // Display time in email in the console
  if(chiedo_timeInEmails % 60 === 0) {
    console.log("You've now spent " + Math.ceil(chiedo_timeInEmails / 60) + " minutes in gmail.");
  }

  // For each interval of X minutes, alert the user to hurry up
  // their emails
  if(chiedo_timeInEmails % 600 === 0) {
    alert("Phone call instead? You've now spent " + Math.ceil(chiedo_timeInEmails / 60) + " minutes in gmail.");
  }
}, 1000);
