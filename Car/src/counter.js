const speed = 97;

const animateCounters = () => {
  const counters = document.querySelectorAll('.count');
  counters.forEach((counter) => {
    const upDate = () => {
      const target = Number(counter.getAttribute('data-target'));
      const count = Number(counter.innerText);
      const inc = target / speed;
      if (count < target) {
        counter.innerText = Math.floor(inc + count);
        setTimeout(upDate, 15);
      } else {
        counter.innerText = target;
      }
    };
    upDate();
  });
};
