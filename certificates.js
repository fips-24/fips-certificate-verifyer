// Certificate Database Configuration
// Add your certificates here and include this file in your HTML

const CERTIFICATE_DATABASE = [
    {
        code: "FIPS-WB01-FBCDED",
        name: "OSEI BROBBEY ISAAC",
        email: "isaacbrobbey65@gmail.com",
        issueDate: "Jul 15, 2025",
        event: "FIPS webinar",
        issuer: "Festari Institute",
        validUntil: "Jul 15, 2026",
        certificateType: "Attendance",
        status: "active"
    },
    {
        code: "FEST-2025-ABC123",
        name: "SAMPLE USER",
        email: "sample@example.com",
        issueDate: "Jan 10, 2025",
        event: "Professional Development Course",
        issuer: "Festari Institute",
        validUntil: "Jan 10, 2027",
        certificateType: "Completion",
        status: "active"
    },
    {
        code: "FEST-2025-XYZ789",
        name: "JOHN DOE",
        email: "john.doe@email.com",
        issueDate: "Feb 20, 2025",
        event: "Leadership Training Workshop",
        issuer: "Festari Institute",
        validUntil: "Feb 20, 2028",
        certificateType: "Achievement",
        status: "active"
    }
    // Add more certificates following the same format
];

// Certificate validation function
function validateCertificateData(cert) {
    const required = ['code', 'name', 'email', 'issueDate', 'event', 'issuer'];
    return required.every(field => cert[field] && cert[field].trim() !== '');
}

// Get certificate by code
function findCertificate(code) {
    return CERTIFICATE_DATABASE.find(cert => 
        cert.code.toLowerCase() === code.toLowerCase() && 
        cert.status === 'active'
    );
}

// Certificate statistics
function getCertificateStats() {
    return {
        total: CERTIFICATE_DATABASE.length,
        active: CERTIFICATE_DATABASE.filter(cert => cert.status === 'active').length,
        types: [...new Set(CERTIFICATE_DATABASE.map(cert => cert.certificateType))],
        events: [...new Set(CERTIFICATE_DATABASE.map(cert => cert.event))]
    };
}

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CERTIFICATE_DATABASE,
        findCertificate,
        validateCertificateData,
        getCertificateStats
    };
}