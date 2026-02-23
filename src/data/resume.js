export const personal = {
  name: 'Sai Ganesh Kishore Babu',
  phone: '+1 (716)-491-1747',
  email: 'saiganesh04092000@gmail.com',
  linkedin: 'https://linkedin.com/in/sai-ganesh-k',
  github: 'https://github.com/Saiganesh',
  title: 'Software Engineer \u00B7 AI Solutions Architect',
  tagline:
    'I build robust, scalable software systems and AI-driven automation platforms. I specialize in cloud-native microservices, intelligent agent orchestration, and full-stack development\u2014turning complex infrastructure challenges into elegant, automated solutions.',
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Azure Certifications', value: '8' },
    { label: 'VMs Automated', value: '150+' },
  ],
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const experience = [
  {
    company: 'Northern Kytes',
    role: 'AI Solutions Engineer',
    client: 'Cona Services',
    location: 'Atlanta, Georgia',
    period: 'Jan 2025 \u2014 Present',
    bullets: [
      'Architected an end-to-end AI-driven Monthly Maintenance platform using MCP Server, multi-agent orchestration, and Azure Logic Apps, automating patch lifecycle management across 150+ VMs with zero manual intervention, reducing failure-handling time by 80%',
      'Designed fault-tolerant autonomous agents with retry logic, root cause isolation via log correlation, and self-healing workflows that detect patch failures, trigger rollback via Azure snapshots, and escalate unresolved issues to ServiceNow',
      'Automated a 16-step maintenance lifecycle \u2014 Network Isolation \u203A Pre-patch Snapshots \u203A Landesk Patch Deployment \u203A Compliance Validation \u203A Service Restoration \u2014 using Azure Resource Graph queries, parallel execution, and conditional branching',
      'Built a unified integration layer connecting Landesk REST APIs, Azure Monitor alerts, Azure Backup vaults, and ServiceNow incident APIs, enabling event-driven patching, real-time health monitoring, and automated rollback orchestration',
      'Reduced maintenance windows by 40% through intelligent scheduling, parallel VM processing with concurrency controls, and coordinated app validation workflows with dependency-aware restart sequencing',
    ],
    tags: ['MCP Server', 'Azure Logic Apps', 'AI Agents', 'ServiceNow', 'Python', 'REST APIs', 'Azure Resource Graph'],
  },
  {
    company: 'Neudesic Technologies, An IBM Company',
    role: 'Software Engineer',
    location: 'Bengaluru, India',
    period: 'Mar 2022 \u2014 Jan 2024',
    bullets: [
      'Developed 30+ modular microservices using Python (FastAPI) and SQLAlchemy, implementing route-level validation with Pydantic, async endpoints for non-blocking I/O, and unit tests with pytest, achieving 20% faster request processing',
      'Engineered AI-powered document ingestion pipeline using Azure Form Recognizer, deployed via Azure Functions on Blob Storage triggers; parsed unstructured PDFs into normalized SQL schema, cutting manual data entry by 40% in finance operations',
      'Refactored legacy .NET backends to Python FastAPI-based containerized services, creating Dockerfiles with multi-stage builds and Azure Pipelines YAML for CI/CD; increased deployment cadence from monthly to weekly with zero-downtime rollouts',
      'Implemented secure user authentication via OAuth 2.0 and JWT integration with Azure AD B2C; reduced token validation errors by 80% and unified auth logic across services',
      'Provisioned scalable cloud infrastructure using Azure App Services and Azure SQL with auto-scaling; optimized API performance achieving 99.99% uptime across 10K+ concurrent users and cutting response latency from 480ms to 330ms',
      'Integrated Azure Application Insights SDK for request traces, SQL dependency calls, and exception logging; built Azure Monitor dashboards reducing mean time to resolution by 40%',
    ],
    tags: ['Python', 'FastAPI', 'Docker', 'Azure', 'CI/CD', 'OAuth 2.0', 'Microservices', 'SQLAlchemy', 'Pydantic'],
  },
  {
    company: 'Torvalds Pvt Ltd.',
    role: 'Junior Software Developer',
    location: 'Bengaluru, India',
    period: 'Jan 2022 \u2014 Mar 2022',
    bullets: [
      'Architected front-end and back-end modules for a mobile application using Flutter and Flask (Python) APIs, resulting in 60% faster rendering and a 40% decrease in bounce rate',
      'Migrated backend logic to Google Cloud Functions using Python, decreasing infrastructure maintenance efforts by 30%',
      'Refactored ORM queries to raw SQL and added indexes; converted Flask routes to async def and used aiohttp for non-blocking API calls, cutting mobile API latency by 18ms under load',
      'Authored technical documentation and integration guides for 5+ core modules, reducing onboarding time by 25%',
    ],
    tags: ['Flutter', 'Flask', 'GCP', 'Python', 'SQL', 'REST APIs', 'aiohttp'],
  },
]

export const projects = [
  {
    title: 'VisionWave: Vision Based Gesture Recognition System',
    tech: 'Python, PyTorch, OpenCV, Flask, Docker',
    date: 'Jan 2025',
    bullets: [
      'Preprocessed 80K+ images using OpenCV (resizing, CLAHE, adaptive thresholding) and augmentation. Trained ResNet18, EfficientNet-B0, InceptionV3 in PyTorch with early stopping',
      'Optimized for edge deployment via mixed precision training (fp16) and post-training quantization, reducing model size and inference latency',
      'Containerized inference pipeline with FastAPI, deployed via Docker with GPU support, CORS policies, rate-limiting middleware',
      'Built real-time desktop client using OpenCV for webcam streaming achieving 20 FPS (GPU) / 8 FPS (CPU). 15% higher accuracy than MediaPipe under cluttered backgrounds',
    ],
  },
  {
    title: 'QuizVault: Secure Quiz Management Platform',
    tech: 'Angular, C#.NET, Azure SQL, Azure App Services, JWT, OAuth 2.0',
    date: 'Jul 2021',
    bullets: [
      'Designed quiz-taking interface with Angular route guards, role-based dashboards, and Reactive Forms validation with live countdown timers using RxJS',
      'Developed REST APIs with ASP.NET Core using controller-based routing, AutoMapper DTO mapping, and layered architecture. Designed normalized schemas with EF Core migrations',
      'Built secure invitation token system with time-bound, single-use JWTs embedded in quiz links',
      'Deployed to Azure App Services with CI/CD via Azure DevOps, custom domains, and HTTPS',
    ],
  },
]

export const skills = {
  'Programming Languages': ['Python', 'C++', 'C#', 'Java', 'JavaScript', 'TypeScript', 'Dart', 'SQL', 'HTML/CSS'],
  'Frameworks & Libraries': ['FastAPI', 'Flask', 'PyTorch', 'OpenCV', 'SQLAlchemy', 'ReactJS', 'Angular', 'Flutter', 'Xamarin', 'Entity Framework', 'ASP.NET'],
  Databases: ['MySQL', 'PostgreSQL', 'Azure SQL'],
  'Cloud & DevOps': ['Microsoft Azure', 'App Services', 'Logic Apps', 'Azure SQL', 'Blob Storage', 'Functions', 'Form Recognizer', 'Resource Graph', 'Application Insights', 'Monitor', 'Backup', 'AD B2C', 'Google Cloud Functions', 'AWS', 'Docker', 'Azure DevOps', 'GitHub Actions', 'CI/CD'],
  'Tools & Platforms': ['Git', 'MCP Server', 'ServiceNow', 'Linux', 'VS Code', 'SCRUM', 'Agile', 'Postman'],
  'Architecture & Concepts': ['Microservices', 'REST APIs', 'OAuth2', 'JWT', 'OOP', 'Async Programming', 'Distributed Systems', 'Data Pipelines', 'Machine Learning', 'AI Agents', 'Event-driven Architecture'],
}

export const certifications = [
  { name: 'AZ-900 Azure Fundamentals', issuer: 'Microsoft' },
  { name: 'AI-102 Azure AI Engineer Associate', issuer: 'Microsoft' },
  { name: 'AZ-204 Azure Developer Associate', issuer: 'Microsoft' },
  { name: 'AZ-104 Azure Administrator Associate', issuer: 'Microsoft' },
  { name: 'DP-500 Azure Enterprise Data Analyst Associate', issuer: 'Microsoft' },
  { name: 'AZ-400 DevOps Engineer Expert', issuer: 'Microsoft' },
  { name: 'PL-100 Power Platform App Maker Associate', issuer: 'Microsoft' },
  { name: 'CC0150EN Building Cloud Native Applications', issuer: 'IBM' },
]

export const education = [
  {
    school: 'University at Buffalo, The State University of New York',
    location: 'Buffalo, NY',
    degree: "Master's in Computer Science and Engineering",
    period: 'Jan 2024 \u2014 Jun 2025',
  },
  {
    school: 'Reva University',
    location: 'Bengaluru, India',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    period: 'Aug 2018 \u2014 Jun 2022',
  },
]
