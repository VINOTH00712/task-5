
console.log("Personal Information:");
for (const key in resumeData.resume.personalInformation) {
  console.log(`${key}: ${resumeData.resume.personalInformation[key]}`);
}


console.log("\nEducation:");
for (const educationItem of resumeData.resume.education) {
  console.log(`${educationItem.degree} - ${educationItem.school} (${educationItem.graduationYear})`);
}

console.log("\nLanguages:");
resumeData.resume.languages.forEach((language) => {
  console.log(`${language.language} - Proficiency: ${language.proficiency}`);
});