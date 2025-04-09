import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Monitor, Server, GraduationCap, Calendar, MapPin, Briefcase, Download } from 'lucide-react';
import CVFile from './AjayBoreddyResume.pdf';
import emailjs from '@emailjs/browser'; 

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');

  const serviceId = 'service_jl8fw8d'; // Your EmailJS Service ID
  const templateId = 'template_1vlgz77'; // Your EmailJS Template ID
  const publicKey = 'ecOMiwdifYNUPaKqa'; // Your EmailJS Public Key

  const projects = [
    {
      id: 1,
      title: "Ai Mock Interview Platform",
      description: "Elevate your interview preparation with AI-driven insights and real-time feedback! AiMockInterview is an intelligent mock interview platform built using React.js and Firebase, designed to simulate real-world interview scenarios, provide AI-generated questions, and deliver instant feedback on responses.",
      image:"https://i.ibb.co/qFV3wZSv/Screenshot-2025-04-08-at-7-40-39-PM.png",
      technologies: ["React", "Node.js", "Clerk", "Firebase", "GeminiAi"],
      demoLink: "https://interviewmock.netlify.app/",
      githubLink: "https://github.com/AjayBoreddy/AiMockInterview",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Weather Forecasting",
      description: "React application fetching and displaying weather data based on user-searched cities. Utilizes the OpenWeatherMap API for current weather and forecast information, and the GeoDB Cities API for city suggestions.",
      image: "https://i.ibb.co/ZpHj88v8/screenshot.png",
      technologies: ["Node.js", "OpenWeatherAPI", "TailwindCSS", "React"],
      demoLink: "https://the-weather-forecasting.netlify.app/",
      githubLink: "https://github.com/AjayBoreddy/WeatherForecasting",
      category: "Web App"
    },
    {
      id: 3,
      title: "My Web Portfolio",
      description: "A personal portfolio website showcasing my projects, skills, and experience. Built with React and Tailwind CSS, it features a responsive design and smooth animations.",
      image: "https://i.ibb.co/Wv7mtXWM/Screenshot-2025-04-08-at-7-55-37-PM.png",
      technologies: ["React", "javascript", "TailwindCSS", "HTML", "CSS"],
      demoLink: "https://ajayboreddy.netlify.app/",
      githubLink: "https://github.com/AjayBoreddy/portfolio",
      category: "Web App"
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
          
          const id = entry.target.getAttribute('id');
          if (id) {
            setActiveSection(id);
          }
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.reveal, section[id]').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const handleDownloadCV = () => {
    // Directly use the imported path
    const link = document.createElement('a');
    link.href = CVFile;
    link.download = "Ajay-Boreddy-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('Sending...');

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmissionStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setSubmissionStatus('Failed to send message.');
      });
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md z-50 transition-all duration-300">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-2xl font-bold text-white animate-float"><i>AB</i></a>
            <div className="flex gap-8">
              <a 
                href="#about" 
                className={`nav-link text-sm font-medium transition-colors relative ${
                  activeSection === 'about' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                About
                {activeSection === 'about' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                )}
              </a>
              <a 
                href="#education" 
                className={`nav-link text-sm font-medium transition-colors relative ${
                  activeSection === 'education' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                Education
                {activeSection === 'education' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                )}
              </a>
              <a 
                href="#experience" 
                className={`nav-link text-sm font-medium transition-colors relative ${
                  activeSection === 'experience' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                Experience
                {activeSection === 'experience' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                )}
              </a>
              <a 
                href="#projects" 
                className={`nav-link text-sm font-medium transition-colors relative ${
                  activeSection === 'projects' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                Projects
                {activeSection === 'projects' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                )}
              </a>
              <a 
                href="#contact" 
                className={`nav-link text-sm font-medium transition-colors relative ${
                  activeSection === 'contact' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                Contact
                {activeSection === 'contact' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                )}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="min-h-screen relative bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 text-white overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        
        <div className="container mx-auto px-6 py-20 relative z-10 flex items-center min-h-[calc(100vh-80px)]">
          <div className="max-w-3xl">
            <h2 className="text-7xl font-bold mb-6 leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-indigo-400"><i>Ajay Boreddy</i></span>
            </h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              A passionate Full Stack Developer crafting innovative digital experiences through elegant code and creative solutions.
            </p>
            <div className="flex gap-6">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/25">
                Get in touch
              </a>
              <a href="#projects" className="border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-full transition-all">
                View my work
              </a>
              <button 
                onClick={handleDownloadCV}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-full transition-all flex items-center gap-2 group"
              >
                Download CV
                < Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
            <div className="flex gap-6 mt-12">
              <a href="https://github.com/AjayBoreddy" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-400 transition">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ajay-kumar-reddy-boreddy-13398512b/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-400 transition">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ajayk.boreddy@gmail.com" className="p-2 hover:text-blue-400 transition">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-20 text-center reveal">
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600">About Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="eclipse-container">
                <div className="eclipse-shape">
                  <img 
                    src="https://i.ibb.co/v6BfXm5s/myimg.jpg" 
                    alt="Profile" 
                    className="eclipse-image"
                  />
                </div>
              </div>
            </div>
            <div className="reveal">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">My Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a full stack developer with a passion for creating beautiful, functional, and user-friendly websites and applications. With over 5 years of experience in web development, I specialize in JavaScript, React, Node.js, and modern web technologies.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl card-hover">
                  <Monitor className="text-blue-600 mb-4" size={32} />
                  <h4 className="font-bold mb-2">Frontend</h4>
                  <p className="text-gray-600 text-sm">React, TypeScript, Tailwind,Javascript,Next.js</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl card-hover">
                  <Server className="text-blue-600 mb-4" size={32} />
                  <h4 className="font-bold mb-2">Backend</h4>
                  <p className="text-gray-600 text-sm">Node.js, .net core, PostgreSQL,ASP.net MVC, WEBApi, </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl card-hover">
                  <Code className="text-blue-600 mb-4" size={32} />
                  <h4 className="font-bold mb-2">Tools</h4>
                  <p className="text-gray-600 text-sm">Git, Docker, AWS,Azure,SAP CAPM </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-20 text-center reveal">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Master's Degree */}
              <div className="bg-white p-8 rounded-2xl shadow-lg reveal card-hover">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 p-4 rounded-xl text-white">
                    <GraduationCap size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Master of Science in Computer Science</h3>
                    <h4 className="text-xl text-blue-600 mb-4">University At Albany</h4>
                    <div className="flex gap-6 text-gray-600 mb-4">
                      <span className="flex items-center gap-2">
                        <Calendar size={18} />
                        2022 - 2024
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={18} />
                        Albany, NY
                      </span>
                    </div>
                    <p className="text-gray-600">
                      Specialized in Artificial Intelligence and Machine Learning.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Machine Learning</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">AI</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Deep Learning</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">NLP</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bachelor's Degree */}
              <div className="bg-white p-8 rounded-2xl shadow-lg reveal card-hover">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 p-4 rounded-xl text-white">
                    <GraduationCap size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Bachelor of Science in Electronics & Communication Engineering</h3>
                    <h4 className="text-xl text-blue-600 mb-4">Karunya Institute of Technology & Sciences</h4>
                    <div className="flex gap-6 text-gray-600 mb-4">
                      <span className="flex items-center gap-2">
                        <Calendar size={18} />
                        2015 - 2019
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={18} />
                        TamilNadu, INDIA
                      </span>
                    </div>
                    <p className="text-gray-600">
                      Graduated with honors. Led multiple research projects in software engineering and participated in various hackathons.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Software Engineering</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Algorithms</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Data Structures</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white p-8 rounded-2xl shadow-lg reveal card-hover">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 p-4 rounded-xl text-white">
                    <Code size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Professional Certifications</h3>
                    <div className="space-y-4 mt-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Azure DP 900</h4>
                        <p className="text-gray-600">Google Cloud Platform</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Certified StackRoute professional on Angular -Dot net full stack</h4>
                        <p className="text-gray-600">NIIT</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Certified on SAP CAPM</h4>
                        <p className="text-gray-600">SAP</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-20 text-center reveal">
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Senior Full Stack Developer */}
              <div className="bg-white p-8 rounded-2xl shadow-lg reveal card-hover border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 p-4 rounded-xl text-white">
                    <Briefcase size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Full Stack Software Engineer</h3>
                        <h4 className="text-xl text-blue-600 mb-4">New York State Office of Information Technology & Services</h4>
                      </div>
                      <div className="flex gap-6 text-gray-600">
                        <span className="flex items-center gap-2">
                          <Calendar size={18} />
                          2024 - Present
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin size={18} />
                          Albany, NY
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-600 mt-4">
                      <li className="flex gap-3">
                        <span className="text-blue-600">•</span>
                        Designed and led full-stack development of robust, scalable enterprise web applications—such as the Cannabis License and TPI Disclosure Applications—using ASP.NET Core, C#, Entity Framework Core, SQL Server for backend, and React.js with RESTful API integration for responsive, high-performance frontends, incorporating advanced LINQ queries and async data handling for optimized server-side processing.
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600">•</span>
                        Integrated unit testing frameworks like NUnit and Moq to support TDD and ensure code reliability, while automating CI/CD pipelines using Azure DevOps for efficient build and deployment processes and employing Git- based version control strategies to enable seamless collaboration and continuous integration
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600">•</span>
                        Applied secure coding practices in .NET and react to prevent XSS, SQL injection, and authentication flaws, while proactively addressing vulnerabilities using OWASP guidelines and static code analysis; collaborated with DevOps, QA, and product teams to optimize features, troubleshoot performance issues, and support scalable, cloud-based deployments through infrastructure automation.
                      </li>
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">.net Core</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">SQL Server</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">ASP.netMVC</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Stack Developer */}
              <div className="bg-white p-8 rounded-2xl shadow-lg reveal card-hover border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 p-4 rounded-xl text-white">
                    <Briefcase size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Software Engineer</h3>
                        <h4 className="text-xl text-blue-600 mb-4">CGI</h4>
                      </div>
                      <div className="flex gap-6 text-gray-600">
                        <span className="flex items-center gap-2">
                          <Calendar size={18} />
                          2020 - 2022
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin size={18} />
                          Hyderabad, INDIA
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-600 mt-4">
                      <li className="flex gap-3">
                        <span className="text-blue-600">•</span>
                        	Engineered and delivered a scalable Mass Auto Insurance Product for the state of Massachusetts, enabling end-to- end support for private and commercial auto insurance workflows including data collection, underwriting, billing, and claims processing using .NET Core, ASP.NET MVC, React.js, and SQL Server.
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600">•</span>
                        Collaborated with cross-functional teams including Business Analysts and QA to gather requirements and implement robust modules leveraging C# and .NET Core for backend development, while building dynamic and responsive user interfaces using React.js.
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600">•</span>
                        Led defect resolution efforts during User Acceptance Testing (UAT), implemented comprehensive unit testing strategies using NUnit, and optimized software delivery pipelines through continuous integration and deployment (CI/CD) using Azure DevOps.
                      </li>
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">C#.Net</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">SQL Server</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Azure , CI/CD</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Junior Developer */}
              <div className="bg-white p-8 rounded-2xl shadow-lg reveal card-hover border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 p-4 rounded-xl text-white">
                    <Briefcase size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Associate Software Engineer</h3>
                        <h4 className="text-xl text-blue-600 mb-4">CGI</h4>
                      </div>
                      <div className="flex gap-6 text-gray-600">
                        <span className="flex items-center gap-2">
                          <Calendar size={18} />
                          2019 - 2020
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin size={18} />
                          Hyderabad, INDIA
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-600 mt-4">
                      <li className="flex gap-3">
                        <span className="text-blue-600">•</span>
                        Architected and developed a modern loan processing platform for CORA using ASP.NET Core (C#) for backend services, React.js for dynamic frontend interfaces, and MongoDB for scalable data modeling—streamlining workflows and reducing manual errors by 80%.
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600">•</span>
                        	Leveraged AWS services (EC2, S3, RDS) for secure, scalable deployment and implemented CI/CD pipelines via GitHub Actions and AWS Code Deploy, accelerating delivery cycles. Designed RESTful APIs and integrated Redux-based state management with real-time validation to enhance user experience and performance
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600">•</span>
                        Collaborated in an Agile/Scrum team with cross-functional stakeholders to ensure quality and security by applying JWT/OAuth authentication, conducting rigorous unit/integration testing with xUnit, Moq, Jest, and Postman, and following secure coding practices to protect financial data.
                      </li>
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React/Redux</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">ASP.Net Core</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">JWT/OAuth</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">REST,CI/CD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-20 text-center reveal">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden reveal card-hover">
                <div className="relative group">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors"
                      >
                        Live Demo <ExternalLink size={16} />
                      </a>
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-900 transition-colors"
                      >
                        Code <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-xl text-gray-800">{project.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">{project.category}</span>
                  </div>
                  <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-20 text-center reveal">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        <div className="max-w-2xl mx-auto reveal">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all font-medium"
            >
              Send Message
            </button>
            {submissionStatus && <p className="mt-4 text-center">{submissionStatus}</p>}
          </form>
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ajay Boreddy</h3>
              <p className="text-gray-400">Full Stack Developer</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex gap-6 mb-4">
                <a href="https://github.com/AjayBoreddy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition p-2">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ajay-kumar-reddy-boreddy-13398512b/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition p-2">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:ajayk.boreddy@gmail.com" className="hover:text-blue-400 transition p-2">
                  <Mail size={20} />
                </a>
              </div>
              <p className="text-gray-400">&copy; 2025 Ajay Boreddy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;