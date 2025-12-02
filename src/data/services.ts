export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  technologies: string[];
  imageUrl: string;
  category: string;
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    category: 'Development',
    description: 'Create stunning, high-performance web applications that engage users and drive business growth. We build responsive, scalable solutions using modern frameworks and best practices.',
    benefits: [
      'Mobile-first responsive design',
      'Lightning-fast page load times',
      'SEO-optimized architecture',
      'Cross-browser compatibility',
      'Progressive Web App capabilities'
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Node.js', 'GraphQL'],
    imageUrl: 'https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'ai-bot-development',
    title: 'AI Bot Development',
    category: 'AI & Automation',
    description: 'Build intelligent chatbots and virtual assistants powered by advanced AI and NLP. Automate customer support, streamline operations, and provide 24/7 engagement.',
    benefits: [
      'Natural language understanding',
      '24/7 automated customer support',
      'Multi-platform integration (Web, Slack, Teams, WhatsApp)',
      'Context-aware conversations',
      'Seamless human handoff when needed'
    ],
    technologies: ['OpenAI GPT', 'LangChain', 'Rasa', 'Dialogflow', 'Python', 'Node.js'],
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    category: 'Infrastructure',
    description: 'Transform your business with scalable, secure cloud infrastructure. We provide end-to-end cloud migration, implementation, and management services across AWS, Azure, and Google Cloud platforms.',
    benefits: [
      'Reduced infrastructure costs by up to 40%',
      '99.99% uptime guarantee',
      'Automatic scaling based on demand',
      '24/7 monitoring and support',
      'Enhanced security and compliance'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
    imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    category: 'AI & Automation',
    description: 'Leverage the power of artificial intelligence and machine learning to automate processes, gain insights, and make data-driven decisions. Our experts build custom AI solutions tailored to your business needs.',
    benefits: [
      'Automated decision-making processes',
      'Predictive analytics for business forecasting',
      'Natural language processing capabilities',
      'Computer vision implementations',
      'Custom model training and deployment'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Hugging Face', 'MLflow'],
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    category: 'Development',
    description: 'Build native and cross-platform mobile applications that deliver exceptional user experiences. From concept to deployment, we create apps that users love.',
    benefits: [
      'Native iOS and Android development',
      'Cross-platform solutions with React Native',
      'Seamless backend integration',
      'App Store optimization',
      'Post-launch support and updates'
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase', 'Redux'],
    imageUrl: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'e-commerce-solutions',
    title: 'E-Commerce Solutions',
    category: 'Development',
    description: 'Launch and scale your online store with custom e-commerce solutions. We build secure, high-converting platforms with seamless payment integration and inventory management.',
    benefits: [
      'Custom shopping cart development',
      'Secure payment gateway integration',
      'Inventory and order management',
      'Multi-vendor marketplace capabilities',
      'Analytics and reporting dashboards'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal', 'React'],
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'blockchain-development',
    title: 'Blockchain Development',
    category: 'Emerging Tech',
    description: 'Harness the power of blockchain technology for secure, transparent, and decentralized solutions. From smart contracts to DeFi applications, we build the future of digital trust.',
    benefits: [
      'Smart contract development and auditing',
      'Decentralized application (DApp) creation',
      'NFT marketplace development',
      'Cryptocurrency wallet integration',
      'Blockchain consulting and strategy'
    ],
    technologies: ['Ethereum', 'Solidity', 'Web3.js', 'Hardhat', 'IPFS', 'Polygon'],
    imageUrl: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    category: 'Security',
    description: 'Protect your digital assets with comprehensive security solutions. We provide penetration testing, security audits, and ongoing monitoring to keep your business safe from threats.',
    benefits: [
      'Advanced threat detection and prevention',
      'Compliance with industry standards',
      'Regular security audits and assessments',
      'Incident response and recovery',
      'Employee security training programs'
    ],
    technologies: ['SIEM', 'Firewall', 'IDS/IPS', 'Encryption', 'Zero Trust', 'SOC'],
    imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'devops',
    title: 'DevOps & CI/CD',
    category: 'Infrastructure',
    description: 'Streamline your development and deployment processes with modern DevOps practices. We implement automated pipelines, continuous integration, and delivery systems for faster, more reliable releases.',
    benefits: [
      'Faster time to market',
      'Reduced deployment failures',
      'Automated testing and quality assurance',
      'Infrastructure as Code',
      'Continuous monitoring and feedback'
    ],
    technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Ansible', 'Prometheus', 'Grafana'],
    imageUrl: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    category: 'Data Science',
    description: 'Turn your data into actionable insights with advanced analytics and visualization. We help you understand your data, identify trends, and make informed business decisions.',
    benefits: [
      'Real-time data visualization dashboards',
      'Predictive analytics and forecasting',
      'Business intelligence reporting',
      'Data warehouse implementation',
      'Custom analytics solutions'
    ],
    technologies: ['Power BI', 'Tableau', 'Python', 'R', 'Apache Spark', 'Snowflake'],
    imageUrl: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'iot-solutions',
    title: 'IoT Solutions',
    category: 'Emerging Tech',
    description: 'Connect your devices and systems with cutting-edge Internet of Things solutions. We design and implement IoT ecosystems that drive efficiency and innovation.',
    benefits: [
      'Real-time device monitoring',
      'Predictive maintenance capabilities',
      'Remote device management',
      'Data collection and analysis',
      'Scalable IoT architecture'
    ],
    technologies: ['MQTT', 'Azure IoT', 'AWS IoT', 'Edge Computing', 'Sensors', 'Raspberry Pi'],
    imageUrl: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    category: 'Design',
    description: 'Create beautiful, intuitive user experiences that delight customers and drive engagement. Our design team combines aesthetics with usability to craft memorable digital products.',
    benefits: [
      'User research and persona development',
      'Wireframing and prototyping',
      'Design system creation',
      'Accessibility compliance',
      'Usability testing and iteration'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];
