export interface AgendaItem {
  id: string;
  step: string;
  title: string;
  duration: string;
  status: 'completed' | 'active' | 'upcoming';
  description: string;
  tools?: string[];
}

export interface Participant {
  id: string;
  name: string;
  role: string;
  isHost?: boolean;
  avatar: string;
  isMuted?: boolean;
  hasHandRaised?: boolean;
  isSpeaking?: boolean;
}

export const INITIAL_AGENDA: AgendaItem[] = [
  {
    id: '01',
    step: '01',
    title: 'Keynote & Vision',
    duration: '10 min',
    status: 'completed',
    description: 'Executive overview and new collaborative capabilities presentation.',
    tools: ['Slides', 'Talk AI']
  },
  {
    id: '02',
    step: '02',
    title: 'Live Tech Sandbox',
    duration: '15 min',
    status: 'completed',
    description: 'Hands-on interactive testing with audience co-pilot permissions.',
    tools: ['Miro Whiteboard', 'Figma']
  },
  {
    id: '03',
    step: '03',
    title: 'Interactive Q&A',
    duration: '15 min',
    status: 'active',
    description: 'Live audience questions with on-screen spotlighting and upvoting.',
    tools: ['Polls', 'Q&A Board']
  },
  {
    id: '04',
    step: '04',
    title: 'Special Offer & Next Steps',
    duration: '5 min',
    status: 'upcoming',
    description: 'Exclusive webinar growth workshop package and onboarding link.',
    tools: ['Flash Offer']
  }
];

export const INITIAL_PARTICIPANTS: Participant[] = [
  {
    id: 'p1',
    name: 'Sarah Jenkins',
    role: 'Host & Lead Presenter',
    isHost: true,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    isMuted: false,
    isSpeaking: true
  },
  {
    id: 'p2',
    name: 'Mateo Vance',
    role: 'Product Architect',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    isMuted: false,
    hasHandRaised: false
  },
  {
    id: 'p3',
    name: 'Lin Chen',
    role: 'Design Director',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    isMuted: true,
    hasHandRaised: true
  },
  {
    id: 'p4',
    name: 'Alex Rivera',
    role: 'VP Customer Success',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    isMuted: true,
    hasHandRaised: false
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    author: 'Vicente U.',
    verifiedBadge: 'Verified Purchaser',
    platform: 'AppSumo',
    rating: 5,
    title: 'Talk is an absolute tipping point for virtual meetings!',
    content:
      'I love how easy it is to create and manage structured meetings with this platform. The automatic agenda transitions save me massive amounts of prep time. Clients consistently compliment the clean UI!',
    role: 'Agency Founder',
    tag: 'Agencies'
  },
  {
    id: '2',
    author: 'Alasandro R.',
    verifiedBadge: 'Verified Purchaser',
    platform: 'ProductHunt',
    rating: 5,
    title: "WOW! I'm thrilled we migrated our whole company",
    content:
      'I am in heaven, Talk is a dream come true for workshops. My teammates love the embedded Miro boards and live notes. Everything is intuitively organized from event registration to post-meeting cloud recordings.',
    role: 'Head of People & Culture',
    tag: 'Workshops'
  },
  {
    id: '3',
    author: 'ChefExtraordinaire',
    verifiedBadge: 'Verified Review',
    platform: 'G2 Crowd',
    rating: 5,
    title: 'Far more than just another Zoom alternative',
    content:
      'What sets Talk apart is turning dull meetings into dynamic studios. The AI transcriptions distills key points into sharp overviews right away. Essential tool for modern trainers and coaches.',
    role: 'IT Trainer & Educator',
    tag: 'Webinars'
  }
];

export const INTEGRATIONS = [
  {
    id: 'zapier',
    name: 'Zapier',
    category: 'Automation',
    description: 'Connect Talk triggers to 5,000+ cloud business applications.',
    status: 'Instant Connect',
    color: '#FF4A00'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'CRM & Pipeline',
    description: 'Auto-sync registrant contact details and meeting engagement scores.',
    status: 'Live Sync',
    color: '#FF7A59'
  },
  {
    id: 'webhooks',
    name: 'Webhooks',
    category: 'Developer API',
    description: 'Instant event payloads for session start, registration, and attendance.',
    status: 'Real-time',
    color: '#10B981'
  },
  {
    id: 'talk-api',
    name: 'Talk API',
    category: 'Headless SDK',
    description: 'Programmatically generate branded meeting rooms and invite links.',
    status: 'REST & GraphQL',
    color: '#D4A017'
  }
];
