let hitClick = 0;
let missClick = 0;

for (let i = 1; i < 10; i++) {
  let clickingSpot = document.getElementById('hole' + i);
  
  clickingSpot.onclick = function() {
    if (clickingSpot.className.includes('hole hole_has-mole')) {
      hitClick += 1;
      document.getElementById('dead').textContent = hitClick;
        
      if (hitClick == 10) {
        alert('Вы победили!');

        return location.reload();
      }
    }
    else {
      missClick += 1;
      document.getElementById('lost').textContent = missClick;

      if (missClick == 5) {
        alert('Вы проиграли!');

        return location.reload();
      }
    }

  }

}