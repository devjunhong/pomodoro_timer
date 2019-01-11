// Get current time
let off_session = new Date();
let work_session = new Date();

// Set each session timer
work_session.setMinutes(work_session.getMinutes() + 25);
off_session.setMinutes(off_session.getMinutes() + 30);

setInterval(function(){
  let now = new Date().getTime(); 

  // Find gap between target and now
  let gap = work_session - now; 

  // console.log(gap);

  // Time calculation for minutes and seconds
  let minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((gap % (1000 * 60)) / 1000);

  // Transform minute and second in 2-digit
  minutes = get2digitform(minutes);
  seconds = get2digitform(seconds);

  // console.log('seconds ', secocnds);

  // Display the result in the html document
  console.log(minutes, seconds); 
  console.log(`${minutes} : ${seconds}`);

  document.getElementById("session").innerText = `${minutes} : ${seconds}`;
  
}, 1000);

function get2digitform(val){
  return val < 10? '0' + val : val;
}

// to - do 
// print digit in 2-digit form
