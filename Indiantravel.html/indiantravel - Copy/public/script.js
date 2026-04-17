// IndianTravel Clone - Custom JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
            navbar.style.backgroundColor = 'rgba(34, 40, 51, 0.95)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.backgroundColor = 'rgba(0,0,0,0.8)';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Auto-rotate hero carousel every 5s
    const heroCarousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
        interval: 5000,
        wrap: true
    });

    // Popular tours carousel - pause on hover
    const popularCarousel = new bootstrap.Carousel(document.getElementById('popularCarousel'), {
        interval: 4000,
        wrap: true,
        pause: 'hover'
    });

    // Featured carousel
    const featuredCarousel = new bootstrap.Carousel(document.getElementById('featuredCarousel'), {
        interval: 6000,
        wrap: true
    });

    // Testimonials carousel
    const testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
        interval: 5000,
        wrap: true,
        pause: 'hover'
    });

    // Navbar collapse on mobile link click
    document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navbarCollapse).hide();
            }
        });
    });

    // Back to top functionality
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Card hover animations
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Fade in animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
    });

    // Typing effect for section titles (optional enhancement)
    function typeWriter(element, text, speed = 100) {
        if (!element) return;
        let i = 0;
        element.innerHTML = '';
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Apply typing effect to main headings (uncomment if desired)
    /*
    const fancyTitles = document.querySelectorAll('.display-5');
    fancyTitles.forEach((title, index) => {
        setTimeout(() => {
            const originalText = title.textContent;
            typeWriter(title, originalText, 80);
        }, index * 2000);
    });
    */

    // Form validation for contact (if forms are added later)
    function validateForm(form) {
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                input.classList.add('is-invalid');
                isValid = false;
            } else {
                input.classList.remove('is-invalid');
            }
        });

        return isValid;
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitBtn = document.getElementById('submitBtn');
            const spinner = submitBtn.querySelector('.spinner-border');
            const formMessage = document.getElementById('formMessage');

            // Show loading state
            submitBtn.disabled = true;
            spinner.classList.remove('d-none');
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status"></span> Sending...';

            // Get form data
            const formData = {
                name: document.getElementById('contactName').value.trim(),
                email: document.getElementById('contactEmail').value.trim(),
                phone: document.getElementById('contactPhone').value.trim(),
                destination: document.getElementById('contactDestination').value,
                message: document.getElementById('contactMessage').value.trim()
            };

            async function submitContact(formData) {
                try {
                    const response = await fetch('/api/contact', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    });

                    const result = await response.json();
                    if (response.ok && result.success) {
                        return result;
                    }

                    throw new Error(result.error || 'Failed to send message');
                } catch (error) {
                    console.warn('Backend contact API unavailable, falling back to local save.', error);

                    const savedContacts = JSON.parse(localStorage.getItem('localContacts') || '[]');
                    savedContacts.push({
                        timestamp: new Date().toISOString(),
                        ...formData
                    });
                    localStorage.setItem('localContacts', JSON.stringify(savedContacts));

                    return {
                        success: true,
                        message: 'Your request was saved locally. To enable full backend functionality, run the Node backend and refresh the page.'
                    };
                }
            }

            try {
                const result = await submitContact(formData);

                if (result.success) {
                    formMessage.className = 'alert alert-success mt-3';
                    formMessage.textContent = result.message;
                    formMessage.classList.remove('d-none');
                    contactForm.reset();
                } else {
                    throw new Error(result.error || 'Failed to send message');
                }
            } catch (error) {
                console.error('Contact form error:', error);
                formMessage.className = 'alert alert-danger mt-3';
                formMessage.textContent = error.message || 'An error occurred. Please try again.';
                formMessage.classList.remove('d-none');
            } finally {
                submitBtn.disabled = false;
                spinner.classList.add('d-none');
                submitBtn.innerHTML = 'Send Message';
            }
        });
    }

    // Newsletter subscription
    document.addEventListener('click', function(e) {
        if (e.target.matches('.btn[type="button"]') && e.target.previousElementSibling?.type === 'email') {
            e.preventDefault();
            const emailInput = e.target.previousElementSibling;
            const email = emailInput.value.trim();

            if (!email) {
                alert('Please enter your email address.');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Here you could add API call for newsletter subscription
            alert('Thank you for subscribing! We\'ll keep you updated with our latest offers.');
            emailInput.value = '';
        }
    });

    console.log('Soul4 Travels website loaded successfully!');
});

