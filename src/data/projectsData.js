export const projectsData = [
  {
    title: "Verity Intelligence",
    type: "WordPress Platform",
    status: "Live",
    year: "2025",
    description: "Background verification platform serving 500+ organizations across Malaysia and Singapore.",
    technologies: ["WordPress", "Elementor Pro", "WooCommerce", "Fiuu", "Billplz", "Stripe", "W3 Total Cache", "LiteSpeed Cache"],
    highlights: [
      "Integrated 2 payment gateways (Fiuu, Billplz) with custom callback URLs and webhook handling, resolving gateway conflicts across sandbox-to-production transitions and processing 200+ monthly transactions",
      "Built 15+ Elementor Pro page templates with custom post types for services, case studies, and company updates, empowering 3+ non-technical staff to manage content independently",
      "Achieved 90+ Lighthouse performance scores through LiteSpeed caching, image optimization, and code minification, improving average page load time from ~5s to under 2s",
      "Hardened site security with SSL management, plugin audits, and regular vulnerability patching, maintaining 99.9% uptime across production"
    ],
    link: "https://www.verityintel.com/"
  },
  {
    title: "VERISafe App",
    type: "React Application",
    status: "Live",
    year: "2025",
    description: "Secure client portal for organizations to request, track, and manage background verification services across Malaysia and Singapore.",
    technologies: ["React", "Redux", "Auth0", "Formik", "Stripe", "Billplz"],
    highlights: [
      "Implemented Auth0 authentication with role-based access control across 8 user types, securing 1,000+ active sessions with token refresh and logout handling",
      "Built multi-step verification request forms for background checks, Risk Check assessments, and KYC compliance, handling 15+ dynamic fields with Formik validation and document uploads",
      "Integrated Stripe and Billplz payment gateways with retry logic for failed transactions, processing 200+ monthly payments with automated invoice generation and confirmation emails",
      "Managed centralized Redux state across verification requests, user sessions, and payment flows, implementing data caching that reduced redundant API calls by ~30%"
    ],
    link: "https://app.halocheck.com.my/"
  },
  {
    title: "HaloCheck",
    type: "WordPress Platform",
    status: "Live",
    year: "2025",
    description: "Client-facing background verification platform for organizations to request and monitor screening services.",
    technologies: ["WordPress", "Elementor"],
    highlights: [
      "Built responsive WordPress layouts with Elementor Pro for candidate screening workflows, optimized across desktop, tablet, and mobile breakpoints",
      "Created content management workflows enabling non-technical staff to independently update verification processes, user guides, and platform documentation"
    ],
    link: "https://www.halocheck.com.my/"
  },
  {
    title: "Eduk8u",
    type: "WordPress Website",
    status: "Live",
    year: "2023 - 2025",
    description: "Education platform website offering learning programs and course information for students across Asia.",
    technologies: ["WordPress", "Elementor Pro", "PHP", "MySQL", "GoHighLevel (GHL)"],
    highlights: [
      "Maintain and update Elementor Pro page templates for programs, faculty, and announcements",
      "Handle plugin updates, security patching, and ongoing performance tuning",
      "Manage backend infrastructure including hosting, domain configuration, and deployment workflows",
      "Administer GoHighLevel (GHL) for marketing automation, lead capture, and CRM integration",
      "Support non-technical staff with content updates and site administration"
    ],
    link: "https://www.eduk8u.com/"
  },
  {
    title: "Work Ready Asia",
    type: "WordPress Website",
    status: "Live",
    year: "2023 - 2025",
    description: "Labour hire and ethical recruitment platform serving aged care, engineering, and hospitality sectors across Australia and Southeast Asia.",
    technologies: ["WordPress", "Elementor Pro", "PHP", "MySQL"],
    highlights: [
      "Develop and maintain Elementor Pro layouts for industry-specific recruitment pages (aged care, engineering, hospitality) and candidate-facing content",
      "Manage theme customization, plugin updates, and routine security hardening",
      "Manage backend infrastructure including hosting, domain configuration, and deployment workflows",
      "Enable content management workflows for non-technical staff to publish job listings and updates independently"
    ],
    link: "https://www.workreadyasia.com/"
  },
  {
    title: "ICQA",
    type: "WordPress LMS Platform",
    status: "Live",
    year: "2023 - 2025",
    description: "WordPress-based learning management system delivering online courses to learners (similar to Udemy/Moodle), operated under the Queensland (Australia) education domain.",
    technologies: ["WordPress", "LMS Plugin", "Elementor Pro", "PHP", "MySQL"],
    highlights: [
      "Maintain LMS course delivery, enrollments, and student progress tracking on a WordPress-based platform",
      "Handle plugin and theme updates, SSL management, and vulnerability patching across the LMS stack",
      "Manage backend infrastructure including hosting, domain configuration, and deployment workflows",
      "Support instructors and administrators with course setup, content publishing, and learner management"
    ],
    link: "https://icqa.qld.edu.au/"
  },
  {
    title: "AttendCare",
    type: "WordPress Website",
    status: "Live",
    year: "2023 - 2025",
    description: "NDIS-registered home care provider (Melbourne, Victoria) delivering personal care, support coordination, and high-intensity disability care across Australia.",
    technologies: ["WordPress", "Elementor Pro", "PHP", "MySQL"],
    highlights: [
      "Maintain responsive Elementor Pro layouts for NDIS service pages, support coordination, and clinical care offerings",
      "Manage plugin updates, performance tuning, and security patching for ongoing reliability",
      "Manage backend infrastructure including hosting, domain configuration, and deployment workflows",
      "Support staff with content updates and intake/lead management workflows for participant onboarding"
    ],
    link: "https://attendcare.com.au/"
  },
  {
    title: "TVET School Asia",
    type: "Moodle LMS",
    status: "Live",
    year: "2023 - 2025",
    description: "Moodle-based learning management system delivering technical and vocational education courses across Asia.",
    technologies: ["Moodle", "PHP", "MySQL"],
    highlights: [
      "Administer Moodle deployment supporting course delivery, enrollments, and learner management",
      "Handle plugin updates, theme customization, and ongoing security maintenance",
      "Manage backend infrastructure including hosting, domain configuration, and deployment workflows",
      "Support instructors and administrators with course setup and learner tracking workflows"
    ],
    link: "https://tvetschoolasia.com/"
  },
  {
    title: "TVET School Asia Shop",
    type: "WooCommerce Store",
    status: "In Development - Coming Soon",
    year: "2025",
    description: "Upcoming e-commerce storefront for TVET School Asia, currently under active development.",
    technologies: ["WordPress", "WooCommerce", "Elementor Pro"],
    highlights: [
      "Designing product catalog and checkout flow tailored for TVET course materials and learning resources",
      "Integrating with the existing TVET School Asia Moodle LMS ecosystem",
      "Managing backend infrastructure including hosting, domain configuration, and deployment for launch",
      "Launch coming soon"
    ],
    link: "https://shop.tvetschoolasia.com/"
  },
  {
    title: "Capital Office UK",
    type: "Laravel & React Application",
    status: "Live",
    year: "2024",
    description: "Sales tracking and client management dashboard for a UK-based office services company.",
    technologies: ["Laravel", "React", "ArchitectUI", "PHP"],
    highlights: [
      "Refactored React components with memoization, lazy loading, and code splitting, reducing bundle size by ~40% and improving initial page load by 2+ seconds",
      "Built a shared component library of 15+ reusable UI elements (tables, forms, modals, charts) that accelerated feature development and enforced visual consistency across 3 modules (sales, reporting, client management)"
    ],
    link: "https://admin.capital-office.co.uk/login"
  },
  {
    title: "Fetch Workpapers",
    type: "Laravel & PHP Application",
    status: "Completed",
    year: "2023",
    description: "SaaS platform for accountants to automate workpaper management, billing, and client communication.",
    technologies: ["Laravel", "PHP", "Stripe", "Artisan"],
    highlights: [
      "Implemented Stripe subscription billing with webhook-driven payment confirmations and failed payment recovery, processing recurring transactions for 50+ accounts with automated invoice generation",
      "Built custom Artisan commands for data migrations, report generation, and system maintenance, reducing manual developer workload by ~40% and streamlining deployment cycles",
      "Developed event-driven email notification system handling 5+ trigger types (payments, document uploads, workflow milestones) with dynamic templates for personalized client communications"
    ],
    link: null
  },
  {
    title: "Elder Armor USA",
    type: "E-commerce Website",
    status: "Live",
    year: "2023",
    description: "US-based e-commerce store for protective undergarment products with direct-to-consumer sales.",
    technologies: ["WordPress", "WooCommerce", "SSL", "Custom Theme"],
    highlights: [
      "Built complete WooCommerce store with product variations, inventory tracking, shipping/tax configuration, and secure checkout, serving 100+ SKUs for US-based customers",
      "Customized WordPress theme and WooCommerce templates for brand alignment, delivering mobile-responsive design that improved conversion flow"
    ],
    link: "https://elderarmorusa.com/"
  },
  {
    title: "OLD PORTFOLIO's",
    type: "Personal Portfolio",
    status: "Archived",
    year: "2024",
    description: "Previous iterations of my personal portfolio websites showcasing my evolution as a developer.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    highlights: [
      "Malacas Portfolio - Modern portfolio with minimalist design and smooth animations",
      "CLI Portfolio - Terminal-inspired interactive portfolio experience"
    ],
    links: [
      { name: "Malacas Portfolio", url: "https://malacas.vercel.app/" },
      { name: "CLI Portfolio", url: "https://cli-ceesh.vercel.app/" }
    ]
  }
];
