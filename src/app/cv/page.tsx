import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CV',
  description: 'Career history, education and certifications for Garrett Stack - Instructional Designer, Technical Writer and Implementation Consultant.',
}

const EXPERIENCE = [
  {
    title: 'Independent Professional Development',
    company: 'Self-directed',
    period: 'Apr 2024 - Present',
    location: 'Ireland',
    highlights: [
      'Currently completing a Postgraduate Certificate in Digital Technologies (Digital Transformation, AI for Business) - a European-accredited programme delivered in partnership with leading EU universities.',
      'Completed 15+ professional certifications across instructional design, technical writing, project management, data analytics and UX design.',
      'Deepened specialist expertise in DocuSign CLM and eSignature through a suite of advanced certification programmes.',
      'Designed and developed two full-stack web applications, maintaining hands-on technical engagement alongside professional development.',
    ],
  },
  {
    title: 'Principal Technical Product Trainer',
    company: 'DocuSign',
    period: 'Jan 2020 - Apr 2024',
    location: 'Dublin, Ireland',
    highlights: [
      'Led global enablement for advanced product audiences - specialising in Contract Lifecycle Management, Salesforce integration, and the DocuSign eSignature Apex Toolkit.',
      'Architected and launched the DocuSign Certification Program, defining learning objectives, assessment criteria and curriculum structure.',
      'Partnered with Professional Services as Training Project Manager to design customised training solutions for each new enterprise customer implementation.',
      'Mentored and coached global trainers in advanced delivery techniques, product depth and instructional design strategy.',
      'Delivered high-impact live sessions, workshops and certification prep programmes driving product adoption across implementation partners and enterprise administrators.',
    ],
  },
  {
    title: 'Product Learning Specialist',
    company: 'Amdocs',
    period: 'Jun 2017 - Jan 2020',
    location: 'Dublin, Ireland',
    highlights: [
      'Evaluated, implemented and administered an LMS to deliver scalable, data-driven learning experiences for internal teams and six US enterprise telecom clients including T-Mobile and Comcast.',
      'Designed blended learning programmes spanning on-demand eLearning, live remote sessions and in-person training.',
      'Partnered with project managers and customer success teams to align training with new customer implementations and product rollouts.',
      'Leveraged LMS analytics and learner feedback to continuously improve engagement, retention and training impact.',
    ],
  },
  {
    title: 'Software Development Trainer',
    company: 'Eden Training',
    period: 'Sep 2016 - Mar 2017',
    location: 'Dublin, Ireland',
    highlights: [
      'Developed and delivered a comprehensive instructor-led Java programming course from introductory principles to advanced application development.',
      'Built curriculum aligned with the Oracle Java Associate Certification, enabling students to achieve professional certification.',
      'Integrated Agile and Scrum methodologies into the classroom, teaching industry-standard collaborative workflows.',
    ],
  },
  {
    title: 'Technical Support Engineer',
    company: 'VMware',
    period: 'Nov 2013 - Sep 2016',
    location: 'Cork, Ireland',
    highlights: [
      'Supported North American enterprise customers with expert troubleshooting across VMware vSphere, ESXi, vRealize Automation and vRealize Orchestrator.',
      'Used Bash and JavaScript scripting to diagnose root causes and deliver permanent technical resolutions.',
      'Collaborated with engineering and product teams to resolve complex cases and improve product reliability.',
    ],
  },
  {
    title: 'Trainer & Pre-Sales Consultant',
    company: 'NTI Diatec',
    period: 'Jun 2008 - Jun 2010',
    location: 'Cork, Ireland',
    highlights: [
      'Delivered product training and pre-sales consultancy for technical software solutions across Ireland.',
      'Supported sales teams with technical demonstrations and customer onboarding.',
    ],
  },
  {
    title: 'Customer Support Manager',
    company: 'MiTek UK & Ireland',
    period: 'Apr 2006 - Jun 2008',
    location: 'Birmingham, UK',
    highlights: [
      'Managed customer support operations for Civil Engineering software across the UK and Ireland.',
      'Led a support team delivering technical assistance and training to engineering professionals.',
    ],
  },
]

const EDUCATION = [
  {
    qualification: 'Higher National Diploma (Level 8)',
    field: 'Cloud Computing',
    institution: 'Munster Technological University',
    grade: 'First Class',
  },
  {
    qualification: 'Master of Science (Level 9)',
    field: 'Computer Science - Interactive Media',
    institution: 'University College Cork',
    grade: '2.1',
  },
  {
    qualification: 'Diploma (Level 8)',
    field: 'Geographic Information Science and Cartography',
    institution: 'Technological University Dublin',
    grade: 'First Class',
  },
  {
    qualification: 'Higher National Diploma (Level 8)',
    field: 'Computer Science',
    institution: 'University College Cork',
    grade: 'First Class',
  },
  {
    qualification: 'Higher National Diploma',
    field: 'GIS and Remote Sensing',
    institution: 'University College Cork',
    grade: '',
  },
]

const CERTIFICATIONS = [
  {
    category: 'DocuSign',
    items: [
      'Certified DocuSign eSignature Implementation Consultant',
      'Certified DocuSign CLM Workflow Developer',
      'Certified DocuSign eSignature Administrator',
      'DocuSign CLM Workflow Specialist',
      'DocuSign CLM Administration Specialist',
      'DocuSign eSignature API Specialist',
      'DocuSign IAM Specialist',
      'DocuSign + Salesforce: Apex Toolkit Developer',
    ],
  },
  {
    category: 'Google',
    items: [
      'Google Project Management Specialization',
      'Google Advanced Data Analytics Specialization',
      'Google UX Design Specialization',
      'Google Cloud Cybersecurity Specialization',
    ],
  },
  {
    category: 'Learning & Design',
    items: [
      'Writing Effective Technical Documentation - Board Infinity',
      'Generative AI for Educators & Teachers - Vanderbilt University',
      'Introduction to Learning Experience Design (LXD) - University of Michigan',
      'Articulate Storyline - Visual Design & Advanced Techniques',
      'Adobe Captivate 2019 Advanced Techniques',
      'Become an L&D Professional - LinkedIn',
    ],
  },
  {
    category: 'Technical',
    items: [
      'Oracle Certified Professional - Java SE 6 Programmer',
      'Scrum Master Certified (SMC) - Scrum Alliance',
      'Learning SCORM and Tin Can API',
    ],
  },
]

export default function CVPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section className="pt-40 pb-24 border-b border-ink-200">
          <div className="container-site flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div>
              <p className="label-tag mb-8">Curriculum vitae</p>
              <h1 className="text-display text-[clamp(3rem,7vw,6rem)] text-ink-900 leading-none">
                Garrett Stack
              </h1>
              <p className="text-ink-400 text-xl mt-4">
                Instructional Designer · Technical Writer · Implementation Consultant
              </p>
            </div>
            <a
              href="/cv/garrett-stack-cv.pdf"
              download
              className="btn-primary shrink-0"
            >
              Download PDF
              <span className="text-signal">↓</span>
            </a>
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="py-24 border-b border-ink-200">
          <div className="container-site">
            <p className="label-tag mb-16">Experience</p>
            <div className="space-y-0">
              {EXPERIENCE.map((role, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-12 gap-8 py-12 border-b border-ink-100 last:border-0"
                >
                  {/* Left - meta */}
                  <div className="md:col-span-3">
                    <p className="text-display text-xl text-ink-900 mb-1">{role.company}</p>
                    <p className="font-mono text-xs text-ink-400 mb-1">{role.period}</p>
                    <p className="font-mono text-xs text-ink-300">{role.location}</p>
                  </div>

                  {/* Right - detail */}
                  <div className="md:col-span-9">
                    <h3 className="text-ink-900 font-medium text-lg mb-6">{role.title}</h3>
                    <ul className="space-y-3">
                      {role.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-ink-500 leading-relaxed">
                          <span className="text-signal mt-1 shrink-0">→</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Education ── */}
        <section className="py-24 border-b border-ink-200 bg-ink-50">
          <div className="container-site">
            <p className="label-tag mb-16">Education</p>
            <div className="space-y-0">
              {EDUCATION.map((ed, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-12 gap-8 py-8 border-b border-ink-100 last:border-0"
                >
                  <div className="md:col-span-3">
                    <p className="text-display text-lg text-ink-900">{ed.institution}</p>
                    {ed.grade && (
                      <p className="font-mono text-xs text-signal mt-1">{ed.grade}</p>
                    )}
                  </div>
                  <div className="md:col-span-9">
                    <p className="text-ink-900 font-medium">{ed.field}</p>
                    <p className="text-ink-400 text-sm mt-1">{ed.qualification}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Certifications ── */}
        <section className="py-24 border-b border-ink-200">
          <div className="container-site">
            <p className="label-tag mb-16">Licences & certifications</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {CERTIFICATIONS.map(({ category, items }) => (
                <div key={category}>
                  <h3 className="text-display text-xl text-ink-900 mb-6">{category}</h3>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink-500 leading-relaxed">
                        <span className="text-signal mt-0.5 shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24">
          <div className="container-site flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <h2 className="text-display text-4xl md:text-5xl text-ink-900 max-w-lg leading-tight">
              Want to know more?<br />
              <span className="italic text-signal">Let&rsquo;s talk.</span>
            </h2>
            <div className="flex gap-4">
              <a href="/contact" className="btn-primary">Get in touch</a>
              <a href="/portfolio" className="btn-outline">See my work</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
