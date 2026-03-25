import enchantedwhispers from '../assets/enchantedwhispers.png'
import benefitbridge from '../assets/benefitbridge.png'
import benefitbridge2 from '../assets/benefitbridge2.png'

const projects = [
  {
    slug: 'benefitbridge',
    title: 'BenefitBridge',
    date: 'Summer 2025',
    desc: 'Connect yourself with the best benefits suitable for your needs. Designed to eliminate confusion and help people feel supported, BenefitBridge analyzes personal priorities and matches users with benefit plans that align with their health and lifestyle.',
    problem: 'While numerous benefits are available, users often struggle to identify which ones best meet their needs.',
    solution: 'Meet BenefitBridge, an app developed by a team of eight interns to address this issue by matching users with benefit plans that align with their priorities.',
    goal: [
      'Offers personalized recommendations based on user preferences',
      'Uses comparative analytics from our user base',
      'Increases user engagement'
    ],
    reflection: `Throughout this process, I took on the role as front-end developer and scrum master.

Our team managed weekly sprints, where Mondays were dedicated for sprint planning and Fridays were for sprint reviews. We utilized Kanban boards, which effectively measured a task's progression, priority, and type (epic, features, task). During this time, I gained valuable insights into the importance of delegation, follow-up, and driving conversations.

As the front-end developer, I focused on transforming ideas from team brainstorming sessions into visual designs in Figma, and then implemented and refined those designs in our app using React Native.`,
    uniqueness: [
      'We use AI to deliver personalized recommendations based on user preferences and prompts, while maintaining data security.',
      'We provide comparative user analytics to drive users to find community and provide feedback on vendors.'
    ],
    color: '#0CA065',
    images: [
        benefitbridge,
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80&auto=format&fit=crop',
        benefitbridge2,
    ],
    tags: ['react native', 'dynamoDB', 'fast api', 'azure ai'],
  },
  {
    slug: 'enchanted-whispers',
    title: 'Enchanted Whispers',
    date: 'Spring 2024',
    desc: 'A personality-based career quiz enhanced with a mythical visual identity and interactive storytelling to inspire users to explore and reflect on their career interests.',
    color: '#000000',
    images: [
      enchantedwhispers,
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1200&q=80&auto=format&fit=crop'
    ],
    tags: ['quiz', 'design', 'storytelling'],
  },
  {
    slug: 'forever-health',
    title: 'Forever Health',
    date: 'Spring 2024',
    desc: 'A case study exploring a platform solution that improves patient data accessibility for healthcare institutions, emphasizing workflow efficiency and user-centric data visualization.',
    color: '#EA6640',
    images: [
      'https://images.unsplash.com/photo-1581090700227-0b6b1a2a3f3f?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-0a8d8f55f8a2?w=1200&q=80&auto=format&fit=crop'
    ],
    tags: ['healthcare', 'data', 'visualization'],
  },
];

export default projects;
