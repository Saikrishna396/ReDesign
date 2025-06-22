function askName() {
  // Show the input box
  document.getElementById("inputBox").style.display = "block";
}

function submitName() {
  const name = document.getElementById("nameInput").value.trim();
  const responseDiv = document.getElementById("response");

  if (name === "") {
    alert("Please enter your name!");
    return;
  }

  fetch("https://redesign-mtbs.onrender.com/entering", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `name=${encodeURIComponent(name)}`
  })

    .then(res => res.text())
    .then(message => {
      // Show response
	  console.log("Name sent to server:", name);
      responseDiv.innerText = message;
      responseDiv.classList.add("active");

      // Hide other elements
      document.getElementById("welcomeMsg").style.display = "none";
      document.getElementById("inputBox").style.display = "none";
      document.getElementById("touchBtn").style.display = "none";

      // Hide butterflies
      document.querySelectorAll('.butterfly').forEach(el => el.style.display = 'none');
	  launchFireworks();
    })
    .catch(err => {
      responseDiv.innerText = "Error: " + err.message;
      responseDiv.classList.remove("active");
    });
}
function launchFireworks() {
	const duration = 5000; // 5 seconds
	  const interval = 150; // create a new firework every 150ms
	  const endTime = Date.now() + duration;

	  const intervalId = setInterval(() => {
	    if (Date.now() > endTime) {
	      clearInterval(intervalId);
	      return;
	    }

	    createFirework();
	  }, interval);
	}

	function createFirework() {
  for (let i = 0; i < 20; i++) {
    const firework = document.createElement('div');
    firework.className = 'firework';

    // Random position in the viewport
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;
    firework.style.backgroundColor = getRandomColor();

    document.body.appendChild(firework);

    // Remove after animation ends
    firework.addEventListener('animationend', () => firework.remove());
  }
}
const fireworkContainer = document.createElement('div');
fireworkContainer.classList.add('firework-container');
document.body.appendChild(fireworkContainer);

function getRandomColor() {
  const colors = ['yellow', 'red', 'orange', 'white', 'hotpink', 'deepskyblue', 'lime'];
  return colors[Math.floor(Math.random() * colors.length)];
}
