document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const counters = document.querySelectorAll('#statistics span');
const speed = 200; // The lower the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Lower inc to slow and higher to slow
        const inc = target / speed;

        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counter.innerText = Math.ceil(count + inc);
            // Call function every ms
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
