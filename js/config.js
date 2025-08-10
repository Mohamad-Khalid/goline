
// Global configuration object
const APP_CONFIG = {
    companyName: "GO-LINE",
    companyEmail: "company@example.com",
    companyPhone: "+1 (555) 123-4567",
    defaultTheme: "light", // 'light' or 'dark'
    colors: {
        primary: "#3498db",  // Blue
        secondary: "#2ecc71", // Green
        text: "#333333",
        background: "#ffffff"
    },
    socialLinks: {
        facebook: "https://facebook.com/example",
        twitter: "https://twitter.com/example",
        instagram: "https://instagram.com/example",
        linkedin: "https://linkedin.com/company/example"
    },
    about:"",
    vision:"",
    mission:""
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
    module.exports = APP_CONFIG; // For Node.js
} else {
    window.APP_CONFIG = APP_CONFIG; // For browser
}
