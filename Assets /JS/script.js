```javascript
document.addEventListener('DOMContentLoaded', () => {

    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(btn => {

        btn.addEventListener('click', () => {

            filterButtons.forEach(b => {
                b.classList.remove('active');
            });

            btn.classList.add('active');

            const filter = btn.dataset.filter;

            cards.forEach(card => {

                const category = card.dataset.category;

                if (filter === 'all' || filter === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }

            });

        });

    });


    const yearSpan = document.getElementById('year');

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});
```
