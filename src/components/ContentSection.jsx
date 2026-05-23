import './ContentSection.css'

function ContentSection({ section }) {
  const content = {
    about: {
      title: 'ABOUT',
      items: [
        'Computer Science Engineer with expertise in AI, Machine Learning, and Full-Stack Development',
        'Passionate about creating innovative solutions and pushing technological boundaries',
        'Experience in building scalable systems, automation, and research projects',
        'Strong background in competitive programming and problem-solving'
      ]
    },
    skills: {
      title: 'TECHNICAL SKILLS',
      items: [
        'Languages: C++, Python, JavaScript, Java, SQL',
        'Frontend: React, Three.js, Framer Motion, GSAP',
        'Backend: Node.js, Express, MongoDB, PostgreSQL',
        'AI/ML: TensorFlow, PyTorch, NLP, Computer Vision',
        'Tools: Git, Docker, AWS, Firebase, Figma'
      ]
    },
    projects: {
      title: 'MAJOR PROJECTS',
      items: [
        'Automatic Prescription Generator - AI-powered medical document processing',
        'EduTruth - Educational platform with verification system',
        'FailForward - Failure analysis and learning platform',
        'AI Voice Assistant Watch System - Wearable AI integration',
        'Anti-Cheating Coding Platform - Secure online assessment system'
      ]
    },
    experience: {
      title: 'PROFESSIONAL EXPERIENCE',
      items: [
        'Software Engineer - Full Stack Development',
        'AI/ML Research Assistant',
        'Technical Lead - Innovation Projects',
        'Open Source Contributor'
      ]
    },
    education: {
      title: 'EDUCATION',
      items: [
        'B.Tech Computer Science and Engineering',
        'Specialization: Artificial Intelligence & Machine Learning',
        'CGPA: 8.5+',
        'Relevant Coursework: AI, Data Structures, Algorithms, Web Development'
      ]
    },
    certifications: {
      title: 'CERTIFICATIONS',
      items: [
        'AWS Certified Developer',
        'TensorFlow Certificate',
        'Complete Web Development Bootcamp',
        'Machine Learning Specialization',
        'Google Cloud Associate Cloud Engineer'
      ]
    },
    achievements: {
      title: 'ACHIEVEMENTS',
      items: [
        'Top 5% in National Coding Contests',
        'Winner of Multiple Hackathons',
        'Published Research Papers in AI',
        'Open Source Projects with 1000+ Stars',
        'Technical Mentor for 50+ Students'
      ]
    },
    contact: {
      title: 'GET IN TOUCH',
      items: [
        'Email: priya@example.com',
        'LinkedIn: linkedin.com/in/priyapatel',
        'GitHub: github.com/priyapatel',
        'Portfolio: priyapatel.dev',
        'Phone: +91 XXXXXXXXXX'
      ]
    }
  }

  const data = content[section] || content.about

  return (
    <div className="content-section">
      <h2 className="section-title">{data.title}</h2>
      <div className="section-items">
        {data.items.map((item, index) => (
          <div key={index} className="section-item">
            <span className="item-marker">▸</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContentSection
