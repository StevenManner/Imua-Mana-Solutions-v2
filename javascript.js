// FAQ accordion
    document.querySelectorAll('#faq-home .cs-button').forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.closest('.cs-faq-item');
            const isActive = item.classList.contains('active');
            document.querySelectorAll('#faq-home .cs-faq-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });