import Nav from '@/components/layout/Nav'
import { getAllCertifications } from '@/lib/sanity'
import type { Certification } from '@/lib/sanity'
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

const CERT_CATEGORIES = [
  { key: 'instructional-design-and-l-and-d', label: 'Instructional Design & L&D' },
  { key: 'technical-training-and-enablement', label: 'Technical Training & Enablement' },
  { key: 'project-management-and-implementation', label: 'Project Management & Implementation' },
  { key: 'data-and-analytics', label: 'Data & Analytics' },
  { key: 'cloud-and-cybersecurity', label: 'Cloud & Cybersecurity' },
  { key: 'technical-and-development', label: 'Technical & Development' },
  { key: 'life-sciences-and-pharma', label: 'Life Sciences & Pharma' },
]

const ISSUER_COLORS: Record<string, string> = {
  'Google': 'bg-blue-50 text-blue-700 border-blue-200 hover:border-blue-400',
  'QQI': 'bg-green-50 text-green-700 border-green-200 hover:border-green-400',
  'Scrum Alliance': 'bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400',
  'DocuSign': 'bg-yellow-50 text-yellow-700 border-yellow-200 hover:border-yellow-400',
  'Vanderbilt University': 'bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400',
  'University of Michigan': 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:border-indigo-400',
  'Contentful': 'bg-red-50 text-red-700 border-red-200 hover:border-red-400',
}

export const revalidate = 60

export default async function CVPage() {
  const certifications = await getAllCertifications()

  // Group by issuer
  const certsByIssuer = certifications.reduce((acc, cert) => {
    if (!acc[cert.issuer]) acc[cert.issuer] = []
    acc[cert.issuer].push(cert)
    return acc
  }, {} as Record<string, Certification[]>)

  // Group by category
  const certsByCategory = certifications.reduce((acc, cert) => {
    const cats = cert.categories ?? []
    if (cats.length === 0) {
      if (!acc['other']) acc['other'] = []
      acc['other'].push(cert)
    } else {
      cats.forEach((cat: any) => {
        const key = cat.key ?? cat
        if (!acc[key]) acc[key] = []
        acc[key].push(cert)
      })
    }
    return acc
  }, {} as Record<string, Certification[]>)
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
              href="#download"
              className="btn-primary shrink-0"
            >
              Download CV
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

            {/* Grouped by category */}
            {certsByCategory && Object.keys(certsByCategory).length > 0 ? (
              <div className="grid grid-cols-1 gap-y-12 mb-24">
                {CERT_CATEGORIES.filter(cat => certsByCategory[cat.key]?.length > 0).map(cat => (
                  <div key={cat.key}>
                    <h3 className="font-mono text-xs tracking-widest uppercase text-signal mb-6">{cat.label}</h3>
                    <ul className="space-y-3">
                      {certsByCategory[cat.key].map((cert: any) => (
                        <li key={cert._id} className="flex items-start justify-between gap-4 text-sm border-b border-ink-100 pb-3">
                          <span className="text-ink-700">
                            {cert.credentialUrl ? (
                              <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="hover:text-signal transition-colors">
                                {cert.name}
                              </a>
                            ) : cert.name}
                          </span>
                          <span className="text-ink-400 text-xs shrink-0">{cert.issuer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-ink-400 text-sm">Certifications loading...</p>
            )}

            {/* Issuer badges */}
            {certsByIssuer && Object.keys(certsByIssuer).length > 0 && (
              <div>
                <p className="label-tag mb-8">Issued by</p>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(certsByIssuer).map(([issuer, certs]: [string, any]) => (
                    <div key={issuer} className="relative group">
                      <div className={['px-4 py-2 text-sm font-mono font-medium cursor-default border transition-colors', ISSUER_COLORS[issuer] ?? 'bg-ink-100 text-ink-700 border-ink-200 hover:border-ink-400'].join(' ')}>
                        {issuer}
                      </div>
                      <div className="absolute bottom-full left-0 mb-2 w-64 bg-ink-900 text-slate-site text-xs p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                        <p className="font-mono text-signal mb-2 uppercase tracking-wider text-xs">{issuer}</p>
                        <ul className="space-y-1">
                          {(certs as any[]).map((c: any) => (
                            <li key={c._id} className="text-ink-300">→ {c.name}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── Downloads ── */}
        <section id="download" className="py-24 border-b border-ink-200 bg-ink-900">
          <div className="container-site">
            <p className="label-tag text-ink-500 mb-4">Download my CV</p>
            <h2 className="text-display text-4xl text-slate-site mb-4">Choose the right version for your role.</h2>
            <p className="text-ink-400 text-sm mb-16 max-w-xl">Each CV is tailored to a specific role type - same experience, different emphasis. Pick the one that matches your opening.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-700">
              {[
                {
                  role: "Instructional Designer",
                  description: "Curriculum design, LMS, eLearning development and enterprise learning strategy.",
                  file: "/cv/garrett-stack-cv-instructional-designer.pdf",
                },
                {
                  role: "Implementation Consultant",
                  description: "Enterprise software rollouts, customer onboarding, Salesforce and DocuSign CLM.",
                  file: "/cv/garrett-stack-cv-implementation-consultant.pdf",
                },
                {
                  role: "Technical Writer",
                  description: "API documentation, user guides, structured authoring and developer content.",
                  file: "/cv/garrett-stack-cv-technical-writer.pdf",
                },
                {
                  role: "Enablement / Onboarding",
                  description: "Customer and partner enablement, time-to-productivity and adoption frameworks.",
                  file: "/cv/garrett-stack-cv-enablement-onboarding.pdf",
                },
                {
                  role: "Cybersecurity Training",
                  description: "Security awareness training, SOC/NOC background and Google Cybersecurity cert.",
                  file: "/cv/garrett-stack-cv-cybersecurity-training.pdf",
                },
                {
                  role: "Data Analytics",
                  description: "Analytics training, GIS data analysis, Python and Google Data Analytics cert.",
                  file: "/cv/garrett-stack-cv-data-analytics.pdf",
                },
              ].map(({ role, description, file }) => (
                <div key={role} className="bg-ink-900 p-8 flex flex-col justify-between gap-6 hover:bg-ink-800 transition-colors group">
                  <div>
                    <h3 className="text-display text-xl text-slate-site mb-3 group-hover:text-signal transition-colors">{role}</h3>
                    <p className="text-ink-400 text-sm leading-relaxed">{description}</p>
                  </div>
                  <a
                    href={file}
                    download
                    className="inline-flex items-center gap-2 font-mono text-xs text-signal tracking-widest uppercase hover:gap-4 transition-all"
                  >
                    Download PDF ↓
                  </a>
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
