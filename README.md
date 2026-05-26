# Kirsty Mueni - Portfolio Website

This repository hosts the source code for Kirsty Mueni's personal portfolio website, showcasing expertise in IT & Systems Support, Cybersecurity, Digital Literacy & EdTech, STEM & Innovation, Networking Fundamentals, and Development.

## About Kirsty Mueni

Kirsty Mueni specializes in the convergence of IT Support, Cybersecurity, and EdTech. With a strong foundation in technical support and a Cisco Ethical Hacking certification, Kirsty brings a security-first mindset to every project, focusing on robust system hardening alongside seamless user experience. A passionate advocate for EdTech, STEM education, and Digital Literacy, Kirsty is dedicated to leveraging technology to enhance learning access, foster digital skills development, and drive innovation in educational systems.

## Technologies Used

- **HTML5:** For semantic and structured web content.
- **CSS3:** For styling, layout, and responsive design.
- **JavaScript:** For interactive elements and dynamic content.
- **Lightbox2:** For image gallery functionality and lightbox effects.
- **Git & GitHub:** For version control and collaborative development.

## Project Highlights

The portfolio features a comprehensive gallery of projects and certifications, including:

- **Professional Certifications:** Cisco Certified Ethical Hacker credentials validating expertise in security and network defense.
- **Cybersecurity:** Hands-on experience in vulnerability identification, threat mitigation, and system hardening.
- **Networking Support:** Enterprise connectivity design, infrastructure management, and network troubleshooting.
- **AV System Integration:** Implementation of high-impact audio-visual solutions for enterprise organizations.
- **Development:** Web development, scripting, and automation solutions.
- **Digital Literacy:** Workshops and training modules bridging the digital divide in educational and corporate spaces.
- **EdTech & STEM Advocacy:** Technology-driven education systems and STEM initiatives fostering innovation in learning.

## Features

### Interactive Project Gallery
- **Image Titles:** Hover over project images to see descriptive titles.
- **Multi-Image Galleries:** Click "View Images" to browse through collections of project photos using Lightbox.
- **Smooth Animations:** Enjoy smooth hover effects and transitions throughout the site.

### Detailed Projects Section
- **Interactive Tabs:** Click project buttons to view detailed information about each area of expertise.
- **Comprehensive Content:** Each project includes overview, key competencies, methodologies, and relevant tags.
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.

### Professional Features
- **Dark/Light Mode Toggle:** Switch between themes for comfortable viewing.
- **Testimonials Section:** Social proof from colleagues and clients.
- **Blog/Insights:** Share your knowledge and expertise.
- **Contact Form:** Professional way for visitors to reach out.
- **Certificates Section:** Display your professional certifications and credentials.

### Responsive Design
- **Mobile-First Approach:** The portfolio is fully responsive and works seamlessly on all device sizes.
- **Touch-Friendly:** Optimized for touch interactions on mobile and tablet devices.
- **Cross-Browser Compatible:** Works on Chrome, Firefox, Safari, and Edge.

## Live Demo

Explore the live portfolio here: [kirstymueni.github.io](https://kirstymueni.github.io/)

## Setup and Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KirstyMueni/kirstymueni.github.io.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd kirstymueni.github.io
   ```

3. **Open `index.html`:**
   Simply open the `index.html` file in your web browser to view the portfolio. No build tools or server setup required!

## Project Structure

```
kirstymueni.github.io/
├── index.html              # Main HTML file
├── style.css               # Complete stylesheet
├── script.js               # JavaScript for interactivity
├── README.md               # This file
├── kirsty-mueni-cv.pdf     # Downloadable CV
├── images/                 # Image assets
│   ├── headshot.jpg
│   ├── cisco-ethical-hacker-cert.png
│   ├── avsetup.jpg
│   ├── training.jpeg
│   └── ...
└── assets/                 # Additional assets
    ├── cyber-security.jpg
    ├── networking.jpg
    ├── edtech-stem.jpg
    └── ...
```

## Customization Guide

### Adding More Images to Project Galleries

To add multiple images to a project gallery:

1. Place your images in the `images/` or `assets/` folder.
2. In `index.html`, find the project section you want to update.
3. Add hidden links with the same `data-lightbox` value:

```html
<!-- Main visible button -->
<a href="assets/cyber-security.jpg" data-lightbox="cybersecurity" data-title="Cybersecurity - Threat Analysis" class="btn-small">View Images</a>

<!-- Hidden gallery images -->
<a href="assets/cyber-security-2.jpg" data-lightbox="cybersecurity" data-title="Cybersecurity - Vulnerability Scan" style="display: none;"></a>
<a href="assets/cyber-security-3.jpg" data-lightbox="cybersecurity" data-title="Cybersecurity - Security Dashboard" style="display: none;"></a>
```

### Changing Colors

To customize the color scheme, edit the CSS variables in `style.css`:

```css
:root {
  --bg-dark: #0f172a;        /* Background color */
  --accent: #00bcd4;         /* Primary accent color (cyan) */
  --accent-hover: #38bdf8;   /* Hover accent color */
  --text-main: #e2e8f0;      /* Main text color */
  --text-dim: #94a3b8;       /* Dimmed text color */
}
```

### Updating Project Details

To modify project information:

1. Edit the content in the "Detailed Projects" section in `index.html`.
2. Update the project descriptions, competencies, and tags as needed.
3. Save and refresh your browser to see the changes.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile).

## Performance Optimization

The portfolio is optimized for performance:

- **Lightweight:** Minimal dependencies, fast load times.
- **Responsive Images:** Images are optimized for different screen sizes.
- **Smooth Animations:** CSS transitions and animations are GPU-accelerated.
- **Accessibility:** Semantic HTML and ARIA labels for screen readers.

## Contact

Feel free to connect with Kirsty Mueni for collaboration, networking, or professional opportunities:

- **LinkedIn:** [linkedin.com/in/kirstymueni](https://linkedin.com/in/kirstymueni)
- **Email:** [kirstymueni@gmail.com](mailto:kirstymueni@gmail.com)
- **GitHub:** [github.com/kirstymueni](https://github.com/kirstymueni)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! If you have suggestions for improvements or find any issues, please feel free to open an issue or submit a pull request.

## Acknowledgments

- **Lightbox2:** For the beautiful image gallery functionality.
- **Google Fonts:** For typography.
- **Inspiration:** Built with passion for showcasing expertise in IT, Cybersecurity, and EdTech.

---

**Last Updated:** May 2026

For more information or to discuss collaboration opportunities, please reach out through the contact information above.
