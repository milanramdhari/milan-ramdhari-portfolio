# Personal Portfolio Website

A modern, responsive portfolio website to showcase your projects, skills, and experience.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Smooth scrolling, hover effects, and form validation
- **Contact Form**: Functional contact form with validation
- **Skills Showcase**: Animated skill bars and technology icons
- **Project Gallery**: Beautiful project cards with overlay effects
- **SEO Friendly**: Semantic HTML structure and proper meta tags

## Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and responsive design
├── script.js           # JavaScript functionality and interactions
├── README.md           # This file
│
└── assets/             # All media files
    ├── images/         # Photos and graphics
    ├── docs/           # Documents (resume, etc.)
    └── icons/          # Custom icons
```

## Getting Started

1. **Customize Content**: 
   - Replace "Your Name" with your actual name in `index.html`
   - Update the email, phone, and location in the contact section
   - Add your social media links

2. **Add Your Images**:
   - Replace `assets/profile-placeholder.jpg` with your profile picture
   - Replace `assets/project1-placeholder.jpg`, `assets/project2-placeholder.jpg`, `assets/project3-placeholder.jpg` with your project screenshots

3. **Update Projects**:
   - Modify the project descriptions, technologies used, and links
   - Add more project cards as needed

4. **Personalize Skills**:
   - Update the skills section with your actual technologies and proficiency levels
   - Adjust the skill bar percentages in the JavaScript

5. **Add Your Resume**:
   - Place your resume PDF in `assets/docs/`
   - Add a download link in the about section

## Customization

### Colors
The main color scheme uses CSS custom properties. You can change the primary colors by modifying the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #8b5cf6;
    --text-color: #1e293b;
}
```

### Sections
You can add or remove sections by:
1. Adding/removing the HTML section in `index.html`
2. Adding/removing the corresponding navigation link
3. Adding appropriate CSS styles if needed

### Typography
The portfolio uses the Inter font from Google Fonts. You can change this by updating the font import in the HTML head and the CSS font-family property.

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Optimize Images**: 
   - Use WebP format for better compression
   - Compress images before uploading
   - Use appropriate image sizes (don't use 4K images for thumbnails)

2. **Loading Speed**:
   - The site uses minimal external dependencies
   - CSS and JS are optimized for performance
   - Consider using a CDN for faster global loading

## Deployment

You can deploy this portfolio to any static hosting service:

- **GitHub Pages**: Perfect for free hosting
- **Netlify**: Great for continuous deployment
- **Vercel**: Excellent performance and easy setup
- **Traditional Web Hosting**: Works with any standard web hosting

### Quick Deploy to GitHub Pages

1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source as "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Your site will be available at `https://yourusername.github.io/repository-name`

## Maintenance

- Regularly update your projects section with new work
- Keep your skills section current with new technologies you learn
- Update your contact information as needed
- Consider adding a blog section for ongoing content

## License

Feel free to use this template for your own portfolio. No attribution required, but appreciated!

## Support

If you encounter any issues or have questions about customization, feel free to reach out!

---

**Happy coding!** 🚀
