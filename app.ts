// Add TypeScript types for better development experience
interface Resume {
    name: string;
    email: string;
    phone: string;
    address: string;
    skills: string[];
    education: string;
}

function generateResume(): void {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills-input') as HTMLTextAreaElement)
        .value.split(',')
        .map(skill => skill.trim());
    const education = (document.getElementById('education-input') as HTMLTextAreaElement).value;

    const resume: Resume = { name, email, phone, address, skills, education };

    console.log('Generated Resume:', resume);
}

document.getElementById('generate-resume')?.addEventListener('click', generateResume);