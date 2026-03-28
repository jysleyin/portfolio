import enchantedwhispers from '../assets/enchantedwhispers.png'
import benefitbridge from '../assets/benefitbridge.png'
import benefitbridge2 from '../assets/benefitbridge2.png'
import benefitbridgeModel from '../assets/benefitbridge-model.png'
import slides1 from '../assets/slides1.png'
import slides2 from '../assets/slides2.png'
import slides3 from '../assets/slides3.png'

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
      benefitbridgeModel,
      benefitbridge2,
    ],
    tags: ['react native', 'dynamoDB', 'fast api', 'azure ai'],
  },
  {
    slug: 'enchanted-whispers',
    title: 'Enchanted Whispers',
    date: 'Spring 2024',
    desc: 'A personality-based career quiz enhanced with a mythical visual identity and interactive storytelling to inspire users to explore and reflect on their career interests.',
    problem: 'It can be difficult to motivate students to explore different career paths, as many are unsure where to start or lack engaging resources.',
    color: '#000000',
    images: [
      enchantedwhispers,
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1200&q=80&auto=format&fit=crop'
    ],
    goal: [
      'Explore a unique, mythical theme to make career exploration more engaging and memorable',
      'Encourage self-reflection through interactive storytelling',

    ],
    tags: ['quiz', 'design', 'storytelling'],
  },
  {
    slug: 'forever-health',
    title: 'Forever Health',
    date: 'Summer 2024',
    desc: 'A case study exploring a platform solution that improves patient data accessibility for healthcare institutions, emphasizing workflow efficiency and user-centric data visualization.',
    color: '#EA6640',
    problem: 'Many hospitals face a common challenge: medical records are difficult to navigate, making it time-consuming for healthcare professionals to access critical patient information, increasing the risk of errors, and ultimately impacting the quality of patient care.',
    solution: 'Meet Forever Health, a mock-up solution addressing the growing challenge of securely storing patient information in the healthcare industry.',
    goal: [
      'Enhance patient autonomy',
      'Strengthen data security',
      'Ensure easy & equitable accessibility'
    ],
    images: [
      slides1,
      slides2,
      slides3
    ],
    tags: ['healthcare', 'data', 'visualization'],
    reflection: `As patient databases expand, Forever Health aims to revolutionize electronic medical records (EMR) by leveraging AI and web3/blockchain technology. This patient-centric platform is designed to alleviate the workload on healthcare providers while enhancing patient autonomy, ensuring both efficiency and robust data security.

To explore innovative solutions, I began by researching real-world applications of web3 and blockchain in the medical industry. I also conducted interviews with a diverse range of stakeholders—including patients, nurses, front-desk staff, and technology experts—to gather valuable insights from multiple perspectives. These conversations helped me better understand the unique challenges and opportunities in healthcare data management, and informed the design of a platform that prioritizes both user experience and security.
`,
      uniqueness: [
        'Forever Health combines AI and web3/blockchain to create a secure, patient-centric EMR platform.',
        'Web3/blockchain enables easy, permission-based access to health data, empowering patients and simplifying care for providers and home aides.',
        'Patients can grant or revoke access to their records for specialists or caretakers, maintaining control over their information.',
        'All health data is encrypted before storage on the blockchain, ensuring only patients and authorized parties can decrypt it.',
        'The platform features account switching, AI assistants, medical records, and user info, all designed for simplicity and accessibility.',
        'Special attention is given to elderly users, with larger fonts and a voice assistant (“SIRI”-like) to make setup and navigation easier, ideally with help from medical specialists.'
      ],
  },
];

export default projects;
