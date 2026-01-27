
import { Project, LearningItem, Note } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'video-engagement',
    title: 'Beyond Keywords: Driving Video Engagement via Semantic AI',
    challenge: 'The client needed to tag a library of 10,000+ videos without the manual effort that made tagging slow and subjective.',
    result: 'A hybrid ML pipeline that delivers high-engagement keywords in seconds, saving 50,000 minutes of manual effort.',
    expandedDescription: 'I led and mentored the implementation of a hybrid keyword extraction engine. By blending KeyBERT embeddings for semantic context with a custom Engagement Scoring model, the system identifies keywords that are both relevant and high-performing. The architecture bridges the gap between Google and AWS environments, syncing historical engagement data.',
    role: 'Mentor & Lead',
    stack: 'KeyBERT, AWS, Google Cloud',
    imageUrl: '',
    isMentoring: true,
    isLead: true,
    tags: ['NLP', 'Strategy', 'MLOps']
  },
  {
    id: 'video-summarization',
    title: 'Intelligent Content Digest: AI-Powered Video Summarization',
    challenge: 'Users often lack the time to watch long-form video content to find key information, creating a need for a tool that extracts core insights instantly.',
    result: 'A streamlined web application that leverages Large Language Models (LLMs) to transform video URLs into concise, structured text summaries.',
    expandedDescription: 'I built an end-to-end application that automates the extraction of knowledge from video content. By integrating OpenAI’s GPT models with a Streamlit frontend, the tool processes video transcripts to generate structured summaries, including key takeaways and action items. I implemented a robust processing pipeline that handles transcript retrieval and prompt engineering.',
    role: 'Developer',
    stack: 'OpenAI GPT, Streamlit, Python',
    imageUrl: '',
    githubUrl: 'https://github.com/anna-hernandez/video-summarizer',
    isIC: true,
    isLead: true,
    tags: ['NLP', 'LLMs', 'Gen AI']
  },
  {
    id: 'bayesian-modeling',
    title: 'Bayesian Modeling: Predicting Audience Demographics with Uncertainty',
    challenge: 'The team needed to better understand and target their audience to improve ad sales without relying on point-prediction models.',
    result: 'A Bayesian inference engine that boosted early viewer retention by 8% and increased click-through rates by up to 8%.',
    expandedDescription: 'I built a Bayesian partial pooling inference model to predict audience age and gender across video channels. Unlike traditional classifiers, this approach utilized hierarchical data structures to provide clear uncertainty metrics, making it ideal for videos with rare observations. By deploying this model, the client achieved a significant uplift in engagement metrics.',
    role: 'Lead Data Scientist',
    stack: 'PyMC3, Bayesian Stats, Python',
    imageUrl: '',
    isIC: true,
    isLead: true,
    tags: ['Bayesian Statistics', 'Statistics']
  },
  {
    id: 'gen-ai-governance',
    title: 'Responsible AI: Building a Secure Gen AI Governance Framework',
    challenge: 'Implementing a cross-company AI strategy that respects intellectual property rights and ethical boundaries in a high-stakes industry.',
    result: 'A robust governance system including data audits, access controls, and a cross-functional AI committee.',
    expandedDescription: 'I spearheaded a decentralized AI governance strategy that prioritized IP protection and brand integrity. This involved establishing a cross-functional AI committee and implementing rigorous technical safeguards, literacy initiatives, and continuous feedback tools. This framework successfully protected the client\'s legal standing while fostering a culture of safe innovation.',
    role: 'AI Strategist',
    stack: 'Governance, Ethics, Python',
    imageUrl: '',
    tags: ['AI Strategy', 'Gen AI']
  },
  {
    id: 'mlops-production',
    title: 'From Days to Minutes: Scaling ML Production',
    challenge: 'The team needed to increase deployment throughput and model reliability while dealing with legacy code and limited bandwidth.',
    result: 'A robust MLOps ecosystem that moved the team from quarterly to monthly deployments.',
    expandedDescription: 'I led the transition from manual, error-prone model deployments to a fully automated MLOps ecosystem. By implementing a custom CI/CD pipeline using GitHub Actions, SageMaker, and Infrastructure as Code, I reduced deployment times from several days to under an hour. This shift not only reduced manual effort by 90% but also slashed production error rates from 20% to just 2%.',
    role: 'MLOps Lead',
    stack: 'GitHub Actions, SageMaker, AWS',
    imageUrl: '',
    isIC: true,
    isLead: true,
    tags: ['MLOps', 'Serverless Architecture']
  },
  {
    id: 'hybrid-search',
    title: 'Mastering Retrieval: Semantic, Keyword, and Hybrid Search',
    challenge: 'Choosing the wrong search method leads to hallucinations. I built this to move beyond "one-size-fits-all" RAG.',
    result: 'A modular RAG implementation using pgvector and PostgreSQL Full-Text Search benchmarking Keyword, Semantic, and Hybrid retrieval.',
    expandedDescription: 'This project is a deep dive into high-performance data retrieval. I built this system using PostgreSQL and pgvector to demonstrate the power of Hybrid Search. By combining semantic vector similarity with traditional Full-Text Search (FTS), the engine captures both the "meaning" of a query and exact keywords. Features a centralized config module and Docker Compose environment.',
    role: 'RAG Engineer',
    stack: 'PostgreSQL, pgvector, Docker',
    imageUrl: '',
    githubUrl: 'https://github.com/anna-hernandez/hybrid-search-study',
    isIC: true,
    isLead: true,
    tags: ['NLP', 'LLMs', 'Vector DB']
  },
  {
    id: 'pharmaceutical-nlp',
    title: 'Automating Pharmaceutical Intelligence with NLP',
    challenge: 'The client faced a massive volume of medical literature that required manual, resource-intensive matching to internal databases.',
    result: 'A deployed system that automated over 85% of drug-disease matching, reducing curator manual effort by 70%.',
    expandedDescription: 'I worked on an automation system to link drug names, diseases, and efficacy endpoints across disparate medical sources. By combining rule-based matching with supervised classifiers and Named Entity Recognition (NER), we enabled the client to identify previously unrecorded drugs in development. This serverless architecture transformed the data pipeline into a scalable asset.',
    role: 'Technical Lead',
    stack: 'NER, NLP, Serverless',
    imageUrl: '',
    isIC: true,
    tags: ['NLP', 'Serverless Architecture']
  },
  {
    id: 'serverless-llm',
    title: 'Scalable Sentiment: Production-Ready Serverless LLMs',
    challenge: 'A proof-of-concept to transform unstructured reviews into actionable data without high manual costs or ignoring vital engineering parts.',
    result: 'A containerized Lambda architecture that combines advanced Prompt Engineering with a professional DevOps workflow.',
    expandedDescription: 'I developed this serverless pipeline to explore the intersection of LLMs (Amazon Bedrock) and Cloud Native architecture. The project features a containerized AWS Lambda function that triggers on S3 uploads, parses CSV data, and manages API handshakes with the AI21 Jurassic model. The entire lifecycle is automated with a GitHub Actions CI/CD pipeline.',
    role: 'Cloud Architect',
    stack: 'AWS Lambda, Bedrock, Docker',
    imageUrl: '',
    githubUrl: 'https://github.com/anna-hernandez/serverless-sentiment',
    isIC: true,
    isLead: true,
    tags: ['Gen AI', 'MLOps', 'Serverless Architecture']
  }
];

export const LEARNING_INITIATIVES: LearningItem[] = [
  {
    id: 'L1',
    category: 'Currently exploring',
    title: 'Geometric Deep Learning',
    description: 'Investigating graph neural networks for molecular structure analysis in green hydrogen production.'
  },
  {
    id: 'L2',
    category: 'Recently completed',
    title: 'DeepLearning.AI: AI for Good Specialization',
    description: 'Strengthened focus on applying ML to climate change mitigation and circular economy models.'
  },
  {
    id: 'L3',
    category: 'Currently exploring',
    title: 'Rust for Data Systems',
    description: 'Transitioning performance-critical data pipelines from Python to Rust for lower latency.'
  }
];

export const NOTES: Note[] = [
  {
    id: 'N1',
    title: 'The "Coffee Shop" Test for AI Readiness',
    excerpt: 'How to tell if your industrial process is ready for automation without looking at a single line of code.',
    date: 'Oct 2024',
    url: '#'
  },
  {
    id: 'N2',
    title: 'Why Sustainability is the Next Frontier for Data Science',
    excerpt: 'A deep dive into why data practitioners are the essential architects of the circular economy.',
    date: 'Aug 2024',
    url: '#'
  }
];
