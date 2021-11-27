(function() {
  const card = document.getElementById('card3429');
  if (card) {
    const { top, bottom, left, right } = card.getBoundingClientRect();
    const ROTATION_FACTOR = 50;
    const SHADOW_FACTOR = 15;
    const handleMouseMove = ({ x, y }) => {
      let xOffset = 0;
      let yOffset = 0;
      if (x < left) xOffset = x - left;
      if (x > right) xOffset = x - right;
      if (y < top) yOffset = y - top;
      if (y > bottom) yOffset = y - bottom;
      card.style.transform = `rotateX(${yOffset / ROTATION_FACTOR}deg) rotateY(${xOffset / ROTATION_FACTOR}deg)`;
      card.style.boxShadow = `${-xOffset / SHADOW_FACTOR}px ${-yOffset / SHADOW_FACTOR}px 64px 32px var(--dim-blue-shadow),${-xOffset / SHADOW_FACTOR}px ${-yOffset / SHADOW_FACTOR}px 32px hsl(217, 54%, 8%, 35%) inset,${xOffset / SHADOW_FACTOR}px ${yOffset / SHADOW_FACTOR}px 32px hsl(0, 0%, 100%, 3%) inset`;
    };
    document.addEventListener('mousemove', handleMouseMove);
  }
})();