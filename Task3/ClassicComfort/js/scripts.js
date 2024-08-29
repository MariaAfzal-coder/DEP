            
            let currentSlide = 0;
                const slides = document.querySelectorAll('.slide');
                const totalSlides = slides.length;

                function showSlide(index) {
                    slides[currentSlide].classList.remove('active');
                    currentSlide = (index + totalSlides) % totalSlides;
                    slides[currentSlide].classList.add('active');
                }

                function nextSlide() {
                    showSlide(currentSlide + 1);
                }

                function prevSlide() {
                    showSlide(currentSlide - 1);
                }
                

    // Select all "View Detail" buttons
    const viewDetailBtn = document.querySelectorAll(".viewDetailBtn");

    // Loop through each button
    viewDetailBtn.forEach((btn, index) => {
        // Add click event to each button
        btn.addEventListener('click', function() {
            // Show the corresponding modal
            const modal = btn.nextElementSibling;
            modal.style.display = "block";
        });
    });
    
    // Select all close buttons
    const closeBtn = document.querySelectorAll(".close");
    
    // Loop through each close button
    closeBtn.forEach((span, index) => {
        // Add click event to close the modal
        span.addEventListener('click', function() {
            // Find the closest modal and hide it
            const modal = span.closest('.modal');
            modal.style.display = "none";
        });
    });


    const announcement = document.querySelector('.slide-announcement');

function announceSlideChange() {
    announcement.textContent = `Slide ${currentSlide + 1} of ${totalSlides}`;
}

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    announceSlideChange(); // Announce slide change
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            document.querySelectorAll('.accordion-button').forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
                btn.nextElementSibling.style.display = 'none';
            });

            if (!isExpanded) {
                this.setAttribute('aria-expanded', 'true');
                content.style.display = 'block';
            }
        });
    });
});
 
    // Close the modal when clicking outside of it
    window.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.accordion-button');
    
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const content = this.nextElementSibling;
    
                // Toggle the current section
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                } else {
                    // Close all sections
                    document.querySelectorAll('.accordion-content').forEach(item => {
                        item.style.display = 'none';
                    });
    
                    // Open the current section
                    content.style.display = 'block';
                }
            });
        });
    });
    
    function trapFocus(modal) {
        const focusableElements = modal.querySelectorAll('a, button, input, select, textarea');
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];
    
        modal.addEventListener('keydown', function(e) {
            const isTabPressed = e.key === 'Tab';
            if (!isTabPressed) return;
    
            if (e.shiftKey) { // Shift + Tab
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else { // Tab
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        });
    }
    
    const viewDetailBtns = document.querySelectorAll(".viewDetailBtn");
    viewDetailBtns.forEach((btn) => {
        btn.addEventListener('click', function() {
            const modal = btn.nextElementSibling;
            modal.style.display = "block";
            trapFocus(modal); // Trap focus when the modal is opened
            btn.setAttribute('aria-expanded', 'true');
            modal.setAttribute('aria-hidden', 'false');
        });
    });
    
    const closeBtns = document.querySelectorAll(".close");
    closeBtns.forEach((span) => {
        span.addEventListener('click', function() {
            const modal = span.closest('.modal');
            modal.style.display = "none";
            modal.setAttribute('aria-hidden', 'true');
            const trigger = document.querySelector(`[aria-expanded="true"]`);
            if (trigger) {
                trigger.setAttribute('aria-expanded', 'false');
                trigger.focus(); // Return focus to the trigger button
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        var link = document.getElementById('bootstrap-css');
        link.media = 'all';
    });