# Intelligent Theft Podcast Website

A static landing page for the Intelligent Theft Podcast with email signup functionality.

## Features

- Dark themed, minimalist design
- Responsive layout (mobile & desktop)
- Email signup form with validation
- Toast notifications for user feedback
- LocalStorage-based email collection
- No backend required - perfect for GitHub Pages

## Files

- `index.html` - Main HTML structure
- `styles.css` - All styling and responsive design
- `script.js` - Form handling and toast notifications

## Local Development

Simply open `index.html` in your web browser. No build process or server required.

## Deploying to GitHub Pages

### Option 1: Deploy from Repository Root

1. Create a new GitHub repository
2. Push these files to the repository:
   ```bash
   git init
   git add index.html styles.css script.js README.md
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. Go to your repository on GitHub
4. Navigate to Settings → Pages
5. Under "Source", select "Deploy from a branch"
6. Select the `main` branch and `/ (root)` folder
7. Click Save
8. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Option 2: Quick Deploy with GitHub Desktop

1. Open GitHub Desktop
2. File → Add Local Repository → Select this folder
3. Create a new repository on GitHub
4. Commit and push the files
5. Follow steps 3-8 from Option 1

## Email Collection

Since this is a static site, emails are stored in the browser's `localStorage`. This is suitable for a simple landing page, but for production use, you should:

1. Use a form service like [Formspree](https://formspree.io/) or [FormKeep](https://formkeep.com/)
2. Set up a serverless function (e.g., Netlify Functions, Vercel Functions)
3. Integrate with an email service (e.g., Mailchimp, ConvertKit)

To view collected emails in the browser console:
```javascript
JSON.parse(localStorage.getItem('signups'))
```

## Customization

### Colors
Edit the CSS variables in `styles.css`:
- Background: `#000000`
- Text: `#ffffff`
- Accent/Primary: `#3b82f6`
- Muted text: `#a1a1aa`

### Content
Edit the text directly in `index.html` within the semantic HTML structure.

### Fonts
Currently using Inter from Google Fonts. Change the font by updating the link in `index.html` and the font-family in `styles.css`.

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT
