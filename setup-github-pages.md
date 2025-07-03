# 📋 GitHub Pages Setup Guide

Follow these steps to get your portfolio website live on GitHub Pages:

## 🚀 Step 1: Enable GitHub Pages

1. **Go to your repository on GitHub**
   - Navigate to `https://github.com/calvarezg/calvarezg.github.io`

2. **Access Repository Settings**
   - Click on the "Settings" tab (next to "Insights")

3. **Find the Pages Section**
   - Scroll down to the "Pages" section in the left sidebar
   - Click on "Pages"

4. **Configure Source**
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch
   - Select "/ (root)" folder
   - Click "Save"

5. **Wait for Deployment**
   - GitHub will show a message: "Your site is ready to be published at https://calvarezg.github.io"
   - It may take a few minutes for the site to become available

## 🎯 Step 2: Verify Your Site

1. **Check the URL**
   - Your site will be available at: `https://calvarezg.github.io`
   - It might take 5-10 minutes for the first deployment

2. **Test on Different Devices**
   - Desktop browser
   - Mobile phone
   - Tablet

## 📝 Step 3: Customize Your Content

1. **Update Personal Information**
   - Edit `index.html` with your details from LinkedIn
   - Replace placeholder text with your actual information
   - Update contact information and social links

2. **Add Your Profile Photo**
   - Create an `assets` folder in your repository
   - Upload your professional photo as `profile-photo.jpg`
   - Update the HTML to use your photo instead of the icon

3. **Add Project Images**
   - Upload screenshots of your projects to `assets/projects/`
   - Update the project cards with actual project information

## 🔄 Step 4: Update and Deploy

1. **Make Changes Locally**
   ```bash
   # Edit files
   # Test locally by opening index.html in browser
   ```

2. **Commit and Push Changes**
   ```bash
   git add .
   git commit -m "Update portfolio with personal information"
   git push origin main
   ```

3. **Wait for Auto-Deployment**
   - GitHub Pages will automatically update your site
   - Changes typically appear within 1-2 minutes

## 🛠️ Step 5: Optional Enhancements

### Add Custom Domain (Optional)
1. **Purchase a domain** (e.g., `yourname.com`)
2. **In GitHub Pages settings**, add your custom domain
3. **Update DNS records** with your domain provider

### Add Analytics (Optional)
1. **Create Google Analytics account**
2. **Add tracking code** to your `index.html`
3. **Monitor visitor statistics**

### Add Blog Section (Optional)
1. **Create a `/blog` folder**
2. **Add blog post HTML files**
3. **Update navigation** to include blog link

## 🎨 Customization Checklist

- [ ] Update name and professional title
- [ ] Add your profile photo
- [ ] Update about section with your background
- [ ] List your actual skills and technologies
- [ ] Add your work experience from LinkedIn
- [ ] Include your real projects with links
- [ ] Update contact information
- [ ] Test all links and forms
- [ ] Verify responsive design on mobile

## 🚨 Common Issues & Solutions

### Site Not Loading
- **Wait 10-15 minutes** for first deployment
- **Check GitHub Pages settings** are configured correctly
- **Verify main branch** has your files

### Changes Not Showing
- **Clear browser cache** (Ctrl+F5 or Cmd+Shift+R)
- **Check commit history** to ensure changes were pushed
- **Wait a few minutes** for GitHub to rebuild the site

### Mobile Display Issues
- **Test on actual devices** or use browser dev tools
- **Check viewport meta tag** is present in HTML
- **Verify responsive CSS** is working correctly

## 📞 Need Help?

If you encounter any issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the [CUSTOMIZE.md](CUSTOMIZE.md) file
3. Open an issue in your repository
4. Contact through LinkedIn for personalized help

---

**Your portfolio will be live at: `https://calvarezg.github.io`**

🎉 **Congratulations! Your professional portfolio is now live on the web!** 