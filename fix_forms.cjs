const fs = require('fs');

let content = fs.readFileSync('src/components/ContactPage.tsx', 'utf-8');

// The sed command changed all labels to contact-name. Let's fix them manually.
content = content.replace(/<label htmlFor="contact-name" (.*?)>\s*Your Full Name \*\s*<\/label>/, '<label htmlFor="name" $1>\n                        Your Full Name *\n                      </label>');
content = content.replace(/<label htmlFor="contact-name" (.*?)>\s*Email Address \*\s*<\/label>/, '<label htmlFor="email" $1>\n                        Email Address *\n                      </label>');
content = content.replace(/<label htmlFor="contact-name" (.*?)>\s*Phone Number \(Optional\)\s*<\/label>/, '<label htmlFor="phone" $1>\n                        Phone Number (Optional)\n                      </label>');
content = content.replace(/<label htmlFor="contact-name" (.*?)>\s*Company \/ Organization \*\s*<\/label>/, '<label htmlFor="company" $1>\n                        Company / Organization *\n                      </label>');
content = content.replace(/<label htmlFor="contact-name" (.*?)>\s*Inquiry Type \*\s*<\/label>/, '<label htmlFor="type" $1>\n                        Inquiry Type *\n                      </label>');
content = content.replace(/<label htmlFor="contact-name" (.*?)>\s*Message \*\s*<\/label>/, '<label htmlFor="message" $1>\n                        Message *\n                      </label>');

content = content.replace(/value={contactForm\.name}/, 'id="name"\n                        value={contactForm.name}');
content = content.replace(/value={contactForm\.email}/, 'id="email"\n                        value={contactForm.email}');
content = content.replace(/value={contactForm\.phone}/, 'id="phone"\n                        value={contactForm.phone}');
content = content.replace(/value={contactForm\.company}/, 'id="company"\n                        value={contactForm.company}');
content = content.replace(/value={contactForm\.type}/, 'id="type"\n                        value={contactForm.type}');
content = content.replace(/value={contactForm\.message}/, 'id="message"\n                        value={contactForm.message}');

fs.writeFileSync('src/components/ContactPage.tsx', content);

