// Toast notification system
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    container.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => {
            container.removeChild(toast);
        }, 300);
    }, 3000);
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Form submission handler
document.getElementById('signup-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const emailInput = document.getElementById('email-input');
    const submitButton = e.target.querySelector('button[type="submit"]');
    const buttonText = document.getElementById('button-text');
    const email = emailInput.value.trim();

    // Validate email
    if (!email) {
        showToast('Please enter your email', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }

    // Disable form during submission
    emailInput.disabled = true;
    submitButton.disabled = true;
    buttonText.textContent = 'Submitting...';

    try {
        // Store email in localStorage (since we don't have a backend)
        const signups = JSON.parse(localStorage.getItem('signups') || '[]');

        // Check if email already exists
        if (signups.includes(email)) {
            showToast('This email has already been registered', 'error');
            emailInput.disabled = false;
            submitButton.disabled = false;
            buttonText.textContent = 'Steal Access';
            return;
        }

        // Add new email
        signups.push(email);
        localStorage.setItem('signups', JSON.stringify(signups));

        // Simulate network delay for better UX
        await new Promise(resolve => setTimeout(resolve, 500));

        // Success!
        showToast('Successfully signed up for early access!', 'success');
        emailInput.value = '';

    } catch (error) {
        showToast('Something went wrong. Please try again.', 'error');
        console.error('Signup error:', error);
    } finally {
        emailInput.disabled = false;
        submitButton.disabled = false;
        buttonText.textContent = 'Steal Access';
    }
});

// Log signups to console for debugging (remove in production)
console.log('Current signups:', JSON.parse(localStorage.getItem('signups') || '[]'));
