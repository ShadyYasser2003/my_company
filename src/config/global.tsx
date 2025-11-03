/**
 * GLOBAL CONFIGURATION FILE
 * 
 * This file contains all text content, labels, colors, links, and other customizable
 * values used throughout the website. Developers and designers can easily edit these
 * values without modifying component files.
 * 
 * IMPORTANT: Only edit the values in this file. Do not modify the structure.
 */

export const GLOBAL_CONFIG = {
  // ============================================
  // COMPANY INFORMATION
  // ============================================
  company: {
    name: 'SOF for Software',
    nameShort: 'SOF',
    tagline: 'Transforming ideas into intelligent software solutions. Building the future, one line of code at a time.',
    description: 'We build cutting-edge web, mobile, and AI solutions that power businesses globally. Your vision, our expertise.',
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    email: 'shadyyasser665@gmail.com',
    phone: '+20 122-511-9842',
    address: '123 Tech Street, Innovation City, IC 12345',
    whatsapp: '+201225119842', // WhatsApp number (without + or spaces)
  },

  // ============================================
  // SOCIAL MEDIA LINKS
  // ============================================
  social: {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    github: '#',
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/services', label: 'Services' },
      { path: '/portfolio', label: 'Portfolio' },
      { path: '/contact', label: 'Contact' },
    ],
    adminLabel: 'Admin',
    adminDashboardLabel: 'Admin Dashboard',
  },

  // ============================================
  // HOME PAGE
  // ============================================
  home: {
    hero: {
      badge: 'Welcome to SOF for Software',
      title: 'Transforming Ideas Into',
      titleHighlight: 'Intelligent Software',
      description: 'We build cutting-edge web, mobile, and AI solutions that power businesses globally. Your vision, our expertise.',
      ctaPrimary: 'Start Your Project',
      ctaSecondary: 'View Portfolio',
    },
    stats: [
      { value: '500+', label: 'Projects Delivered' },
      { value: '50+', label: 'Global Clients' },
      { value: '99%', label: 'Client Satisfaction' },
    ],
    whyChoose: {
      title: 'Why Choose SOF?',
      description: 'We combine innovation, reliability, and scalability to deliver exceptional results.',
      features: [
        {
          title: 'Innovation',
          description: 'Cutting-edge solutions using the latest technologies',
          color: 'cyan',
        },
        {
          title: 'Reliability',
          description: 'Rock-solid systems you can depend on',
          color: 'blue',
        },
        {
          title: 'Scalability',
          description: 'Built to grow with your business',
          color: 'purple',
        },
        {
          title: 'Speed',
          description: 'Fast delivery without compromising quality',
          color: 'green',
        },
      ],
    },
    cta: {
      title: 'Ready to Transform Your Ideas?',
      description: "Let's build something amazing together. Get in touch with our team today.",
      buttonText: 'Get Started Now',
    },
  },

  // ============================================
  // ABOUT PAGE
  // ============================================
  about: {
    hero: {
      title: 'About SOF for Software',
      description: 'A global technology company dedicated to transforming businesses through innovation.',
    },
    mission: {
      title: 'Our Mission',
      description: 'To empower businesses worldwide with cutting-edge software solutions that drive growth, efficiency, and innovation. We believe in turning complex challenges into simple, elegant solutions.',
    },
    vision: {
      title: 'Our Vision',
      description: 'To be the global leader in software innovation, recognized for our commitment to excellence, creativity, and transformative technology solutions.',
    },
    values: [
      {
        title: 'Innovation First',
        description: 'We constantly push boundaries and explore new technologies.',
      },
      {
        title: 'Client Success',
        description: 'Your success is our success. We are committed to delivering results.',
      },
      {
        title: 'Quality Excellence',
        description: 'We never compromise on quality and attention to detail.',
      },
      {
        title: 'Transparency',
        description: 'Open communication and honest collaboration at every step.',
      },
    ],
    team: {
      title: 'Meet Our Team',
      description: 'Talented professionals dedicated to your success.',
    },
  },

  // ============================================
  // SERVICES PAGE
  // ============================================
  services: {
    hero: {
      title: 'Our Services',
      description: 'Comprehensive technology solutions tailored to your business needs.',
    },
    list: [
      {
        title: 'Web Development',
        description: 'Custom web applications built with modern technologies.',
        features: [
          'Responsive Design',
          'Progressive Web Apps',
          'E-commerce Solutions',
          'CMS Development',
        ],
      },
      {
        title: 'Mobile Applications',
        description: 'Native and cross-platform mobile apps for iOS and Android.',
        features: [
          'iOS Development',
          'Android Development',
          'React Native',
          'Flutter Apps',
        ],
      },
      {
        title: 'AI & Machine Learning',
        description: 'Intelligent solutions powered by artificial intelligence.',
        features: [
          'Predictive Analytics',
          'Natural Language Processing',
          'Computer Vision',
          'Chatbots & Automation',
        ],
      },
      {
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and deployment.',
        features: [
          'AWS Integration',
          'Azure Solutions',
          'Google Cloud',
          'Cloud Migration',
        ],
      },
    ],
  },

  // ============================================
  // PORTFOLIO PAGE
  // ============================================
  portfolio: {
    hero: {
      title: 'Our Portfolio',
      description: 'Explore our latest projects and success stories.',
    },
    filters: {
      all: 'All Projects',
    },
    emptyState: {
      title: 'No projects found',
      description: 'Check back soon for our latest work.',
    },
    projectDetail: {
      backButton: 'Back to Portfolio',
      technologiesTitle: 'Technologies Used',
      overviewTitle: 'Project Overview',
      featuresTitle: 'Key Features',
      clientLabel: 'Client',
      dateLabel: 'Completion Date',
      inquireButton: 'Inquire About Similar Project',
    },
  },

  // ============================================
  // CONTACT PAGE
  // ============================================
  contact: {
    hero: {
      title: 'Get In Touch',
      description: "Have a project in mind? Let's discuss how we can help bring your ideas to life.",
    },
    form: {
      nameLabel: 'Your Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'john@example.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+1 (555) 000-0000',
      projectTypeLabel: 'Project Type',
      projectTypePlaceholder: 'Select project type',
      projectTypes: [
        'Web Development',
        'Mobile Application',
        'AI/ML Solution',
        'Cloud Integration',
        'UI/UX Design',
        'Other',
      ],
      budgetLabel: 'Budget Range',
      budgetPlaceholder: 'Select budget range',
      budgetRanges: [
        'Under $5,000',
        '$5,000 - $10,000',
        '$10,000 - $25,000',
        '$25,000 - $50,000',
        '$50,000+',
      ],
      messageLabel: 'Project Details',
      messagePlaceholder: 'Tell us about your project...',
      submitButton: 'Send Message',
      submitting: 'Sending...',
      successMessage: 'Message sent successfully! We will get back to you soon.',
      errorMessage: 'Failed to send message. Please try again.',
    },
    info: {
      title: 'Contact Information',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      addressLabel: 'Address',
      followUs: 'Follow Us',
    },
  },

  // ============================================
  // ADMIN SECTION
  // ============================================
  admin: {
    login: {
      title: 'Admin',
      loginSubtitle: 'Access the admin dashboard',
      signupSubtitle: 'Create a new admin account',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'admin@sofforsoftware.com',
      passwordLabel: 'Password',
      passwordPlaceholder: '••••••••',
      loginButton: 'Sign In',
      signupButton: 'Create Account',
      processing: 'Processing...',
      switchToSignup: "Don't have an account? Sign up",
      switchToLogin: 'Already have an account? Sign in',
      backToHome: 'Back to Home',
      signupSuccessMessage: 'Account created successfully! You can now log in.',
    },
    dashboard: {
      title: 'Admin Dashboard',
      welcome: 'Welcome back',
      stats: {
        totalProjects: 'Total Projects',
        activeProjects: 'Active Projects',
        totalCategories: 'Categories',
        completedProjects: 'Completed',
      },
      quickActions: 'Quick Actions',
      actions: {
        addProject: 'Add New Project',
        manageCategories: 'Manage Categories',
        viewProjects: 'View All Projects',
      },
    },
    categories: {
      title: 'Manage Categories',
      addButton: 'Add Category',
      nameLabel: 'Category Name',
      descriptionLabel: 'Description',
      saveButton: 'Save Category',
      cancelButton: 'Cancel',
      editButton: 'Edit',
      deleteButton: 'Delete',
      emptyState: 'No categories yet. Create your first category!',
      deleteConfirm: 'Are you sure you want to delete this category?',
    },
    projects: {
      title: 'Manage Projects',
      addButton: 'Add New Project',
      titleLabel: 'Project Title',
      categoryLabel: 'Category',
      selectCategory: 'Select a category',
      descriptionLabel: 'Description',
      clientLabel: 'Client Name',
      dateLabel: 'Completion Date',
      imageLabel: 'Project Image URL',
      imagePlaceholder: 'https://example.com/image.jpg',
      technologiesLabel: 'Technologies (comma-separated)',
      technologiesPlaceholder: 'React, Node.js, MongoDB',
      featuresLabel: 'Key Features (one per line)',
      featuresPlaceholder: 'Feature 1\nFeature 2\nFeature 3',
      statusLabel: 'Status',
      statusActive: 'Active',
      statusCompleted: 'Completed',
      saveButton: 'Save Project',
      cancelButton: 'Cancel',
      editButton: 'Edit',
      deleteButton: 'Delete',
      viewButton: 'View',
      emptyState: 'No projects yet. Create your first project!',
      projectCode: 'Project Code',
      deleteConfirm: 'Are you sure you want to delete this project?',
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    description: 'Transforming ideas into intelligent software solutions. Building the future, one line of code at a time.',
    quickLinksTitle: 'Quick Links',
    quickLinks: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About Us' },
      { to: '/services', label: 'Services' },
      { to: '/portfolio', label: 'Portfolio' },
      { to: '/contact', label: 'Contact' },
    ],
    servicesTitle: 'Services',
    servicesList: [
      'Web Development',
      'Mobile Applications',
      'AI & Machine Learning',
      'Cloud Integration',
      'UI/UX Design',
    ],
    contactTitle: 'Contact Us',
    copyright: 'SOF for Software. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
  },

  // ============================================
  // COLORS & THEME
  // ============================================
  colors: {
    primary: 'cyan-500',
    secondary: 'blue-600',
    accent: 'purple-500',
    success: 'green-500',
    danger: 'red-500',
    warning: 'yellow-500',
    info: 'blue-400',
    gradientFrom: 'cyan-500',
    gradientTo: 'blue-600',
  },

  // ============================================
  // ANIMATION SETTINGS
  // ============================================
  animations: {
    duration: {
      fast: 0.3,
      normal: 0.6,
      slow: 0.8,
    },
    delay: {
      short: 0.1,
      medium: 0.2,
      long: 0.3,
    },
  },
};

export default GLOBAL_CONFIG;
