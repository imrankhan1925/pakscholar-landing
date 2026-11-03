export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
}

export interface Scholarship {
  id: string;
  title: string;
  tagline: string;
  category: "Merit" | "Need-Based" | "Postgraduate" | "STEM";
  degreeLevel: string;
  coverage: string;
  eligibility: string[];
  deadline: string;
  isPopular?: boolean;
  seats: string;
  applicationRoute: string;
  summary: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  tag: string;
}

export interface Story {
  id: string;
  name: string;
  program: string;
  institution: string;
  quote: string;
  category: string;
  image: string;
  hometown: string;
  year: string;
}

export interface FAQItem {
  id: string;
  category: "General" | "Eligibility" | "Application" | "Partners";
  question: string;
  answer: string;
}

export interface PartnerOption {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  actionText: string;
}

export const PORTAL_BASE_URL =
  process.env.NEXT_PUBLIC_STUDENT_PORTAL_URL || "http://localhost:3001";

export const PORTAL_CONFIG = {
  baseUrl: PORTAL_BASE_URL,
  loginUrl: `${PORTAL_BASE_URL}/login`,
  registerUrl: `${PORTAL_BASE_URL}/register`,
  dashboardUrl: `${PORTAL_BASE_URL}/dashboard`,
  scholarshipsUrl: `${PORTAL_BASE_URL}/scholarships`,
  applicationsUrl: `${PORTAL_BASE_URL}/applications`,
  forgotPasswordUrl: `${PORTAL_BASE_URL}/forgot-password`,
};

export const SITE_CONFIG = {
  name: "PakScholar",
  legalName: "PakScholar Educational Foundation",
  tagline: "Empowering Talent. Transforming Futures.",
  slogans: [
    "Every Talented Student Deserves an Opportunity.",
    "Your Dreams Shouldn't Stop Because of Financial Barriers.",
    "Investing in Education. Building Pakistan's Future.",
    "A Brighter Future Begins With an Opportunity.",
  ],
  mission:
    "PakScholar is an educational scholarship initiative committed to helping talented, hardworking, and deserving students overcome financial barriers and achieve their academic goals.",
  vision:
    "We believe that financial difficulties should not prevent talented students from receiving quality education. Our goal is to identify deserving students, provide scholarship opportunities, support their educational journey, and contribute to a better future for Pakistan.",
  contact: {
    email: "info@pakscholar.org",
    supportEmail: "admissions@pakscholar.org",
    phone: "+92 (51) 890-4321",
    altPhone: "+92 300 1234567",
    address: "Level 4, Evacuee Trust Complex, F-5/1, Islamabad, Pakistan",
    regionalOffices: "Islamabad • Lahore • Karachi • Peshawar • Quetta",
    workingHours: "Monday – Friday: 9:00 AM – 5:00 PM PKT",
  },
  socials: {
    linkedin: "https://linkedin.com/company/pakscholar-demo",
    twitter: "https://twitter.com/pakscholar_demo",
    facebook: "https://facebook.com/pakscholar.demo",
    instagram: "https://instagram.com/pakscholar.demo",
    youtube: "https://youtube.com/@pakscholar-demo",
  },
  urls: {
    studentLogin: PORTAL_CONFIG.loginUrl,
    studentRegister: PORTAL_CONFIG.registerUrl,
    applyNow: PORTAL_CONFIG.registerUrl,
    studentDashboard: PORTAL_CONFIG.dashboardUrl,
    partnerPortal: "#contact",
    helpCenter: "#faq",
  },
};

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Scholarships", href: "#scholarships" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Our Impact", href: "#impact" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export const IMPACT_STATS: StatItem[] = [
  {
    id: "students",
    value: "500+",
    numericValue: 500,
    suffix: "+",
    label: "Students Supported",
    description: "Deserving scholars funded across Pakistani colleges & universities",
    icon: "GraduationCap",
  },
  {
    id: "scholarships",
    value: "100+",
    numericValue: 100,
    suffix: "+",
    label: "Scholarships Awarded",
    description: "Merit & need-based cohorts successfully disbursed this fiscal year",
    icon: "Award",
  },
  {
    id: "partners",
    value: "50+",
    numericValue: 50,
    suffix: "+",
    label: "Partner Institutions",
    description: "Leading HEC-recognized public & private universities nationwide",
    icon: "Building2",
  },
  {
    id: "cities",
    value: "20+",
    numericValue: 20,
    suffix: "+",
    label: "Cities Reached",
    description: "Outreach spanning urban centers and remote underserved districts",
    icon: "MapPin",
  },
];

export const CORE_VALUES = [
  {
    title: "Equal Opportunity",
    description:
      "Every deserving student should have a fair chance to pursue higher education, irrespective of geographic, socioeconomic, or familial background.",
    icon: "Scale",
  },
  {
    title: "Empowerment Through Education",
    description:
      "Quality education breaks generational poverty cycles, transforming not just individual scholars, but whole families and communities across Pakistan.",
    icon: "Sparkles",
  },
  {
    title: "Transparent Selection",
    description:
      "A structured, auditable, and merit-focused multi-stage assessment ensures complete integrity and trust for students, parents, and benefactors.",
    icon: "ShieldCheck",
  },
];

export const SCHOLARSHIPS_DATA: Scholarship[] = [
  {
    id: "undergraduate-merit",
    title: "Undergraduate Merit Scholarship",
    tagline: "For high-achieving school & college graduates",
    category: "Merit",
    degreeLevel: "Undergraduate (BS / BE / MBBS / LLB)",
    coverage: "100% Tuition Fees + Annual Academic Book Allowance",
    seats: "40 Seats / Batch",
    deadline: "November 30, 2026 (Demo)",
    isPopular: true,
    applicationRoute: "#apply",
    summary:
      "Awarded to exceptionally talented candidates entering accredited 4-year undergraduate programs who demonstrated top-percentile academic excellence in Intermediate / A-Levels.",
    eligibility: [
      "Minimum 80% marks in Intermediate (FSc/FA/ICS/I.Com) or minimum 3 As in A-Levels",
      "Confirmed admission or enrolled in an HEC-recognized university in Pakistan",
      "Demonstrated good academic standing and recommendation letter",
      "Pakistani citizen or Azad Jammu & Kashmir domicile holder",
    ],
  },
  {
    id: "need-based-education",
    title: "Need-Based Education Scholarship",
    tagline: "Overcoming financial barriers with comprehensive aid",
    category: "Need-Based",
    degreeLevel: "Intermediate & Undergraduate Programs",
    coverage: "Full Tuition + PKR 12,000 Monthly Living Subsidy",
    seats: "60 Seats / Batch",
    deadline: "December 15, 2026 (Demo)",
    isPopular: false,
    applicationRoute: "#apply",
    summary:
      "Tailored specifically for hardworking students from underprivileged households where continuing university studies would otherwise be financially impossible.",
    eligibility: [
      "Gross household monthly income below verifiable PKR 75,000 threshold",
      "Minimum 65% in recent academic examinations",
      "Documented proof of utility bills, rent, and family financial circumstances",
      "Commitment to maintaining minimum 2.75 CGPA or 65% equivalent",
    ],
  },
  {
    id: "academic-excellence-stem",
    title: "Academic Excellence & STEM Scholarship",
    tagline: "Empowering Pakistan's future scientists & engineers",
    category: "STEM",
    degreeLevel: "BS Computer Science, AI, Engineering & Sciences",
    coverage: "100% Tuition + High-Performance Laptop Grant",
    seats: "30 Seats / Batch",
    deadline: "January 10, 2027 (Demo)",
    isPopular: true,
    applicationRoute: "#apply",
    summary:
      "Designed to foster high-tech innovation, offering financial freedom and dedicated computing hardware to promising students pursuing artificial intelligence, robotics, and engineering.",
    eligibility: [
      "Top 10% ranking in university admission test (e.g., NET, FAST-NU, ECAT)",
      "Strong interest in research, software development, or hardware engineering",
      "Demonstrated practical passion (projects, coding, science fairs)",
      "Open to applicants nationwide with special priority for female tech students",
    ],
  },
  {
    id: "higher-education-support",
    title: "Higher Education Support Program",
    tagline: "Advancing postgraduate research & innovation",
    category: "Postgraduate",
    degreeLevel: "MS / MPhil & Research Masters",
    coverage: "75% Tuition Waiver + PKR 100,000 Thesis Research Grant",
    seats: "20 Seats / Batch",
    deadline: "January 25, 2027 (Demo)",
    isPopular: false,
    applicationRoute: "#apply",
    summary:
      "Supports graduate scholars researching solutions for national development, renewable energy, public health, agriculture, water preservation, and education technology.",
    eligibility: [
      "Minimum 3.2 CGPA in undergraduate degree from an accredited institution",
      "Approved or submitted thesis / research topic addressing Pakistan's socio-economic needs",
      "Endorsement from university department chair or thesis supervisor",
      "Commitment to publishing findings in recognized journals",
    ],
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: 1,
    title: "Explore Opportunities",
    tag: "Discovery",
    description:
      "Review eligibility criteria, academic requirements, and funding benefits across our merit, need-based, and STEM categories to find your ideal match.",
    icon: "Compass",
  },
  {
    step: 2,
    title: "Create Your Account",
    tag: "Registration",
    description:
      "Register on the PakScholar candidate portal using your CNIC / B-Form and verify your email to access the centralized application dashboard.",
    icon: "UserPlus",
  },
  {
    step: 3,
    title: "Apply for a Scholarship",
    tag: "Submission",
    description:
      "Fill out the comprehensive online application, enter your academic history, and upload scanned copies of transcripts, admission proofs, and identification.",
    icon: "FileText",
  },
  {
    step: 4,
    title: "Complete Fee Payment",
    tag: "Processing",
    description:
      "Pay the nominal verification processing fee (waived for verifiable extreme hardship applicants) via 1Link, Easypaisa, JazzCash, or online banking.",
    icon: "CreditCard",
  },
  {
    step: 5,
    title: "Application Verification",
    tag: "Scrutiny",
    description:
      "Our scrutiny team and partner committees authenticate all submitted academic records, domicile credentials, and household income declarations.",
    icon: "ShieldCheck",
  },
  {
    step: 6,
    title: "Take the Scholarship Exam",
    tag: "Assessment",
    description:
      "Shortlisted candidates sit for the standardized PakScholar Aptitude & General Knowledge Assessment held at regional testing centers across Pakistan.",
    icon: "PenTool",
  },
  {
    step: 7,
    title: "View Your Results",
    tag: "Merit List",
    description:
      "Exam scores, merit percentiles, and provisional interview notifications are published transparently on the student dashboard.",
    icon: "CheckCircle2",
  },
  {
    step: 8,
    title: "Scholarship Selection",
    tag: "Award & Funding",
    description:
      "Successful awardees sign the scholar commitment, tuition is disbursed directly to their institutions, and personal academic mentorship begins.",
    icon: "Trophy",
  },
];

export const SUCCESS_STORIES: Story[] = [
  {
    id: "story-1",
    name: "Ayesha Khan",
    program: "BS Computer Science",
    institution: "National University of Sciences & Technology (NUST), Islamabad",
    hometown: "Mingora, Swat",
    year: "Batch of 2024",
    category: "Undergraduate Merit Scholar",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    quote:
      "Coming from a modest family in Swat, financing a university degree in Islamabad felt out of reach. PakScholar not only covered my entire tuition fees but paired me with a senior software engineer as a mentor. Today, I've secured a full-time software engineering role even before my formal convocation.",
  },
  {
    id: "story-2",
    name: "Muhammad Hamza",
    program: "BE Electrical Engineering",
    institution: "University of Engineering & Technology (UET), Lahore",
    hometown: "Vehari, Punjab",
    year: "Batch of 2023",
    category: "Need-Based Education Grantee",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    quote:
      "When my father suffered a stroke during my second year, our household income dropped to zero. I was packing my bags to drop out. PakScholar stepped in within 2 weeks, cleared my pending dues, and provided a living stipend. Their timely trust preserved my future.",
  },
  {
    id: "story-3",
    name: "Zainab Fatima",
    program: "MBBS (Medicine & Surgery)",
    institution: "Dow University of Health Sciences, Karachi",
    hometown: "Larkana, Sindh",
    year: "Batch of 2025",
    category: "Academic Excellence Scholar",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    quote:
      "Medical education requires intense focus and significant textbook expenses. With PakScholar's continuous book grants and tuition coverage, I have been able to top my clinical pathology exams and organize rural health camps in my home district.",
  },
  {
    id: "story-4",
    name: "Bilal Ahmed",
    program: "BS Artificial Intelligence",
    institution: "FAST-NUCES, Peshawar Campus",
    hometown: "Mardan, Khyber Pakhtunkhwa",
    year: "Batch of 2025",
    category: "STEM Innovation Fellow",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    quote:
      "The dedicated high-performance laptop grant and tech mentorship provided by PakScholar changed my trajectory. I recently led our university team to victory at an international AI hackathon. Opportunity is truly the only difference.",
  },
];

export const PARTNER_OPTIONS: PartnerOption[] = [
  {
    title: "Corporate CSR & Foundations",
    subtitle: "Create Branded Scholarship Cohorts",
    description:
      "Collaborate with PakScholar to sponsor named scholarship cohorts, receive transparent impact metrics, and build talent pipelines directly for your industry.",
    icon: "Building",
    actionText: "Explore CSR Partnership",
  },
  {
    title: "Philanthropists & Overseas Donors",
    subtitle: "Endow Deserving Scholars",
    description:
      "Enable bright students from your hometown or chosen academic field to attend top universities through 100% auditable educational sponsorships.",
    icon: "HeartHandshake",
    actionText: "Sponsor a Student",
  },
  {
    title: "Universities & Academic Colleges",
    subtitle: "Institutional Concessions & Test Centers",
    description:
      "Partner with our assessment network to offer matching tuition waivers, host regional aptitude tests, and identify high-potential students in rural areas.",
    icon: "School",
    actionText: "Become an Academic Partner",
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What is PakScholar and what is its mission?",
    answer:
      "PakScholar is a premier educational foundation dedicated to ensuring talented, hardworking, and deserving students in Pakistan can access quality higher education without financial barriers holding them back. We provide merit-based and need-based scholarships, mentorship, and career empowerment.",
  },
  {
    id: "faq-2",
    category: "Eligibility",
    question: "Who can apply for PakScholar scholarships?",
    answer:
      "Any Pakistani citizen or Azad Jammu & Kashmir domicile holder enrolled in or holding confirmed admission to an HEC-recognized college or university can apply. Specific programs have distinct criteria: Merit scholarships prioritize high board/entrance percentiles, while Need-Based awards focus on verified family financial hardship.",
  },
  {
    id: "faq-3",
    category: "Application",
    question: "How can I apply for an open scholarship?",
    answer:
      "Applications are submitted online via our student portal. First, create your profile, choose the scholarship program that aligns with your qualifications, fill out the application details, upload the required documentation, and submit before the announced cycle deadline.",
  },
  {
    id: "faq-4",
    category: "Application",
    question: "What documents are required during the application process?",
    answer:
      "Standard documentation includes: (1) CNIC / B-Form copy, (2) Father's/Guardian's CNIC, (3) Recent academic transcripts / DMC, (4) University admission letter or student ID card, (5) Proof of household income (salary slips, pension book, or affidavit), and (6) Recent utility electricity bill.",
  },
  {
    id: "faq-5",
    category: "Eligibility",
    question: "How are scholarship applications evaluated?",
    answer:
      "Evaluation is conducted through an objective, multi-tiered process: initial document scrutiny, verification of financial indicators, a standardized aptitude examination where applicable, and a short panel interview for shortlisted candidates to assess motivation and academic goals.",
  },
  {
    id: "faq-6",
    category: "Application",
    question: "Is there an application fee for students?",
    answer:
      "A nominal processing fee of PKR 500 is charged to cover testing logistics and independent document verification. However, for candidates whose verified family income falls under extreme poverty brackets, a 100% fee waiver is automatically provided upon document review.",
  },
  {
    id: "faq-7",
    category: "Application",
    question: "How can I check my application and exam status?",
    answer:
      "You can log into the PakScholar candidate portal at any time to monitor your application progress in real-time—including document verification status, test roll number slips, published merit ranks, and award notifications.",
  },
  {
    id: "faq-8",
    category: "Partners",
    question: "How can corporate organizations and donors partner with PakScholar?",
    answer:
      "Organizations and philanthropic foundations can establish dedicated scholarship funds, co-sponsor academic batches, provide corporate internships, or match employee donations. Reach out via our 'Partner With Us' contact form to receive a tailored partnership prospectus.",
  },
];
