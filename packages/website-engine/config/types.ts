export type NavItem = {
  label: string;
  href: string;
};

export type CTA = {
  label: string;
  href: string;
};

export type BusinessConfig = {
  companyName: string;
  tagline: string;
  city: string;
  serviceAreas: string[];
  phone: string;
  email: string;
  address: string;
  logo: string;
  reviewsCount: number;
  averageRating: number;
  yearsInBusiness: number;
  licenseInfo: string;
  financingAvailable: boolean;
  emergencyService: boolean;
};

export type ThemeConfig = {
  colors: {
    background: string;
    surface: string;
    surfaceAlt: string;
    text: string;
    muted: string;
    primary: string;
    primaryDark: string;
    accent: string;
  };
  radius: {
    card: string;
    control: string;
  };
};

export type SEOConfig = {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
};

export type Service = {
  title: string;
  description: string;
  details: string;
  image: string;
  story?: string;
};

export type Project = {
  title: string;
  city: string;
  serviceType: string;
  description: string;
  image: string;
};

export type Testimonial = {
  name: string;
  city: string;
  serviceType: string;
  rating: number;
  text: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type SectionCopy = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export type FormContent = {
  nameLabel: string;
  phoneLabel: string;
  emailLabel: string;
  projectTypeLabel: string;
  messageLabel: string;
  submitLabel: string;
  loadingLabel: string;
  successTitle: string;
  successMessage: string;
  requiredNameError: string;
};

export type ContentConfig = {
  navigation: NavItem[];
  hero: SectionCopy & {
    headline: string;
    subheadline: string;
    image: string;
    primaryCTA: CTA;
    secondaryCTA: CTA;
    trustBadges: string[];
    stats: Array<{ label: string; value: string }>;
    estimatePanel: SectionCopy;
  };
  services: SectionCopy & {
    items: Service[];
    cta: CTA;
  };
  whyChooseUs: SectionCopy & {
    reasons: Array<{ title: string; text: string }>;
  };
  localProof: SectionCopy & {
    details: Array<{ title: string; text: string }>;
  };
  gallery: SectionCopy & {
    items: Project[];
  };
  leadCapture: SectionCopy & {
    highlights: string[];
    form: FormContent;
  };
  testimonials: SectionCopy & {
    items: Testimonial[];
  };
  serviceAreas: SectionCopy;
  faq: SectionCopy & {
    items: FAQ[];
  };
  footer: {
    cta: CTA;
  };
};

export type WebsiteConfig = {
  business: BusinessConfig;
  content: ContentConfig;
  theme: ThemeConfig;
  seo: SEOConfig;
};
