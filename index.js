const seconds_hand = document.querySelector('.hand.seconds');
const minutes_hand = document.querySelector('.hand.minutes');
const hours_hand = document.querySelector('.hand.hours');


function setDate() {
 const now = new Date();
 const seconds = now.getSeconds();
 const minutes = now.getMinutes();
 const hours = now.getHours();
 // Better formula: seconds / 60 * 360 - 90 degrees
 const seconds_deg = (seconds / 60) * 360 - 90;
 const minutes_deg = (minutes / 60) * 360 - 90;
 const hours_deg = (hours / 12) * 360 - 90;

 if(seconds === 0 || seconds === 1) seconds_hand.classList.toggle('notransition');

 if(minutes === 0 && minutes_hand.className.search('notransition') === -1) {
  minutes_hand.classList.add('notransition');
 } else if(minutes === 1 && minutes_hand.className.search('notransition')) { 
  minutes_hand.classList.remove('notransition');
 }
 if(hours === 0 && hours_hand.className.search('notransition') === -1) {
  hours_hand.classList.add('notransition');
 } else if(hours === 1 && hours_hand.className.search('notransition')) { 
  hours_hand.classList.remove('notransition');
 }

 seconds_hand.style.transform=`rotate(${seconds_deg}deg)`;
 minutes_hand.style.transform=`rotate(${minutes_deg}deg)`;
 hours_hand.style.transform=`rotate(${hours_deg}deg)`;

}
setInterval(setDate, 1000);