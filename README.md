# Portfolio Website - Amany Elsayed

A modern, responsive personal portfolio website showcasing my professional experience, skills, projects, and contact information. Built with vanilla HTML, CSS, and JavaScript for optimal performance and simplicity.

## Features

- **Fully Responsive Design**: Seamlessly adapts to desktop, tablet, and mobile devices with optimized layouts for each screen size
- **Smooth Animations**: Engaging fade-in, slide-in, and hover animations throughout the site
- **Interactive Navigation**: 
  - Smooth scrolling between sections
  - Hamburger menu for mobile/tablet devices
  - Sticky navigation bar
- **Professional Sections**:
  - **Profile**: Introduction with profile picture, title, CV download, and social media links
  - **About**: Experience timeline, education, and personal introduction
  - **Experience**: Comprehensive skills showcase across:
    - Frontend Development (HTML, CSS, JavaScript, TypeScript)
    - Backend Development (Express.js, Node.js, Git, MongoDB)
    - Graphic Design (Figma, Photoshop, Canva)
    - Additional Experiences (Microsoft Office, Software, Hardware)
  - **Projects**: Portfolio of recent work with GitHub links
  - **Contact**: Direct email and LinkedIn contact information
- **Modern UI/UX**: 
  - Dark theme with blue accent colors
  - Smooth transitions and hover effects
  - Clean, minimalist design
  - Accessible and user-friendly

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: 
  - Flexbox for layout
  - CSS Grid (where applicable)
  - CSS Custom Properties (CSS Variables)
  - Media queries for responsive design
  - Smooth animations and transitions
- **JavaScript (Vanilla)**: 
  - Interactive hamburger menu toggle
  - Smooth scrolling navigation
  - Intersection Observer API for scroll animations
  - Parallax effects
- **Google Fonts**: Poppins font family

## Project Structure

```
Portfolio-Basic/
├── assets/
│   ├── Amany Elsayed.pdf          # Resume/CV
│   ├── profile-pic.png            # Profile picture
│   ├── project-1.png              # Project screenshots
│   ├── project-2.png
│   ├── project-3.png
│   ├── arrow.png                  # Navigation arrow icons
│   ├── checkmark.png              # Skill checkmark icons
│   ├── education.png              # Education section icon
│   ├── experience.png             # Experience section icon
│   ├── email.png                  # Email icon
│   ├── github.png                 # GitHub icon
│   └── linkedin.png               # LinkedIn icon
├── index.html                     # Main HTML file
├── style.css                      # Main stylesheet
├── media.css                      # Responsive media queries
├── script.js                      # JavaScript functionality
└── README.md                      # This file
```

## Getting Started

### Prerequisites

No dependencies required! Just a modern web browser.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Portfolio-Basic
   ```

2. Open `index.html` in your web browser

That's it! No build process or package installation needed.

### Local Development Server (Recommended)

For the best experience, use a local development server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (with http-server):**
```bash
npx http-server -p 8000
```

**Using VS Code:**
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

Then navigate to `http://localhost:8000` in your browser.

## Responsive Breakpoints

- **Desktop**: > 1200px
- **Tablet**: 601px - 1200px
- **Mobile**: ≤ 600px

The design includes specific optimizations for each breakpoint to ensure optimal viewing experience across all devices.

## Customization

### Personal Information

Update the following sections in `index.html`:

1. **Profile Section** (lines 40-57):
   - Name and title
   - Profile picture path
   - Resume/CV PDF path
   - Social media links (LinkedIn, GitHub)

2. **About Section** (lines 59-87):
   - Experience details and years
   - Education information
   - Personal introduction text

3. **Experience Section** (lines 89-214):
   - Skills and proficiency levels
   - Technologies and tools
   - Add or remove skill categories

4. **Projects Section** (lines 217-251):
   - Project images
   - Project titles and descriptions
   - GitHub and live demo links

5. **Contact Section** (lines 254-266):
   - Email address
   - LinkedIn profile link

### Styling

Customize the appearance in `style.css`:

- **Colors**: Modify CSS variables in `:root` (lines 3-19):
  ```css
  :root {
      --dark-blue: #1a2332;
      --light-blue: #4a90e2;
      /* ... other colors */
  }
  ```
- **Fonts**: Change the Google Fonts import (line 1)
- **Spacing & Layout**: Adjust margins, padding, and sizing throughout the CSS files
- **Animations**: Modify animation durations and effects in the keyframes sections

### Images

Replace images in the `assets` folder:
- `profile-pic.png`: Your profile picture (recommended: 400x400px, square)
- `project-1.png`, `project-2.png`, `project-3.png`: Project screenshots
- `Amany Elsayed.pdf`: Your resume/CV

## Key Features Implementation

### Hamburger Menu
- Hidden by default on mobile/tablet
- Toggleable menu with smooth animations
- Auto-closes when a navigation link is clicked

### Smooth Scrolling
- Native smooth scroll behavior
- Intersection Observer for scroll-triggered animations
- Parallax effect on profile section

### Responsive Design
- Flexible layouts using Flexbox
- Mobile-first approach
- Optimized typography for each breakpoint
- Touch-friendly interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)


## Author

**Amany Elsayed**
- Full Stack Developer
- LinkedIn: [amany-elsayed0](https://www.linkedin.com/in/amany-elsayed0/)
- GitHub: [Amany-Elsayed](https://github.com/Amany-Elsayed)

## Contact

For inquiries or collaborations, please reach out via:
- Email: [amanyelsayed0@outlook.com](mailto:amanyelsayed0@outlook.com)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/amany-elsayed0/)

---

**Note**: This is a personal portfolio project. All content, images, and information reflect my personal professional journey and work.
