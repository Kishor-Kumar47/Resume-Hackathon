// Function to toggle sections visibility
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.classList.toggle('hidden');
    }
}
// Function to handle image upload and preview
function handleImageUpload(event) {
    var input = event.target;
    var file = input.files ? input.files[0] : null;
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var imgElement = document.getElementById('resume-pic');
            imgElement.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            imgElement.classList.remove('hidden'); // Show the image when uploaded
        };
        reader.readAsDataURL(file);
    }
}
// Function to handle resume generation
function generateResume() {
    var fullName = document.getElementById('full-name').value;
    var jobTitle = document.getElementById('job-title').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phone-number').value;
    var address = document.getElementById('address').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    // Populate the resume section
    (document.getElementById('resume-name')).innerText = fullName;
    (document.getElementById('resume-job-title')).innerText = jobTitle;
    (document.getElementById('resume-email')).innerText = email;
    (document.getElementById('resume-phone')).innerText = phoneNumber;
    (document.getElementById('resume-address')).innerText = address;
    (document.getElementById('resume-experience')).innerText = experience;
    (document.getElementById('resume-education')).innerText = education;
    (document.getElementById('resume-skills')).innerText = skills;
    // Display the resume section
    var resumeSection = document.getElementById('resume-section');
    resumeSection.classList.remove('hidden');
}
// Add event listener to the toggle buttons
document.getElementById('toggle-personal-info').addEventListener('click', function () { return toggleSection('personal-info-section'); });
document.getElementById('toggle-experience').addEventListener('click', function () { return toggleSection('experience-section'); });
document.getElementById('toggle-education').addEventListener('click', function () { return toggleSection('education-section'); });
document.getElementById('toggle-skills').addEventListener('click', function () { return toggleSection('skills-section'); });
// Add event listener to the profile picture upload
document.getElementById('profile-pic').addEventListener('change', handleImageUpload);
// Add event listener to the "Generate Resume" button
document.getElementById('generate-resume').addEventListener('click', generateResume);
