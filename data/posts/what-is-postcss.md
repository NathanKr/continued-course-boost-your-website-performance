---
title: "How to Use PostCSS With Stylesheets : A Quick Guide"
date: "Dec 31, 2023"
excerpt: "Learn How This Powerful Tool Can Streamline Your CSS Workflow, From Using Advanced CSS Features to Optimizing Your Styles"
cover_image: "/images/posts/postcss/postcss-main-hero-945w-630w.webp"
link_title: "Explore PostCSS"
cover_image_width_px: 945
cover_image_height_px: 630
---

<h2> Table of Contents</h2>
<nav>
    <ul>
      <li><h3><a href="#what-is-postcss">What is PostCSS</h3></a></li>
      <li><h3><a href="#motivation-for-postcss">Motivation for PostCSS</h3></a></li>
      <li><h3><a href="#How-to-invoke-postcss">How to Invoke PostCSS</h3></a></li>
      <li><h3><a href="#next.js-and-vite-with-postcss">Next.js and Vite Support for PostCSS</h3></a></li>
      <li><h3><a href="#popular-plugins-built-over-postcss">Popular Plugins Built Over PostCSS</h3></a></li>
      <li><h3><a href="#repositories">Repositories</h3></a></li>
      <li><h3><a href="#references">References</h3></a></li>
    </ul>
  </nav>

<section id="what-is-postcss">
  <h2>What is PostCSS</h2>
  <ul>
  <li>A tool for transforming CSS with JavaScript</li>
  <li>very popular- more than 77m weekly downloads (Jan 2023)</li>
  <li>The postcss workflow can be described as follows
  
  <div style='max-width:768px;position:relative;aspect-ratio:512 / 730'>
    <img loading="lazy" 
    src = "/images/posts/postcss/PostCSS_scheme.webp" alt="postcss workflow"/>
  </div>

  </li>

  </ul>
  </p>
</section>

 <section id="motivation-for-postcss">
  <h2>Motivation for PostCSS</h2>
  PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more
</section>

<section id="How-to-invoke-postcss">
  <h2>How to invoke PostCSS</h2>
  <ul>
  <li>Install postcss and postcss plugins (both using -D)</li>
  <li>create configuration file - postcss.config.js with postcss plugins</li>
  <li>run postcss from the command line as part of your build process</li>
  </ul>
    check <a href="#repositories">Repositories</a>
</section>

<section id="next.js-and-vite-with-postcss">
  <h2>Next.js and vite support for PostCSS</h2>
  
  <p>
  Next.js compiles CSS for its built-in CSS support using PostCSS. Check <a href='https://nextjs.org/docs/pages/building-your-application/configuring/post-css'>next.js documentation</a>
  <p>It is applied automatically to all imported CSS if the vite project contains valid PostCSS config (any format supported by postcss-load-config, e.g., postcss.config.js). Check <a href='https://vitejs.dev/guide/features#postcss'>vite documentation</a></p>
  </p>
</section>

<section id="popular-plugins-built-over-postcss">
  <h2>Popular plugins built over postcss</h2>
  <ul>
  <li><a href='https://www.npmjs.com/package/autoprefixer'>Autoprefixer</a> : PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter and Alibaba.</li>
  <li><a href='https://github.com/cssnano/cssnano'>cssnano</a> : cssnano is a modern, modular compression tool written on top of the PostCSS ecosystem, which allows us to use a lot of powerful features in order to compact CSS appropriately</li>
  <li><a href='https://stylelint.io/'>stylint</a> : A mighty CSS linter that helps you avoid errors and enforce conventions.</li>
  <li><a href='https://purgecss.com/'>purgeCss</a> : PurgeCSS is a tool to remove unused CSS from your project</li>
  <li><a href='https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env#readme'>PostCSS Preset Env</a> : lets you convert modern CSS into something most browsers can understand, determining the polyfills you need based on your targeted browsers or runtime environments</li>
  </ul>
</section>

<section id="repositories">
  <h2>Repositories</h2>
  The following are repositories with sample code

  <h3><a href='https://github.com/NathanKr/post-css-playground'>post-css-playground</a></h3>
  post-css-playground is a Vanila js repo with postcss
  
  <h4>Motivation</h4>
  Experiment with postcss using the plugins nanocss and postcss-preset-env via postcss.config.js. postcss-cli invokes postcss via the package.json scripts

  <h4>Points of interest</h4>
  <ul>
    <li>Use packages postcss and postcss-cli to invoke the postcss plugin nanocss. </li>
    <li>Install packages postcss , postcss-cli and nanocss as dev dependencies because postcss is done on development </li>
    <li>Compare the size of styles.css before nanocss minimizing - 163B with the CSS file in dist after nanocss processing - 39B. These files are the same concerning the view</li>
    <li>Use postcss-preset-env here to convert CSS nesting to CSS format known to most browsers (e.g. CSS nesting is supported in chrom 120; check <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/Nesting_selector'>mdn documentation</a>)</li>
  </ul>

  <h3><a href='https://github.com/NathanKr/post-css-vite-playground'>post-css-vite-playground</a></h3>

  <h4>Motivation</h4>
  <p>In <a href='https://github.com/NathanKr/post-css-playground'>post-css-playground</a>, you must install the packages postcss and postcss-cli and call postcss in the package.json script. You do this to invoke the plugins in postcss.config.js</p>
  <p>But in vite project, part of this is done out of the box, i.e., you do not need to install the packages postcss and postcss-cli, and you do not need to call postcss in package.json</p>

<h4>Points of interest</h4>
  <ul>
  <li> There is no need to use nanocss explicitly because vite minimizes the CSS out of the box. simply do 'npm run build' and look inside the dist/assets directory</li>
  <li> No need to use postcss-preset-env explicitly to translate nesting to a format known to the old browser. do 'npm run build' and look inside the dist/assets directory</li>
</ul>

  </ul>
  
  
</section>

<section id="references">
  <h2>References</h2>
  <ul>
  <li><a href='https://postcss.org/'>Official docs</a></li>
  <li><a href='https://www.npmjs.com/package/postcss'>npm</a></li>
  <li><a href='https://www.youtube.com/watch?v=WhCXiEwdU1A'>PostCSS in 100 Seconds</a></li>
  <li><a href='https://www.youtube.com/watch?v=Kn2SKUOaoT4'>Learn PostCSS In 15 Minutes</a></li>
  </ul>
</section>
