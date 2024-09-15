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
    //Shareable link //
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
    // Show the "Save Changes" button
    var saveButton = document.getElementById('save-changes');
    saveButton.classList.remove('hidden');
}
// Function to save edited changes from the contenteditable fields
function saveChanges() {
    var fullName = document.getElementById('resume-name').innerText;
    var jobTitle = document.getElementById('resume-job-title').innerText;
    var email = document.getElementById('resume-email').innerText;
    var phoneNumber = document.getElementById('resume-phone').innerText;
    var address = document.getElementById('resume-address').innerText;
    var experience = document.getElementById('resume-experience').innerText;
    var education = document.getElementById('resume-education').innerText;
    var skills = document.getElementById('resume-skills').innerText;
    // Update the form inputs with edited content (optional if needed for further actions)
    document.getElementById('full-name').value = fullName;
    document.getElementById('job-title').value = jobTitle;
    document.getElementById('email').value = email;
    document.getElementById('phone-number').value = phoneNumber;
    document.getElementById('address').value = address;
    document.getElementById('experience').value = experience;
    document.getElementById('education').value = education;
    document.getElementById('skills').value = skills;
    alert('Changes saved successfully!');
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
// Add event listener to the "Save Changes" button
document.getElementById('save-changes').addEventListener('click', saveChanges);
// Function to download the resume content as a PDF file
function downloadPDF() {
    // Ensure the element exists
    var resumeContent = document.getElementById('resume-section');
    if (!resumeContent) {
        console.error('Error: The resume content element does not exist.');
        alert('Failed to download the PDF. The resume content is missing.');
        return;
    }
    // Attempt to convert HTML to PDF
    try {
        html2pdf().from(resumeContent).set({
            margin: 1,
            filename: 'MyResume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        }).save();
    }
    catch (error) {
        console.error('Failed to generate PDF:', error);
        alert('An error occurred while generating the PDF.');
    }
}
// all field are required
// Function to check if all fields are filled
function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    var form = document.getElementById('form-section');
    var inputs = form.querySelectorAll('input');
    var allFieldsFilled = true;
    // Check if all input fields are filled
    inputs.forEach(function (input) {
        if (input.value.trim() === '') {
            allFieldsFilled = false;
        }
    });
    // If any field is empty, show alert
    if (!allFieldsFilled) {
        alert('All fields are required.');
    }
    else {
        console.log('Form is valid. Proceed with generating the resume.');
        // Add resume generation logic here
    }
}
// Attach the validation function to the form's submit event
var form = document.getElementById('form-section');
if (form) {
    form.addEventListener('submit', validateForm);
}
