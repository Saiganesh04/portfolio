export const personal = {
  name: 'Sai Ganesh Kishore Babu',
  phone: '+1 (716)-491-1747',
  email: 'saiganesh04092000@gmail.com',
  linkedin: 'https://linkedin.com/in/sai-ganesh-k',
  github: 'https://github.com/Saiganesh',
  headline: "I ship apps used by 220,000+ stores.",
  description: 'iOS Engineer + Cloud Architect. I build mobile apps that serve hundreds of thousands of users and the infrastructure that powers them.',
}

export const stats = [
  { value: '220,000+', label: 'Retail stores served', color: '#22d3ee' },
  { value: '150+', label: 'VMs automated', color: '#818cf8' },
  { value: '99.99%', label: 'Uptime achieved', color: '#34d399' },
  { value: '30+', label: 'Microservices shipped', color: '#fbbf24' },
]

export const experienceTabs = [
  {
    tab: 'myCoke iOS',
    company: 'Northern Kytes',
    client: 'CONA Services',
    role: 'iOS Developer',
    location: 'Atlanta, GA',
    period: 'Oct 2024 \u2013 Present',
    headline: 'myCoke app \u2014 220K+ retail stores across North America',
    metrics: [
      { value: '220K+', label: 'Stores Served' },
      { value: '25%', label: '\u2191 Orders' },
      { value: '35%', label: '\u2193 Processing' },
      { value: '85%+', label: 'Coverage' },
    ],
    tags: ['Swift', 'SwiftUI', 'Combine', 'CoreData', 'Salesforce APIs', 'Fiserv SDK', 'XCTest', 'Fastlane'],
  },
  {
    tab: 'AI Platform',
    company: 'Northern Kytes',
    client: 'CONA Services',
    role: 'AI Solutions Engineer',
    location: 'Atlanta, GA',
    period: 'Jan 2025 \u2013 Present',
    headline: 'Automated patch lifecycle across 150+ VMs with zero manual intervention',
    metrics: [
      { value: '150+', label: 'VMs' },
      { value: '80%', label: '\u2193 Failures' },
      { value: '40%', label: '\u2193 Windows' },
      { value: '16', label: 'Steps' },
    ],
    tags: ['MCP Server', 'AI Agents', 'Azure Logic Apps', 'ServiceNow', 'Python', 'REST APIs'],
  },
  {
    tab: 'Neudesic \u00b7 IBM',
    company: 'Neudesic Technologies, An IBM Company',
    role: 'Software Engineer',
    location: 'Bengaluru, India',
    period: 'Mar 2022 \u2013 Jan 2024',
    headline: 'Cross-platform mobile + cloud microservices serving 10K+ concurrent users',
    metrics: [
      { value: '30+', label: 'Services' },
      { value: '99.99%', label: 'Uptime' },
      { value: '40%', label: '\u2193 Manual' },
      { value: '80%+', label: 'Coverage' },
    ],
    tags: ['Xamarin', 'C#/.NET', 'FastAPI', 'Docker', 'Azure', 'CI/CD', 'OAuth 2.0'],
  },
  {
    tab: 'Torvalds',
    company: 'Torvalds Pvt Ltd.',
    role: 'Junior Mobile Developer',
    location: 'Bengaluru, India',
    period: 'Jan 2022 \u2013 Mar 2022',
    headline: 'Cross-platform mobile app with 60% faster rendering',
    metrics: [
      { value: '60%', label: 'Faster' },
      { value: '40%', label: '\u2193 Bounce' },
      { value: '30%', label: '\u2193 Infra' },
      { value: '18ms', label: 'Cut' },
    ],
    tags: ['Flutter', 'Dart', 'Flask', 'GCP', 'Python', 'aiohttp'],
  },
]

export const projects = [
  {
    title: 'VisionWave',
    subtitle: 'Real-Time Gesture Recognition',
    icon: '\ud83e\udd16',
    color: '#22d3ee',
    stats: ['20 FPS', '+15%', 'On-device'],
    statLabels: ['Real-time', 'Accuracy', 'Inference'],
    tech: ['Swift', 'CoreML', 'Vision', 'Python', 'PyTorch', 'OpenCV', 'FastAPI', 'Docker'],
    description: 'iOS app with CoreML + Vision for on-device inference, plus a Python pipeline with PyTorch (ResNet18, EfficientNet-B0, InceptionV3) trained on 80K+ images. 15% more accurate than MediaPipe under poor lighting.',
  },
  {
    title: 'QuizVault',
    subtitle: 'Secure Quiz Platform',
    icon: '\ud83d\udd10',
    color: '#818cf8',
    stats: ['FaceID', 'JWT', 'CI/CD'],
    statLabels: ['Auth', 'Security', 'Pipeline'],
    tech: ['Swift', 'SwiftUI', 'Combine', 'CoreData', 'AWS Lambda', 'DynamoDB', 'OAuth2', 'XCTest'],
    description: 'SwiftUI + Combine iOS app with MVVM, biometric login, and real-time quiz timers. Express.js backend on AWS Lambda + DynamoDB with secure single-use time-bound JWT invitations.',
  },
]

export const skills = {
  Mobile: ['Swift', 'SwiftUI', 'UIKit', 'Combine', 'Core Data', 'CoreML', 'Vision', 'AVFoundation', 'WidgetKit', 'Flutter', 'Xamarin', 'Dart'],
  Backend: ['Python', 'FastAPI', 'Flask', 'Node.js', 'Express.js', 'C#', 'ASP.NET', 'GraphQL', 'REST APIs', 'Salesforce APIs'],
  Cloud: ['AWS Lambda', 'S3', 'API Gateway', 'DynamoDB', 'Azure App Services', 'Functions', 'Logic Apps', 'DevOps', 'AD B2C', 'GCP', 'Docker', 'CI/CD', 'Fastlane', 'TestFlight'],
  Core: ['Swift', 'Objective-C', 'Python', 'C++', 'C#', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'MVVM', 'Clean Architecture', 'Microservices', 'OAuth2/JWT'],
}

export const skillColors = {
  Mobile: '#22d3ee',
  Backend: '#818cf8',
  Cloud: '#a78bfa',
  Core: '#34d399',
}

export const certifications = [
  { name: 'AWS Solutions Architect \u2013 Associate (SAA-C03)', issuer: 'AWS', color: '#fbbf24' },
  { name: 'AWS Developer \u2013 Associate (DVA-C02)', issuer: 'AWS', color: '#fbbf24' },
  { name: 'AI-102 Azure AI Engineer Associate', issuer: 'Microsoft', color: '#22d3ee' },
  { name: 'AZ-204 Azure Developer Associate', issuer: 'Microsoft', color: '#22d3ee' },
  { name: 'AZ-104 Azure Administrator Associate', issuer: 'Microsoft', color: '#22d3ee' },
  { name: 'AZ-400 DevOps Engineer Expert', issuer: 'Microsoft', color: '#22d3ee' },
  { name: 'DP-500 Enterprise Data Analyst Associate', issuer: 'Microsoft', color: '#22d3ee' },
  { name: 'AZ-900 Azure Fundamentals', issuer: 'Microsoft', color: '#22d3ee' },
  { name: 'PL-100 Power Platform App Maker Associate', issuer: 'Microsoft', color: '#22d3ee' },
  { name: 'CC0150EN Building Cloud Native Applications', issuer: 'IBM', color: '#818cf8' },
]

export const education = [
  {
    school: 'University at Buffalo, SUNY',
    degree: 'MS in Computer Science & Engineering',
    period: 'Jan 2024 \u2013 Jun 2025',
  },
  {
    school: 'Reva University',
    degree: 'BTech in Computer Science & Engineering',
    period: 'Aug 2018 \u2013 Jun 2022',
  },
]
