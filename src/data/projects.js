import thebuttonStage from '../assets/thebutton-1.jpg'
import thebuttonAudience from '../assets/thebutton-2.jpg'
import thebuttonContestants from '../assets/thebutton-3.jpg'
import enchantedwhispers from '../assets/enchantedwhispers.png'
import benefitbridge from '../assets/benefitbridge.png'
import benefitbridge2 from '../assets/benefitbridge2.png'
import benefitbridgeModel from '../assets/benefitbridge-model.png'
import benefitbridgeSurvey from '../assets/benefitbridge-survey.png'
import benefitbridgeWallet from '../assets/benefitbridge-wallet.png'
import benefitbridgeCategory from '../assets/benefitbridge-category.png'
import slides1 from '../assets/slides1.png'
import slides2 from '../assets/slides2.png'
import slides3 from '../assets/slides3.png'
import thebuttonVoting from '../assets/2.png'
import thebuttonDashboard from '../assets/3.png'
import thebuttonLetters from '../assets/4.png'

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
    gallery: [],
    // case study page
    subtitle: 'A mobile app that matches people with benefit plans and vendors that fit their priorities.',
    role: 'Frontend lead and Scrum Master',
    team: '10 interns',
    stack: 'React Native, FastAPI, Azure, DynamoDB',
    problemLead: 'There are plenty of benefits out there, but people struggle to figure out which ones actually fit their needs.',
    built: 'An app that learns what each person cares about, recommends matching plans and vendors, and lets them save favorites to come back to.',
    features: [
      { title: 'Personalized matching', body: 'Recommends plans based on each person’s preferences.', image: benefitbridgeSurvey },
      { title: 'AI-powered virtual wallet', body: 'Save and revisit vendors, with data managed in DynamoDB.', image: benefitbridgeWallet },
      { title: 'Comparative analytics', body: 'Pick a category and see the top contender benefit that best matches your needs.', image: benefitbridgeCategory },
    ],
    roles: [
      { title: 'Frontend lead', body: 'Turned ideas from team brainstorms into designs in Figma, then built and refined them in React Native.' },
      { title: 'Scrum Master', body: 'Ran weekly sprints for the team, with planning on Mondays and reviews on Fridays, and tracked every task’s progress, priority, and type on Kanban boards.' },
    ],
    learned: `Twelve weeks sounds like a lot of time, until you’re trying to take an idea all the way to something that’s actually live. At the start we had more ideas than we could ever build, and one of the hardest parts was deciding what we could really do well in the time we had.

What stuck with me most was the gap between a design and a working app. A screen could look finished in Figma and still need a lot of work before it held up in React Native, on a real phone, connected to everything else the team was building. I started designing with that in mind, and it made me a better frontend developer.

Getting BenefitBridge deployed wasn’t one big moment. It was a lot of small ones: checking in with each other, adjusting every sprint, and trusting everyone to finish their part. Seeing it go live at the end made all twelve weeks feel worth it.`,
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
    tags: ['figma', 'canva'],
    stack: 'Figma, Canva',
    stackLabel: 'Tools',
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
  {
    slug: 'rxmatch',
    title: 'RxMatch',
    date: 'TBD',
    desc: 'TBD',
    problem: 'TBD',
    solution: 'TBD',
    goal: [],
    color: '#000000',
    images: [],
    tags: [],
    comingSoon: true,
  },
  {
    slug: 'the-button',
    title: 'The Button',
    date: 'Spring 2026',
    desc: 'What happens when you give strangers five minutes and a button? A remake of The Button, the live dating show inspired by The Cut, hosted by Class Activities Board. A real-time web app lets audience members send letters of appreciation to contestants and vote for their favorite matches, turning everyone watching into part of the show.',
    problem: 'Student events are usually something you just show up to. We wanted to bring a new kind of connection to campus and rethink what a student event could look like, not just for the people on stage, but for everyone watching.',
    solution: 'Class Activities Board hosted a remake of The Button, a live dating show inspired by The Cut. I organized the event and presented it as the main host, and built a web app so audience members could send letters of appreciation to contestants and vote for their favorite matches in real time.',
    role: 'Host, Event Organizer, and Developer',
    goal: [
      'Bring a new kind of connection to campus',
      'Make the audience part of the event, not just the people on stage',
      'Let audience members send letters of appreciation and vote in real time',
    ],
    link: 'https://lnkd.in/eEAHt8vn',
    linkLabel: 'Featured in Washington Square News',
    color: '#EA6640',
    images: [thebuttonAudience, thebuttonStage, thebuttonContestants],
    tags: ['web app', 'live event'],
    subtitle: 'A live dating show remake where the audience gets a say, powered by a real-time web app.',
    stats: [
      { value: '200+', label: 'Live audience members' },
      { value: '300+', label: 'Viewers on Instagram Live' },
      { value: 'NYU-wide', label: 'Broadcast to the entire student body' },
    ],
    featuresFilled: true,
    built: 'We built a live web app so the audience could be part of the storyline, not just watch it. From their seats, everyone in the room could shape what happened on stage.',
    features: [
      { title: 'Live voting', image: thebuttonVoting, body: 'Audience members voted for their favorite couples on stage, and the leaderboard updated live as the votes came in.' },
      { title: 'Letters to contestants', image: thebuttonLetters, body: 'Anyone could write a letter to the contestants. Each contestant got a unique code to open their own mailbox, and every letter opened with a little animation.' },
      { title: 'Admin approval', image: thebuttonDashboard, body: 'An admin view let us pre-approve every letter before it was sent out to the contestants.' },
    ],
    roles: [
      { title: 'Host', body: 'Presented the show live on stage as the main host, guiding contestants and the audience through every round.' },
      { title: 'Event organizer', body: 'Organized the event with Class Activities Board, from planning the show to bringing it to life on the night.' },
      { title: 'Developer', body: 'Brought my love for technology into the event by building the web app, so the audience could vote and send letters in real time.' },
    ],
    gallery: [thebuttonStage, thebuttonContestants],
    impact: 'The feedback was positive, and we think it’s because every person was involved. Not just the contestants on stage, but everyone voting and writing letters from their seats. It was a new way to bring engagement to campus, one that hadn’t been explored before.',
  },
];

export default projects;
