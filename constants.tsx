
import { Project, LearningItem, Note } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Predictive Maintenance for Offshore Wind',
    context: 'Energy & Sustainability sector; addressing the high cost of manual inspections in harsh environments.',
    role: 'Lead Data Scientist overseeing model architecture and field deployment strategy.',
    approach: [
      'Developed a multi-modal temporal convolution network using SCADA and vibration sensor data.',
      'Implemented an anomaly detection layer to flag potential bearing failures up to 30 days in advance.',
      'Designed a human-in-the-loop dashboard for maintenance engineers.'
    ],
    results: 'Reduced unplanned downtime by 22% and saved approximately €1.4M in annual maintenance overhead for the pilot farm.',
    stack: 'Python, PyTorch, Azure IoT Hub, Spark, D3.js'
  },
  {
    id: '2',
    title: 'Supply Chain LLM Ambassador',
    context: 'Industrial Manufacturing; bridging the gap between legacy ERP data and natural language queries.',
    role: 'AI Strategist and Technical Lead.',
    approach: [
      'Built a RAG (Retrieval-Augmented Generation) system connected to internal supply chain documentation.',
      'Fine-tuned an open-source model to understand specific industrial terminology and part taxonomies.',
      'Created an AI governance framework for safe deployment across global offices.'
    ],
    results: 'Decreased internal part-search time by 60% and enabled non-technical floor managers to generate complex inventory reports via chat.',
    stack: 'LangChain, Llama-3, Vector DBs (Chroma), Docker, React'
  },
  {
    id: '3',
    title: 'Sustainable Logistics Optimizer',
    context: 'Heavy Logistics; reducing carbon footprint while maintaining delivery SLA.',
    role: 'Primary Algorithm Designer.',
    approach: [
      'Engineered a reinforcement learning model for route optimization considering real-time traffic and EV charging availability.',
      'Integrated weather APIs to predict aerodynamic drag impact on long-haul routes.',
    ],
    results: 'Achieved an average 8.5% reduction in CO2 emissions per ton-mile without increasing mean delivery time.',
    stack: 'Gurobi, Python, AWS SageMaker, Snowflake'
  },
  {
    id: '4',
    title: 'Industrial Quality Vision System',
    context: 'Automotive Manufacturing; identifying microscopic defects on engine components.',
    role: 'Vision System Lead.',
    approach: [
      'Deployed a custom YOLO-based detector on edge devices for sub-millisecond inference.',
      'Created a synthetic data generation pipeline to handle rare edge-case defects.'
    ],
    results: 'Improved defect detection rate from 94% (manual) to 99.8% while doubling inspection throughput.',
    stack: 'C++, OpenCV, TensorRT, NVIDIA Jetson'
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
    description: 'Transitioning performance-critical data pipelines from Python to Rust for lower latency and better memory safety.'
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
  },
  {
    id: 'N3',
    title: 'Beyond the Hype: LLMs in Manufacturing',
    excerpt: 'Three practical use cases for generative AI that actually solve business problems on the factory floor.',
    date: 'June 2024',
    url: '#'
  }
];
