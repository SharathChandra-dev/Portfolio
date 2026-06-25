export const profile = {
  displayName: 'Sharath Chandra',
  fullName: 'Sharath Chandra Chandrashekhar',
  title: 'Software Developer | React.js | Full Stack',
  headline: 'Frontend Developer & Full-Stack Engineer',
  location: 'Munich, Germany',
  phone: '+49 155 10323692',
  email: 'sharath.workdev@gmail.com',
  linkedin: 'https://linkedin.com/in/sharath-c1',
  github: 'https://github.com/',
  resume: '/Sharath_Chandra_Resume.pdf',
  photo: '/profile/sharath-chandra.jpg',
  tagline:
    'Building modern, scalable, and user-focused web applications with React and full-stack technologies.',
  summary:
    'M.Sc. Applied Computer Science student at SRH University Munich with 2+ years of professional experience building responsive, scalable web applications. Proven expertise in React.js, API integration, full-stack development, clean UI/UX, and frontend delivery in startup environments.',
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const heroTech = ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Laravel', 'Git'];

export const highlights = [
  'Professional frontend development experience',
  'React.js specialist with reusable component architecture',
  'Full-stack background across MERN, Java, Laravel, and MySQL',
  'Team lead experience in startup delivery environments',
  'REST API integration and production bug resolution',
  'Responsive web application development',
  'Agile, Scrum, code review, and sprint collaboration',
];

export const education = [
  {
    degree: 'M.Sc. Applied Computer Science',
    school: 'SRH University, Munich, Germany',
    period: 'Apr 2026 - Present',
    focus: 'Software Architecture, Advanced Databases, IT Security, UX Engineering, Mobile Computing, International Project Management',
  },
  {
    degree: 'Bachelor of Engineering, Computer Science',
    school: 'Sri Krishna Institute of Technology, Bangalore, India',
    period: 'Jul 2021 - Jun 2024',
    focus: 'Data Structures, OOP, Operating Systems, DBMS, Software Engineering, Web Technologies',
  },
];

export const experience = [
  {
    role: 'Software Developer / React Developer',
    company: 'AngoDigital Technology Pvt Ltd',
    location: 'India',
    period: 'Sept 2024 - Mar 2026',
    type: 'Professional',
    points: [
      'Built responsive and dynamic UI components using React.js, ensuring consistent UX across devices.',
      'Integrated REST APIs and resolved production bugs to maintain application stability and performance.',
      'Led frontend delivery as Team Lead, managing feature planning, code reviews, and sprint delivery.',
      'Translated business requirements into clean, maintainable frontend code with measurable quality gains.',
    ],
  },
  {
    role: 'Java Full Stack Developer',
    company: 'Global Quest Technology',
    location: 'India',
    period: 'Feb 2024 - Aug 2024',
    type: 'Professional',
    points: [
      'Developed and maintained full-stack applications using Java, MySQL, and MERN stack.',
      'Ensured release quality through manual testing in Waterfall, Agile, and Scrum methodologies.',
      'Improved application performance through targeted backend and frontend optimizations.',
      'Authored test plans, test cases, and end-to-end scenarios for major software releases.',
    ],
  },
  {
    role: 'MERN Full Stack Developer Intern',
    company: 'Imarticus Learning Pvt Ltd',
    location: 'Bengaluru, India',
    period: 'Oct 2023 - Apr 2024',
    type: 'Internship',
    points: [
      'Designed and built complete MERN stack applications from architecture through deployment.',
      'Developed dynamic UI components and integrated RESTful APIs across the application layer.',
      'Delivered projects including an Adventure Booking Platform and a Restaurant Management System.',
    ],
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Redux', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Laravel', 'Java', 'REST APIs', 'Django'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'MySQL', 'Advanced Databases'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Jenkins', 'Azure', 'Docker'],
  },
  {
    title: 'Testing',
    skills: ['Manual Testing', 'Test Planning', 'Test Cases', 'Agile/Scrum'],
  },
  {
    title: 'Languages',
    skills: ['English', 'German Basics', 'Hindi', 'Kannada'],
  },
];

export const projects = [
  {
    slug: 'ritzy-ecommerce-platform',
    title: 'RITZY E-Commerce Platform',
    category: 'Commerce',
    year: '2025',
    preview: '/project-previews/ritzy.svg',
    description:
      "Modern men's fashion e-commerce platform featuring authentication, shopping cart, checkout flow, API integration, responsive design, and a polished customer experience.",
    features: ['Authentication', 'Cart Management', 'Checkout', 'API Integration', 'Product Management'],
    technologies: ['React.js', 'JavaScript', 'REST APIs'],
    challenge: 'Balancing a premium shopping experience with dependable cart state and mobile-first product discovery.',
    impact: 'Created a polished commerce workflow that can scale across catalog, customer, and checkout modules.',
    problem:
      'Fashion customers need a quick, responsive buying path where discovery, cart updates, and checkout feel trustworthy on every screen size.',
    approach:
      'Designed the app around reusable React components, clear route states, and a streamlined product-card-to-cart flow.',
    implementation:
      'Built authentication-aware screens, cart interactions, product management views, API-ready service utilities, and responsive UI states.',
    challenges:
      'Keeping cart state predictable during API calls, maintaining layout quality across dense product grids, and preventing checkout friction.',
    results:
      'Delivered a recruiter-friendly commerce case study that demonstrates product thinking, frontend architecture, and end-to-end workflow design.',
    demoUrl: '',
    repoUrl: '',
  },
  {
    slug: 'restaurant-management-system',
    title: 'Food & Feast Restaurant System',
    category: 'Restaurant',
    year: '2023',
    preview: '/project-screenshots/restaurant-home.jpg',
    gallery: [
      '/project-screenshots/restaurant-home.jpg',
      '/project-screenshots/restaurant-menu-bill.jpg',
    ],
description:
  'Restaurant billing and hotel order management website with food cards, quantity controls, bill calculation, table-based ordering, supplier order screen, inventory tracking, urgent item requirements, revenue summary, contact section, and a bold food-focused landing page.',

features: [
  'Menu Browsing',
  'Quantity Controls',
  'Bill Calculation',
  'Table Number Display',
  'Food Order Summary',
  'Supplier Order Screen',
  'Inventory Tracking',
  'Items Used Report',
  'Items Left Report',
  'Urgent Item Requirement',
  'Revenue Calculation',
  'Contact Section',
  'Responsive UI'
],

technologies: ['HTML5', 'CSS3', 'JavaScript'],

challenge:
  'Building a complete restaurant workflow that handles customer menu ordering, bill generation, table-wise order display, supplier requirements, inventory usage, and revenue tracking while keeping the interface simple and easy to understand.',

impact:
  'Created a practical restaurant management interface that demonstrates real-world DOM interaction, billing logic, inventory awareness, order tracking, and customer-facing UI structure.',

problem:
  'Restaurants need a simple digital system to display menu items, take table-wise orders, calculate bills, track ordered food, monitor available and used items, identify urgent stock requirements, and view generated revenue.',

approach:
  'Designed the experience around a bold landing page, structured food cards, clear quantity controls, table number based ordering, a focused bill summary, supplier order display, and inventory/revenue sections.',

implementation:
  'Built responsive HTML, CSS, and JavaScript functionality for menu browsing, quantity updates, automatic bill calculation, table number display, ordered food summaries, inventory tracking, urgent item requirements, and revenue generation.',

challenges:
  'Managing multiple workflows on one website, keeping food card controls readable, making bill and order summaries easy to scan, tracking used and remaining items clearly, and preserving a clean layout across desktop and mobile screens.',

results:
  'Delivered a complete restaurant billing and management interface that showcases frontend layout skills, JavaScript DOM manipulation, order processing logic, inventory tracking, and practical business workflow design.',

demoUrl: '',
repoUrl: '',
  },
  {
    slug: 'adventure-travel-website',
    title: 'TravelWorld Adventure Website',
    category: 'Travel',
    year: '2024',
    preview: '/project-screenshots/travelworld-home.jpg',
    gallery: [
      '/project-screenshots/travelworld-home.jpg',
      '/project-screenshots/travelworld-tours.jpg',
      '/project-screenshots/travelworld-gallery.jpg',
      '/project-screenshots/adventure-cards.jpg',
    ],
    description:
      'Travel and tourism website with an immersive hero, destination cards, tour booking CTAs, search inputs, service blocks, and customer gallery.',
    features: ['Tour Cards', 'Booking CTAs', 'Search Inputs', 'Gallery Layout', 'Responsive UI'],
    technologies: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
    challenge: 'Turning travel inspiration into a clear booking path while preserving speed and responsiveness.',
    impact: 'Created a visually engaging experience that connects destination browsing with actionable booking interactions.',
    problem:
      'Adventure travelers need rich destination content, but the interface must still make pricing, availability, and next steps easy to scan.',
    approach:
      'Used sectioned destination layouts, card-based package comparisons, and lightweight interactive states.',
    implementation:
      'Built reusable React sections, responsive grids, booking-focused CTAs, and destination filtering patterns.',
    challenges:
      'Maintaining immersive visuals without sacrificing readability or mobile performance.',
    results:
      'Delivered a polished travel experience that shows front-end craft, responsive design, and product narrative skill.',
    demoUrl: '',
    repoUrl: '',
  },
  {
    slug: 'smart-food-waste-reduction-system',
    title: 'Smart Food Waste Reduction System',
    category: 'Sustainability',
    year: '2026',
    preview: '/project-screenshots/sfwr-login.jpg',
    gallery: [
      '/project-screenshots/sfwr-login.jpg',
      '/project-screenshots/sfwr-dashboard.jpg',
      '/project-screenshots/sfwr-food-items.jpg',
      '/project-screenshots/sfwr-user-foods.jpg',
    ],
    description:
      'Full-stack SRH University project using Laravel and MySQL to manage food inventory, reduce waste, and support real-time tracking.',
    features: ['Admin Dashboard', 'User Auth', 'Inventory Tracking', 'Food Management', 'Waste Insights'],
    technologies: ['Laravel', 'MySQL', 'JavaScript'],
    challenge: 'Making inventory data actionable enough to reduce waste while keeping administrative workflows simple.',
    impact: 'Helped model operational decisions around stock visibility, food status, and waste prevention.',
    problem:
      'Food inventory teams need accurate stock visibility and simple workflows to prevent avoidable waste before items expire.',
    approach:
      'Designed the system around role-aware dashboards, inventory lifecycle states, and fast update flows for administrators.',
    implementation:
      'Built Laravel modules for authentication, food inventory records, admin dashboards, and MySQL-backed tracking.',
    challenges:
      'Creating clear data states for perishable goods and ensuring dashboard interactions stayed direct for operational users.',
    results:
      'Delivered an academic full-stack system with a real-world sustainability use case and production-oriented module design.',
    demoUrl: '',
    repoUrl: '',
  },
];

export const achievements = [
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 10, suffix: '+', label: 'Projects Completed' },
  { value: 1000, suffix: '+', label: 'Hours Development' },
  { value: 6, suffix: '+', label: 'Production Skills' },
];

export const developmentHighlights = [
  'React Specialist',
  'Full-Stack Development Experience',
  'API Integration',
  'Startup Team Lead',
];

export const githubActivity = {
  repositories: [
    {
      name: 'ritzy-commerce',
      language: 'React',
      summary: 'Catalog, cart, checkout, and API-ready commerce flows.',
    },
    {
      name: 'food-waste-system',
      language: 'Laravel',
      summary: 'Inventory tracking dashboards for sustainability workflows.',
    },
    {
      name: 'travelworld-adventure',
      language: 'React',
      summary: 'Tour cards, booking CTAs, responsive gallery, and destination discovery.',
    },
    {
      name: 'food-and-feast',
      language: 'JavaScript',
      summary: 'Restaurant menu interactions, quantity controls, and bill calculation.',
    },
  ],
  commits: [
    'Refined responsive product-card architecture for ecommerce flow',
    'Added role-based dashboard states and validation scenarios',
    'Optimized API integration layer and resolved production UI defects',
  ],
  technologies: [
    {
      name: 'React',
      summary: 'Reusable sections, route-based case studies, and responsive UI components.',
      level: 92,
    },
    {
      name: 'JavaScript',
      summary: 'Interactive flows, state updates, search/filter behavior, and UI logic.',
      level: 90,
    },
    {
      name: 'Laravel',
      summary: 'Smart Food Waste backend modules, authentication, and admin workflows.',
      level: 78,
    },
    {
      name: 'Django',
      summary: 'Backend framework experience from academic and full-stack practice.',
      level: 66,
    },
    {
      name: 'MySQL',
      summary: 'Relational schema design for inventory and operational records.',
      level: 82,
    },
    {
      name: 'MongoDB',
      summary: 'Document database usage across MERN learning and project workflows.',
      level: 74,
    },
  ],
};

export const testimonials = [
  {
    name: 'Frontend Manager',
    role: 'Delivery Lead',
    quote:
      'Sharath brings calm ownership to frontend delivery, translating requirements into reusable React components and predictable sprint output.',
  },
  {
    name: 'Engineering Teammate',
    role: 'Backend Developer',
    quote:
      'He collaborates closely across API boundaries, asks the right integration questions, and keeps user experience visible in technical discussions.',
  },
  {
    name: 'Project Stakeholder',
    role: 'Client Partner',
    quote:
      'Sharath is reliable with product details and turns ambiguous workflow ideas into clean, usable interfaces.',
  },
];

export const certifications = [
  'Cyber Security Ethical Hacking - EthicalByte',
  'Advanced Data Analytics - Edunet Foundation / IBM',
  'Full Stack Developer Pro - Imarticus Learning',
  'React - The Complete Guide (incl. Next.js, Redux) - Udemy',
];
