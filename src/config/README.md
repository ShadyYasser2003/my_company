# Global Configuration Guide

## Overview

All text content, labels, colors, links, and customizable values for the SOF for Software website are centralized in `/config/global.tsx`. This makes it easy for developers and designers to update the website content without modifying component files.

## How to Use

### Editing Text Content

To change any text content on the website:

1. Open `/config/global.tsx`
2. Locate the section you want to modify (e.g., `home`, `about`, `contact`, etc.)
3. Update the value directly in the configuration object
4. Save the file - changes will reflect automatically

### Example: Changing Company Name

```typescript
company: {
  name: 'SOF for Software',          // Change this to your company name
  nameShort: 'SOF',                   // Change this to your short name
  tagline: 'Your new tagline here',  // Update your tagline
}
```

### Example: Updating Contact Information

```typescript
contact: {
  email: 'info@sofforsoftware.com',  // Update email
  phone: '+1 (555) 123-4567',        // Update phone
  address: '123 Tech Street...',      // Update address
  whatsapp: '+1234567890',           // Update WhatsApp number
}
```

### Example: Changing Social Media Links

```typescript
social: {
  facebook: 'https://facebook.com/yourpage',   // Add your Facebook URL
  twitter: 'https://twitter.com/yourhandle',   // Add your Twitter URL
  linkedin: 'https://linkedin.com/company/...',// Add your LinkedIn URL
  github: 'https://github.com/yourorg',        // Add your GitHub URL
}
```

### Example: Modifying Home Page Content

```typescript
home: {
  hero: {
    badge: 'Welcome to SOF for Software',      // Change welcome badge
    title: 'Transforming Ideas Into',           // Change main title
    titleHighlight: 'Intelligent Software',     // Change highlighted text
    description: 'Your new description...',     // Update description
    ctaPrimary: 'Start Your Project',          // Change button text
    ctaSecondary: 'View Portfolio',            // Change button text
  },
  stats: [
    { value: '500+', label: 'Projects Delivered' },  // Update stats
    { value: '50+', label: 'Global Clients' },
    { value: '99%', label: 'Client Satisfaction' },
  ],
}
```

## Configuration Sections

### 1. Company Information
- Company name and branding
- Taglines and descriptions

### 2. Contact Information
- Email, phone, address
- WhatsApp number for inquiries

### 3. Social Media Links
- Facebook, Twitter, LinkedIn, GitHub URLs

### 4. Navigation
- Navigation menu items
- Admin panel labels

### 5. Page Content
Each page has its own section:
- **Home**: Hero section, stats, features, CTA
- **About**: Mission, vision, values, team
- **Services**: Service listings and features
- **Portfolio**: Portfolio page content
- **Contact**: Contact form labels and options
- **Admin**: Admin dashboard labels and messages

### 6. Footer
- Footer description
- Quick links
- Services list
- Contact information

### 7. Colors & Theme
Customize the color scheme:
```typescript
colors: {
  primary: 'cyan-500',
  secondary: 'blue-600',
  accent: 'purple-500',
  // ... more colors
}
```

### 8. Animations
Adjust animation speeds:
```typescript
animations: {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.8,
  },
}
```

## Best Practices

1. **Keep it Simple**: Only edit the values, not the structure
2. **Use Consistent Terminology**: Keep labels consistent across pages
3. **Test Changes**: Always preview changes before deploying
4. **Backup**: Keep a backup of the original configuration
5. **Document Custom Changes**: Add comments for any custom modifications

## File Structure

The configuration object is organized hierarchically:

```
GLOBAL_CONFIG
├── company
├── contact
├── social
├── navigation
├── home
│   ├── hero
│   ├── stats
│   ├── whyChoose
│   └── cta
├── about
├── services
├── portfolio
├── contact
├── admin
│   ├── login
│   ├── dashboard
│   ├── categories
│   └── projects
├── footer
├── colors
└── animations
```

## Need Help?

If you need to modify something that isn't in the global configuration:
1. Check if it can be added to the configuration
2. Update the component to use the new config value
3. Document your changes

## Notes

- All components have been updated to use this global configuration
- Changes to the configuration file will reflect across the entire website
- No need to modify individual component files for text/content changes
- Color classes follow Tailwind CSS naming conventions
