import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Github, Linkedin, Mail, Phone, Briefcase, GraduationCap, Code, Cloud, Container, Cpu, Shield, Terminal } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-slate-800 shadow-sm border-b border-gray-200 dark:border-slate-700"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold gradient-text">Dhaarani Nambi</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">Education</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Aspiring DevOps Engineer
            <span className="block text-blue-600 dark:text-blue-400">Automation Enthusiast</span>
            <span className="block text-purple-600 dark:text-purple-400">Continuously Learning</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Passionate about building CI/CD pipelines, automating infrastructure, and mastering cloud technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </Button>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">
                <Code className="w-8 h-8 text-blue-600" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Current Focus</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Building CI/CD pipelines and learning Kubernetes</li>
                    <li>• Learning: AWS, Terraform, Docker, Kubernetes</li>
                    <li>• Looking to collaborate on: Open-source DevOps projects</li>
                    <li>• Fun fact: I love automating repetitive tasks!</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Tech Stack</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div><strong>Languages:</strong> Python</div>
                    <div><strong>Tools:</strong> Docker, Kubernetes, Jenkins, GitHub Actions</div>
                    <div><strong>Cloud:</strong> AWS, GCP</div>
                    <div><strong>IaC:</strong> Terraform, Ansible</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">My Journey</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I've always enjoyed coming up with creative solutions to problems. I used to enjoy tinkering with broken things, 
                  figuring out how they worked, and then repairing them. When I graduated from high school, I knew exactly what I wanted to do with my life.
                  I completed my bachelor's degree in computer science engineering, where I learned how to apply critical thinking and 
                  problem-solving strategies to today's complex problems.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
                  After finishing college, I began my first job as an ML Data Associate at Amazon Development Centre. 
                  Working for Alexa piqued my interest in wireless networking aspects of virtual devices. I am a person who is curious about everything, 
                  constantly learning about emerging technologies like AI, AR/VR, cloud, blockchain, and quantum theory.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">
                <Briefcase className="w-8 h-8 text-blue-600" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Amazon</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Sep 2020 - Nov 2021</span>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Cloud Support Engineer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Permanent Full-time • 1 yr 3 mos</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Data Associate</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Full-time • 1 yr 2 mos • Aug 2019 - Sep 2020</p>
                  <p className="text-gray-600 dark:text-gray-400">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">
                <Terminal className="w-8 h-8 text-blue-600" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-600" />
                    Web Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['HTML', 'CSS', 'React.js'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    Databases
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['SQL Server', 'MySQL', 'MongoDB'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-purple-600" />
                    Cloud Platforms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['AWS', 'Azure Fundamentals'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-orange-600" />
                    Scripting
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['PowerShell', 'Python'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Container className="w-5 h-5 text-red-600" />
                    DevOps & Infrastructure
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Kubernetes', 'Docker', 'Ansible', 'Terraform', 'Jenkins', 'Git'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-indigo-600" />
                    Tools & Monitoring
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Selenium', 'JMeter', 'Datadog', 'Dynatrace', 'Prometheus', 'ELK Stack'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Lambton College</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Jan 2022 – Sep 2023</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Wireless Networking, Computer Engineering</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SA Engineering College</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Aug 2015 – May 2019</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Bachelor's Degree, Computer Science</p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">
                <Mail className="w-8 h-8 text-blue-600" />
                Let's Connect!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Get In Touch</h3>
                  <div className="space-y-3">
                    <a href="mailto:Dhaarani.nambi011@gmail.com" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                      <Mail className="w-5 h-5" />
                      <span>Dhaarani.nambi011@gmail.com</span>
                    </a>
                    <a href="tel:+16478677320" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                      <Phone className="w-5 h-5" />
                      <span>+1 (647) 867-7320</span>
                    </a>
                    <a href="https://www.linkedin.com/in/dhaarani-nambi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn Profile</span>
                    </a>
                    <a href="https://github.com/Dhaarani011" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                      <Github className="w-5 h-5" />
                      <span>GitHub Profile</span>
                    </a>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Send a Message</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    I'm always interested in hearing about new opportunities and exciting projects. 
                    Feel free to reach out if you'd like to collaborate!
                  </p>
                  <Button size="lg" className="w-full sm:w-auto gap-2">
                    <Mail className="w-5 h-5" />
                    Send Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2024 Dhaarani Nambi. Built with React, TypeScript & Tailwind CSS.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://github.com/Dhaarani011" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/dhaarani-nambi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
