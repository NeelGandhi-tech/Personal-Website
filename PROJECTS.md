# Portfolio project selection

Reviewed the 17 public repositories at https://github.com/NeelGandhi-tech on October 4, 2026. Project copy is based on repository READMEs and source files, rather than unverified deployment or performance claims.

## Featured

- **NFL Fantasy Predictor** — Python model training, a browser dashboard, and interpretable predictions. The current repository describes regression and linear feature contributions, so the former XGBoost/15% accuracy claim was removed.
- **CatanML** — board representation, generated training data, multiple model families, and position ranking. Described as trained on synthetic heuristic scores, not real game outcomes.

- **Big–Little Graph** — Streamlit, NetworkX, Plotly; interactive graph exploration and weighted shortest paths.

## Full project index

The three above, plus:

- **Methuselah IoT** — Flask, MySQL, ReportLab; client records, visit uploads, search, PDF export.
- **SAT Bears (SAT-Class)** — React tutoring website with curriculum, booking, and results content.
- **Innovate Berkeley** — conference website using JavaScript and Express. Removed unsupported MongoDB/AWS claims.
- **Posana** — storefront and checkout interface. The inspected Express server does not implement the Stripe routes described in its README, so no payment integration claim is made.
- **College Pathfinder (College-Board-Demo)** — college-planning interface prototype; not described as an official College Board product or functioning AI counselor.
- **Drive-through Insights (NeelDrivethorugh)** — video/audio transcription and GPT analysis prototype.
- **FFB Ballas** — small FastAPI/Sleeper API experiment.
- **Reyansh’s Portfolio** — React portfolio website.
- **Neel’s Answers** — JavaScript keyboard/input experiment.

## Excluded

- **AjiConsulting**: removed at your request; Big–Little Graph takes its featured slot.

- **flask-file-upload**: fork; insufficient evidence of original contributions to feature as original work.
- **Personal-Website**: this portfolio itself; excluded to keep the collection useful.
- **PersonalProject**: early Alexa calendar prototype with broken variable references; weaker than the included work.
- **WebDevCool**: simple prom invitation; less relevant to the professional portfolio.

NeuroEcho remains mentioned in the biography from the original site, without the previous patent or performance claims. All showcased projects link directly to their verified repository. No unverified live/demo URLs are presented.

## Updating the site

Edit `src/data/projects.js` to add projects, change categories, or choose featured projects. Project counts and filters derive from that data. Run `npm run lint` and `npm run build` before deploying. Existing Netlify configuration is preserved.
