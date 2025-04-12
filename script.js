// script.js

document.getElementById('pledge-button').addEventListener('click', function () {
  const message = document.getElementById('response-message');
  message.textContent = "The Force is strong in this one. Reels will be watched. 💫";

  // Add some temporary confetti effect (simple emoji sprinkle)
  const confetti = document.createElement('div');
  confetti.textContent = "🎉🎉🎉";
  confetti.style.fontSize = '2rem';
  confetti.style.marginTop = '1rem';
  message.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 2500);
});
