export interface Job {
  id: string;
  title: string;
  type: 'Full-time' | 'Contract';
  location: string;
  description: string;
  imageUrl: string;
  requirements: string[];
  responsibilities: string[];
}

export const jobs: Job[] = [
  {
    id: 'senior-full-stack-developer',
    title: 'Senior Full-Stack Developer',
    type: 'Full-time',
    location: 'Remote',
    description: 'We are seeking an experienced Full-Stack Developer to join our innovative team. You will be responsible for designing, developing, and maintaining scalable web applications using modern technologies.',
    imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requirements: [
      '5+ years of experience in full-stack development',
      'Expert knowledge of React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS/Azure)',
      'Strong understanding of database design and optimization',
      'Excellent problem-solving and communication skills'
    ],
    responsibilities: [
      'Design and develop scalable web applications',
      'Collaborate with cross-functional teams',
      'Write clean, maintainable code',
      'Mentor junior developers',
      'Participate in code reviews and architecture discussions'
    ]
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Solutions Architect',
    type: 'Full-time',
    location: 'New York, NY',
    description: 'Join our team as a Cloud Solutions Architect and help our clients design and implement robust, scalable cloud infrastructure solutions across multiple cloud platforms.',
    imageUrl: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requirements: [
      '7+ years of experience in cloud architecture',
      'AWS and Azure certifications',
      'Deep knowledge of containerization and orchestration',
      'Experience with Infrastructure as Code',
      'Strong client-facing and presentation skills'
    ],
    responsibilities: [
      'Design cloud infrastructure solutions',
      'Lead cloud migration projects',
      'Provide technical guidance to development teams',
      'Conduct architecture reviews',
      'Stay current with cloud technology trends'
    ]
  },
  {
    id: 'machine-learning-engineer',
    title: 'Machine Learning Engineer',
    type: 'Full-time',
    location: 'San Francisco, CA',
    description: 'We are looking for a talented Machine Learning Engineer to develop and deploy AI/ML models that solve complex business problems and drive innovation.',
    imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requirements: [
      'Masters or PhD in Computer Science or related field',
      '4+ years of ML/AI experience',
      'Proficiency in Python, TensorFlow, and PyTorch',
      'Experience with MLOps and model deployment',
      'Strong mathematical and statistical background'
    ],
    responsibilities: [
      'Develop and train machine learning models',
      'Deploy models to production environments',
      'Optimize model performance and accuracy',
      'Collaborate with data scientists and engineers',
      'Research and implement new ML techniques'
    ]
  },
  {
    id: 'devops-engineer-contract',
    title: 'DevOps Engineer',
    type: 'Contract',
    location: 'Remote',
    description: 'Contract opportunity for an experienced DevOps Engineer to implement and maintain CI/CD pipelines and infrastructure automation for enterprise clients.',
    imageUrl: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requirements: [
      '5+ years of DevOps experience',
      'Expert in CI/CD tools (Jenkins, GitLab, GitHub Actions)',
      'Strong knowledge of containerization (Docker, Kubernetes)',
      'Experience with monitoring and logging tools',
      'Scripting skills in Python or Bash'
    ],
    responsibilities: [
      'Build and maintain CI/CD pipelines',
      'Automate infrastructure provisioning',
      'Implement monitoring and alerting systems',
      'Optimize deployment processes',
      'Troubleshoot production issues'
    ]
  },
  {
    id: 'ui-ux-designer',
    title: 'Senior UI/UX Designer',
    type: 'Full-time',
    location: 'Austin, TX',
    description: 'Create beautiful, intuitive user experiences for web and mobile applications. We need a creative designer who understands both aesthetics and usability.',
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requirements: [
      '5+ years of UI/UX design experience',
      'Expert in Figma and Adobe Creative Suite',
      'Strong portfolio demonstrating design skills',
      'Understanding of design systems and accessibility',
      'Experience with user research and testing'
    ],
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity designs',
      'Conduct user research and usability testing',
      'Develop and maintain design systems',
      'Collaborate with developers and product managers',
      'Present design concepts to stakeholders'
    ]
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    type: 'Full-time',
    location: 'Washington, DC',
    description: 'Protect our clients digital assets by monitoring security systems, conducting assessments, and responding to security incidents.',
    imageUrl: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requirements: [
      '4+ years of cybersecurity experience',
      'Security certifications (CISSP, CEH, or similar)',
      'Knowledge of security frameworks and standards',
      'Experience with SIEM and security tools',
      'Strong analytical and problem-solving skills'
    ],
    responsibilities: [
      'Monitor security systems and networks',
      'Conduct security assessments and audits',
      'Respond to security incidents',
      'Implement security best practices',
      'Create security documentation and reports'
    ]
  },
  {
    id: 'data-scientist-contract',
    title: 'Data Scientist',
    type: 'Contract',
    location: 'Boston, MA',
    description: '6-month contract for a Data Scientist to analyze complex datasets, build predictive models, and provide actionable insights for business decisions.',
    imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requirements: [
      'Masters degree in Data Science or related field',
      '3+ years of data science experience',
      'Proficiency in Python, R, and SQL',
      'Experience with data visualization tools',
      'Strong statistical analysis skills'
    ],
    responsibilities: [
      'Analyze large datasets to identify trends',
      'Build predictive models and algorithms',
      'Create data visualizations and dashboards',
      'Present findings to stakeholders',
      'Collaborate with business teams'
    ]
  },
  {
    id: 'mobile-developer',
    title: 'Mobile App Developer',
    type: 'Full-time',
    location: 'Seattle, WA',
    description: 'Develop high-quality native and cross-platform mobile applications for iOS and Android. Join a team building cutting-edge mobile experiences.',
    imageUrl: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requirements: [
      '4+ years of mobile development experience',
      'Expertise in React Native or Flutter',
      'Knowledge of native iOS (Swift) and Android (Kotlin)',
      'Experience with mobile app deployment',
      'Understanding of mobile UI/UX principles'
    ],
    responsibilities: [
      'Develop mobile applications for iOS and Android',
      'Implement new features and functionality',
      'Optimize app performance',
      'Work with designers and backend developers',
      'Maintain and update existing applications'
    ]
  },
  {
    id: 'project-manager-contract',
    title: 'Technical Project Manager',
    type: 'Contract',
    location: 'Chicago, IL',
    description: 'Lead complex technology projects from inception to delivery. This contract role requires strong technical background and excellent communication skills.',
    imageUrl: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requirements: [
      '6+ years of project management experience',
      'PMP or Agile certification preferred',
      'Technical background in software development',
      'Experience with project management tools',
      'Excellent stakeholder management skills'
    ],
    responsibilities: [
      'Manage project timelines and deliverables',
      'Coordinate cross-functional teams',
      'Communicate with clients and stakeholders',
      'Identify and mitigate project risks',
      'Ensure project quality and success'
    ]
  }
];
