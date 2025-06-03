## Personal Website

This repository contains the source code for my React based personal site.
The site is automatically deployed to **GitHub Pages** using the workflow in
`.github/workflows/deploy.yml`. The workflow builds the React app and pushes the
contents of the `build/` directory to the `gh-pages` branch.

If you prefer to deploy manually you can run `npm run deploy` after installing
dependencies with `npm ci`. The `deploy` script uses the `gh-pages` package to
push the generated `build/` directory to the `gh-pages` branch.

### Accessing the site

<https://shubhamcodez.github.io/website/>

### GitHub Pages configuration

Make sure the repository settings use the `gh-pages` branch as the publishing
source. After pushing changes to `master` (or `main`), confirm that the
**Deploy to GitHub Pages** workflow completes successfully. If the site renders
plain text, the workflow may not have published the build. You can either rerun
the workflow or manually deploy by running `npm run deploy`.

To preview the site locally, run `npm start` and open `http://localhost:3000` in
your browser. The React development server will load `src/pages/Home.js` as the
home page.

