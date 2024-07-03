document.getElementById('tugma').addEventListener('click', function() {
    const svgText = document.getElementById('svgText');
    const audio = document.getElementById('audioPlayer');
    const nameInput = document.querySelector('.name').value.trim();
  
    if (nameInput !== '') {
        svgText.querySelector('text').textContent = nameInput;
        svgText.style.display = 'block';
        document.querySelector('.ism').style.display = 'none';
        document.querySelector('.name').style.display = 'none';
        document.getElementById('tugma').style.display = 'none';
        audio.play();
    } else {
        alert('Ismni kiriting, keyin tugmani bosing!');
    }
  });
  