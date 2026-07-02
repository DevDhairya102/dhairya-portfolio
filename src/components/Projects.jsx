import './Projects.css'

const projects = [
  { num:'01', badge:'New · RAG', badgeNew:true, title:'Multi-Document RAG System', metric:'📊 Semantic retrieval · LLM-grounded answers', desc:'Retrieval-augmented generation pipeline for multi-document question answering. Combines vector embeddings with LLM generation for accurate, source-cited answers.', tags:['Python','LangChain','FAISS','Streamlit'] },
  { num:'02', badge:'AI · ML · NLP', title:'AI Clipboard Security DLP', metric:'📊 Real-time detection · Data leakage prevention', desc:'AI-powered clipboard monitoring system using NLP, regex detection, entropy analysis and ML to detect sensitive information and generate real-time threat alerts.', tags:['AI','NLP','Python','ML'] },
  { num:'03', badge:'ML · Analytics', title:'Carbon Footprint Tracker', metric:'📊 R² = 0.87 · Linear Regression + Random Forest', desc:'Full-stack ML app using React and FastAPI to estimate carbon emissions from lifestyle data. Linear Regression and Random Forest models achieved R² score of 0.87.', tags:['FastAPI','React','Python','ML'] },
  { num:'04', badge:'ML · Prediction', title:'Box Office Revenue Prediction', metric:'📊 Published · DACS 2025', desc:'Analyzed 5K+ movie records using genre, budget, runtime, and release timing. Applied Random Forest, XGBoost on 5K+ records. Research published at DACS 2025.', tags:['XGBoost','Python','Analytics','ML'] },
  { num:'05', badge:'Android · Java', title:'Veggie Express', metric:'📊 20+ products · Under 2s load time', desc:'Android application for online vegetable ordering and delivery management. Designed UI for 20+ product items, optimised for under 2-second load time.', tags:['Android','Java','Mobile App'] },
]

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function Projects() {
  return (
    <section id="projects">
      <div className="rev">
        <div className="eye">02 — Projects</div>
        <h2>Built, shipped, learned</h2>
      </div>
      <div className="pgrid rev">
        {projects.map(p => (
          <div className="pc" key={p.num}>
            <div className="pctop">
              <span className="pcn">{p.num}</span>
              <span className={`pbdg${p.badgeNew ? ' nw' : ''}`}>{p.badge}</span>
            </div>
            <div className="pct">{p.title}</div>
            <div className="pcm">{p.metric}</div>
            <div className="pcd">{p.desc}</div>
            <div className="ptags">{p.tags.map(t => <span className="pt" key={t}>{t}</span>)}</div>
            <a className="pcl" href="https://github.com/DevDhairya102" target="_blank" rel="noopener">
              View Project <ArrowIcon />
            </a>
          </div>
        ))}
        <div className="pc pce">
          <div className="pce-p">+</div>
          <div className="pce-t">More projects<br/>coming soon</div>
        </div>
      </div>
    </section>
  )
}
