function changeMessage() {
    const intro = document.getElementById('intro');
    intro.textContent = 'Your pharmacist is a valuable resource in ensuring medication safety. Use their knowledge!';
    intro.classList.add('highlight');
  }
  
  // Toggles visibility of pharmacist advice
  function toggleAdvice() {
    const advice = document.getElementById('advice');
    advice.classList.toggle('hidden');
  }