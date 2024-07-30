// tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// download resume

function downloadPDF() {
    const link = document.createElement('a');
    link.href = './assets/pdfs/kislayRaj_resume_webDeveloper _1yr_exp.pdf';  // Replace with the path to your PDF
    link.download = 'kislayRaj_resume_webDeveloper _1yr_exp';               // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-bs-theme');
    
    if (currentTheme === 'dark') {
      body.setAttribute('data-bs-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      body.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // Function to set the theme on initial load
  function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.setAttribute('data-bs-theme', savedTheme);
    } else {
      document.body.setAttribute('data-bs-theme', 'dark');
    }
  }
  
  // Event listener for the toggle switch
  document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('theme-toggle');
    
    // Set the initial theme based on the saved preference
    setInitialTheme();
  
    // Add an event listener to the toggle switch
    toggleSwitch.addEventListener('change', toggleDarkMode);
  });
  