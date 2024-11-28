// Generate Resume Logic
document.getElementById('generate-resume').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    document.getElementById('resume-name').textContent = name;
    


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const skills = document.getElementById('skills-input').value.split(',').map(skill => skill.trim());
    const education = document.getElementById('education-input').value;

    // Create a resume template
    const resume = `
        <h1>${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <h2>Skills</h2>
        <ul>${skills.map(skill => <li>${skill}</li>).join('')}</ul>
        <h2>Education</h2>
        <p>${education}</p>
    `;

    // Show resume in a new window
    const newWindow = window.open('', '_blank');
    newWindow.document.write(<html><body>${resume}</body></html>);
    newWindow.document.close();
});

// Shareable Link Logic
document.getElementById('share-link').addEventListener('click', () => {
    alert('This feature is under development.');
});


// Terms and Privacy modal functionality
const termsLink = document.getElementById('Terms-link');
const privacyLink = document.getElementById('Privacy-link');
const termsModal = document.getElementById('terms-modal');
const privacyModal = document.getElementById('privacy-modal');
const closeButtons = document.querySelectorAll('.close');

// Show Terms Modal
termsLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    termsModal.style.display = 'flex'; // Show the modal
});

// Show Privacy Modal
privacyLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    privacyModal.style.display = 'flex'; // Show the modal
});

// Close Modal
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        termsModal.style.display = 'none'; // Hide terms modal
        privacyModal.style.display = 'none'; // Hide privacy modal
    });
});

// Close modal if clicked outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === termsModal || event.target === privacyModal) {
        termsModal.style.display = 'none';
        privacyModal.style.display = 'none';
    }
});
