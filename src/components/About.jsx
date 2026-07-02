import './About.css'

const skills = [
  { label: 'Languages', tags: ['Python','Java','C++','SQL','JavaScript','HTML/CSS'] },
  { label: 'AI / ML',   tags: ['Scikit-learn','TensorFlow','NLP','LangChain','FAISS','XGBoost'] },
  { label: 'Data & Analytics', tags: ['Pandas','NumPy','Tableau','Power BI','Matplotlib'] },
  { label: 'Dev & Tools', tags: ['Django','Flask','FastAPI','React','Git','MySQL'] },
]

export default function About() {
  return (
    <section id="about">
      <div className="rev">
        <div className="eye">01 — About</div>
        <h2>The story so far</h2>
      </div>
      <div className="alayout">
        <div className="rev">
          <p className="atxt">
            I am Dhairya Shah, a B.Tech Computer Engineering student at Mukesh Patel School of Technology
            Management and Engineering (NMIMS). My interests lie in Artificial Intelligence, Machine Learning,
            Data Analytics, and Software Development. I enjoy transforming ideas into practical solutions and
            building technology that creates real-world impact.
          </p>
          <div id="skills" className="sskill">
            {skills.map(sg => (
              <div className="sg" key={sg.label}>
                <div className="sgl">{sg.label}</div>
                <div className="sgt">{sg.tags.map(t => <span className="stag" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="term">
            <div className="tbar">
              <div className="td2 tdr"/><div className="td2 tdy"/><div className="td2 tdg"/>
              <span className="tlbl">dhairya@portfolio ~ bash</span>
            </div>
            <div className="tl"><span className="pr">dhairya@portfolio</span><span className="dim">:~$ </span><span className="cm">cat status.txt</span></div>
            <div className="tl"><span className="ok">→ Available:</span><span className="cm"> AI/ML Internships &amp; Data Analyst Roles</span></div>
            <div className="tl"><span className="ok">→ Location:</span><span className="cm"> Mumbai, India</span></div>
            <div className="tl"><span className="ok">→ Year:</span><span className="cm"> 4th Year · B.Tech CE · NMIMS MPSTME</span></div>
            <div className="tl"><span className="ok">→ Focus:</span><span className="cm"> AI · ML · Data Analytics · Full Stack</span></div>
            <div className="tl"><span className="ok">→ Status:</span><span className="cm"> Building things that matter</span></div>
            <div className="tl"><span className="dim">$</span><span className="cur"/></div>
          </div>
        </div>

        <div className="acards rev-r">
          <div className="acard">
            <div className="acl">Education</div>
            <div className="act">B.Tech Computer Engineering</div>
            <div className="acs">Mukesh Patel School of Technology Management &amp; Engineering (NMIMS)</div>
            <div className="aca">4th Year · CGPA: 3.78/4</div>
          </div>
          <div className="acard">
            <div className="acl">Focus Areas</div>
            {['Artificial Intelligence','Machine Learning','Data Analytics','Tableau & BI Tools','Full Stack Development'].map(i=>(
              <div className="dli" key={i}>{i}</div>
            ))}
          </div>
          <div className="acard">
            <div className="acl">Open To</div>
            {['AI/ML Internships','Data Analyst Roles','Software Development','Research Opportunities'].map(i=>(
              <div className="dli" key={i}>{i}</div>
            ))}
            <div className="aca" style={{marginTop:'10px'}}>✦ Available for exciting projects</div>
          </div>
        </div>
      </div>
    </section>
  )
}
