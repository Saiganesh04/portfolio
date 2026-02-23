import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" className="scroll-mt-24" aria-label="About me">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="mb-6 font-heading text-sm font-semibold uppercase tracking-widest text-cyan-400 lg:hidden">
          About
        </h2>

        <div className="space-y-4 text-base leading-relaxed text-slate-400">
          <p>
            I'm a <span className="text-slate-100 font-medium">Software Engineer and AI Solutions Architect</span> with
            3+ years of experience designing and building production-grade systems across
            cloud platforms, microservices, and AI-driven automation. My work spans{' '}
            <span className="text-slate-100 font-medium">end-to-end platform engineering</span> — from writing
            high-performance APIs to orchestrating multi-agent workflows that manage
            enterprise infrastructure at scale.
          </p>
          <p>
            Currently at <span className="text-slate-100 font-medium">Northern Kytes</span>, I architect AI-powered
            maintenance platforms that automate patch lifecycle management across 150+ VMs
            using multi-agent orchestration, MCP Server, and Azure Logic Apps. Previously
            at <span className="text-slate-100 font-medium">Neudesic (an IBM Company)</span>, I built 30+ microservices
            with FastAPI, engineered AI document ingestion pipelines, and drove migration
            from legacy .NET systems to containerized Python services with zero-downtime
            CI/CD.
          </p>
          <p>
            I hold a <span className="text-slate-100 font-medium">Master's in Computer Science</span> from the
            University at Buffalo and{' '}
            <span className="text-slate-100 font-medium">8 Microsoft Azure certifications</span> spanning cloud
            development, AI engineering, DevOps, and data analytics. I'm passionate about
            building systems that are not just functional, but{' '}
            <span className="text-slate-100 font-medium">resilient, observable, and elegantly automated</span>.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
