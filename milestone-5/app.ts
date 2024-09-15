




// Function to toggle sections visibility
function toggleSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.toggle('hidden');
    }
}

// Function to handle image upload and preview
function handleImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.getElementById('resume-pic') as HTMLImageElement;
            imgElement.src = e.target?.result as string;
            imgElement.classList.remove('hidden');  // Show the image when uploaded
        };
        reader.readAsDataURL(file);
    }
}

// Function to handle resume generation
function generateResume() {
    const fullName = (document.getElementById('full-name') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phoneNumber = (document.getElementById('phone-number') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    //Shareable link //

    // Populate the resume section
    (document.getElementById('resume-name')!).innerText = fullName;
    (document.getElementById('resume-job-title')!).innerText = jobTitle;
    (document.getElementById('resume-email')!).innerText = email;
    (document.getElementById('resume-phone')!).innerText = phoneNumber;
    (document.getElementById('resume-address')!).innerText = address;
    (document.getElementById('resume-experience')!).innerText = experience;
    (document.getElementById('resume-education')!).innerText = education;
    (document.getElementById('resume-skills')!).innerText = skills;

    // Display the resume section
    const resumeSection = document.getElementById('resume-section')!;
    resumeSection.classList.remove('hidden');

    // Show the "Save Changes" button
    const saveButton = document.getElementById('save-changes')!;
    saveButton.classList.remove('hidden');
}

// Function to save edited changes from the contenteditable fields
function saveChanges() {
    const fullName = document.getElementById('resume-name')!.innerText;
    const jobTitle = document.getElementById('resume-job-title')!.innerText;
    const email = document.getElementById('resume-email')!.innerText;
    const phoneNumber = document.getElementById('resume-phone')!.innerText;
    const address = document.getElementById('resume-address')!.innerText;
    const experience = document.getElementById('resume-experience')!.innerText;
    const education = document.getElementById('resume-education')!.innerText;
    const skills = document.getElementById('resume-skills')!.innerText;

    // Update the form inputs with edited content (optional if needed for further actions)
    (document.getElementById('full-name') as HTMLInputElement).value = fullName;
    (document.getElementById('job-title') as HTMLInputElement).value = jobTitle;
    (document.getElementById('email') as HTMLInputElement).value = email;
    (document.getElementById('phone-number') as HTMLInputElement).value = phoneNumber;
    (document.getElementById('address') as HTMLInputElement).value = address;
    (document.getElementById('experience') as HTMLTextAreaElement).value = experience;
    (document.getElementById('education') as HTMLTextAreaElement).value = education;
    (document.getElementById('skills') as HTMLTextAreaElement).value = skills;

    alert('Changes saved successfully!');
}

// Add event listener to the toggle buttons
document.getElementById('toggle-personal-info')!.addEventListener('click', () => toggleSection('personal-info-section'));
document.getElementById('toggle-experience')!.addEventListener('click', () => toggleSection('experience-section'));
document.getElementById('toggle-education')!.addEventListener('click', () => toggleSection('education-section'));
document.getElementById('toggle-skills')!.addEventListener('click', () => toggleSection('skills-section'));

// Add event listener to the profile picture upload
document.getElementById('profile-pic')!.addEventListener('change', handleImageUpload);

// Add event listener to the "Generate Resume" button
document.getElementById('generate-resume')!.addEventListener('click', generateResume);

// Add event listener to the "Save Changes" button
document.getElementById('save-changes')!.addEventListener('click', saveChanges);


// ....................................................

// Declaration to inform TypeScript about the html2pdf library
declare var html2pdf: any;

// Function to download the resume content as a PDF file
function downloadPDF() {
  // Ensure the element exists
  const resumeContent = document.getElementById('resume-section');
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
  } catch (error) {
    console.error('Failed to generate PDF:', error);
    alert('An error occurred while generating the PDF.');
  }
}
 



// all field are required

// Function to check if all fields are filled
function validateForm(event: Event) {
    event.preventDefault();  // Prevent form submission

    const form = document.getElementById('form-section') as HTMLFormElement;
    const inputs = form.querySelectorAll('input');

    let allFieldsFilled = true;

    // Check if all input fields are filled
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allFieldsFilled = false;
        }
    });

    // If any field is empty, show alert
    if (!allFieldsFilled) {
        alert('All fields are required.');
    } else {
        console.log('Form is valid. Proceed with generating the resume.');
        // Add resume generation logic here
    }
}

// Attach the validation function to the form's submit event
const form = document.getElementById('form-section');
if (form) {
    form.addEventListener('submit', validateForm);
}

  