import './Research.css'

export default function Research() {
  return (
    <section id="research">
      <div className="rev">
        <div className="eye">03 — Research</div>
        <h2>Research &amp; Publications</h2>
      </div>
      <div className="rlist rev">
        <div className="ri">
          <div className="rv">🎓 DACS 2025 · Published</div>
          <div className="rt">Box Office Revenue Prediction Using Machine Learning Techniques</div>
          <p className="rd">Co-authored and presented a peer-reviewed research paper at the 8th International Conference on Data Analytics and Cyber Security (DACS 2025). Developed predictive models using ML algorithms to estimate movie revenue based on historical, financial, and market-driven features.</p>
          <div className="rtgs">
            {['Machine Learning','XGBoost','Feature Engineering','Revenue Forecasting','TMDB Dataset'].map(t=>(
              <span className="rtg" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
