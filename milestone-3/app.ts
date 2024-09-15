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
