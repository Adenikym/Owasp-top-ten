export default [
    {id:1,name:'A01:2021 – Broken Access Control', description:'Access control enforces policy such that users cannot act outside of their intended permissions.', occurences:'318,487',maxCoverage:'94.55',prevention:[]},
    {id:2,name:'A02:2021 – Cryptographic Failures', description:'The first thing is to determine the protection needs of data in transit and at rest. For example, passwords, credit card numbers, health records, personal information, and business secrets require extra protection, mainly if that data falls under privacy laws, e.g., EU\'s General Data Protection Regulation (GDPR), or regulations, e.g., financial data protection such as PCI Data Security Standard (PCI DSS).', occurences:'233,788',maxCoverage:'79.33',prevention:[]},
    {id:3,name:'A03:2021 – Injection', description:"An application is vulnerable to attack when:User-supplied data is not validated, filtered, or sanitized by the application.Dynamic queries or non-parameterized calls without context-aware escaping are used directly in the interpreter.", occurences:'274,228',maxCoverage:'94.4',prevention:[]},
    {id:4,name:'A04:2021 – Insecure Design', description:'risks related to design flaws', occurences:'262,407',maxCoverage:'77.25',prevention:[]},
    {id:5,name:'A05:2021 – Security Misconfiguration', description:'Without a concerted, repeatable application security configuration process, systems are at a higher risk.', occurences:'208,387',maxCoverage:'89.58',prevention:[]},
    {id:6,name:'A06:2021 – Vulnerable and Outdated Components', description:'Vulnerable Components are a known issue that we struggle to test and assess risk and is the only category to not have any Common Vulnerability and Exposures (CVEs) mapped to the included CWEs, so a default exploits/impact weight of 5.0 is used', occurences:'30,457',maxCoverage:'51.78',prevention:[]},
    {id:7,name:'A07:2021 – Identification and Authentication Failures', description:'Confirmation of the user\'s identity, authentication, and session management is critical to protect against authentication-related attacks. ', occurences:'132,195',maxCoverage:'79.51'},
    {id:8,name:'A08:2021 – Software and Data Integrity Failures', description:'Software and data integrity failures relate to code and infrastructure that does not protect against integrity violations.', occurences:'47,972',maxCoverage:'75.04',prevention:[]},
    {id:9,name:'A09:2021 – Security Logging and Monitoring Failures', description:'Returning to the OWASP Top 10 2021, this category is to help detect, escalate, and respond to active breaches. Without logging and monitoring, breaches cannot be detected. ', occurences:'53,615',maxCoverage:'53.67',prevention:[]},
    {id:10,name:'A10:2021 – Server-Side Request Forgery (SSRF)', description:'SSRF flaws occur whenever a web application is fetching a remote resource without validating the user-supplied URL.', occurences:'9,503',maxCoverage:'67.72',prevention:[]},

]