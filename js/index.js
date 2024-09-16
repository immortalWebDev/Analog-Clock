// Selecting the hour, minute, and second elements by their IDs
const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

// Function to update the clock hands
const updateClock = () => {
  const now = new Date();
  
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate the rotation angles for the hands
  const hourRotation = 30 * hours + minutes / 2;
  const minuteRotation = minutes * 6; // 6 degrees per minute
  const secondRotation = seconds * 6; // 6 degrees per second

  // Apply the rotation to each hand
  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
};

// Initial call to set the clock immediately on page load
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
