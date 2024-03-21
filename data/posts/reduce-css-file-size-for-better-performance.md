---
title: "How to Reduce CSS File Size for Better Web Performance"
date: "Jan 7, 2024"
excerpt: "Learn How I Reduced CSS File and How it Effect Page Performance"
cover_image: "/images/posts/reduce-css-file/reduce-css-file-new-hero.webp"
link_title: "Reduce CSS File"
cover_image_width_px: 1303
cover_image_height_px: 861
---

<h2> Table of Contents</h2>
<nav>
<ul>

<li><h3><a href="#the-relation-between-css-file-size-and-web-performance">The Relation Between CSS File Size and Web Performance</a></h3></li>
    <li><h3><a href="#how-to-reduce-css-file">How to Reduce the CSS File Size</a></h3></li>
    <li><h3><a href="#css-files-vs-css-in-js-performance-wise">CSS Files vs CSS in JS -  performance-wise</a></h3></li>
    <li><h3><a href="#lets-improve-performance-for-this-use-case">Improve Performance for a Specific Use Case</a></h3></li>
    <li><h3><a href="#reduced-css-file-size">Size of Reduced CSS File</a></h3></li>
    <li><h3><a href="#how-to-measure-web-performance">How to Measure Web Performance</a></h3></li>
    <li><h3><a href="#how-to-analyze-web-performance">How to Analyze Web Performance</a></h3></li>
    <li><h3><a href="#use-npm-scripts-pre-post">Use npm Scripts pre/post</a></h3></li>
    <li><h3><a href="#repository">Repository</a></h3></li>
    <li><h3><a href="#production-website">Production website</a></h3></li>
    <li><h3><a href="#references">References</a></h3></li>
    </ul>
</nav>

<section id='the-relation-between-css-file-size-and-web-performance'>

<h2>The Relation Between CSS File Size and Web Performance</h2>
There are two main factors :

<h3>Download Time</h3>
Given a throughput rate, the smaller the CSS file, the quicker the browser can download it from the server.

<h3>Page Load Speed</h3>
Low-priority scripts, for example, might take time to download, but the browser does not require them to render the page. However, the user can see the page only after the browser renders it. Rendering relies on CSS files, and this issue, referred to as <a href='https://developer.mozilla.org/en-US/docs/Glossary/Render_blocking'>render-blocking</a>, also applies to JavaScript files
</section>

<section id='how-to-reduce-css-file'>
<h2 >How to Reduce the CSS File Size</h2>
<ul>
<li><a href='https://purgecss.com'>purgeCSS</a></li>
<li>assets compression (gzip)
<p>
  Done by default by next.js for assets served to the browser. check <a href='https://nextjs.org/docs/app/api-reference/next-config-js/compress'>gzip in next.js</a></p>
  <p>The browser also supports gzip check <a href='https://developer.mozilla.org/en-US/docs/Glossary/GZip_compression'>developer.mozilla.org</a>
  </p>
</li>
</ul>
</section>

<section id='css-files-vs-css-in-js-performance-wise'>
<h2>CSS Files vs CSS in JS - performance-wise</h2>
<p>Browsers are optimized to use CSS files, so CSS files look better for performance</p> 
<p>CSS in JS has js code, which also contributes to the performance penalty</p>
<p>To solve the global scope issue, you might use CSS modules</p>
</section>

<section id='lets-improve-performance-for-this-use-case'>
<h2>Improve Performance for a Specific Use Case</h2>
The use case is using a navbar with a react-bootstrap package. We have a few options :
<ol>
<li>Improve as is --> problematic purgeCSS-wise because react-bootstrap uses bootstrap classes as variables, making it complicated. You can use safelisting as done <a href='https://blog.openreplay.com/removing-unused-css-with-purgecss'>blog post removing-unused-css-with-purgecss</a>, but this needs to be more robust.</li>
<li>Use only bootstrap without react-bootstrap --> Pros: purgeCSS can identify better + less code without the package. Cons: require code change from react-bootstrap to bootstrap</li>
<li>Use CSS in js, e.g., MUI ---> Con: this is less preferred, performance-wise</li>
</ol>

Of the three options, I choose to go with the second option - bootstrap. I am also using CSS modules that handle the CSS global scope

</section>

<section id='reduced-css-file-size'>
  <h2>Size of Reduced CSS File</h2>
  <p>bootstrap.min.css is 228KB while bootstrap-with-purgecss.css (check bootstrap/dist/css/bootstrap-with-purgecss.css after build) is 18KB thus X12 smaller !!!</p>

  <p>Following the build phase, you see css/4ca23750ecaca193.css 4.27 kB, which is the total CSS file, and this is the result of next.js gzip</p>

  <div style='max-width:768px;position:relative;aspect-ratio:779 / 417'>
  <img loading="lazy" 
  src='/images/posts/reduce-css-file/css-file-after-purge-and-gzip.webp' 
  srcset='/images/posts/reduce-css-file/css-file-after-purge-and-gzip.webp 779w,
          /images/scaled/posts/reduce-css-file/css-file-after-purge-and-gzip-584w.webp 584w ,
          /images/scaled/posts/reduce-css-file/css-file-after-purge-and-gzip-390w.webp 390w'
  alt='css file after purge and gzip'>
  </div>
</section>

<section id='how-to-measure-web-performance'>
<h2>How to Measure Web Performance</h2>
<a href='https://pagespeed.web.dev/'>Page Speed Insight</a>

Final performance score - 100. You can not get better

<div style='max-width:768px;position:relative;aspect-ratio:1190 / 468'>
  <img loading="lazy" 
  src='/images/posts/reduce-css-file/performance-score.webp' 
  srcset='/images/posts/reduce-css-file/performance-score.webp 1190w,
          /images/scaled/posts/reduce-css-file/performance-score-832w.webp 832w ,
          /images/scaled/posts/reduce-css-file/performance-score-555w.webp 555w ,
          /images/scaled/posts/reduce-css-file/performance-score-277w.webp 277w'
  alt='performance score'>
</div>

</section>

<section id='how-to-analyze-web-performance'>
<h2>How to Analyze Web Performance</h2>
<a href='https://www.webpagetest.org/'>Web Page Test</a>

<p>Render (in green) does not start (render-blocking) until the CSS is downloaded and processed by the browser.

<div style='max-width:768px;position:relative;aspect-ratio:1110 / 533'>
  <img loading="lazy" 
  src='/images/posts/reduce-css-file/css-render-blocking.webp' 
  srcset='/images/posts/reduce-css-file/css-render-blocking.webp 1110w,
          /images/scaled/posts/reduce-css-file/css-render-blocking-833w.webp 833w ,
          /images/scaled/posts/reduce-css-file/css-render-blocking-555w.webp 555w ,
          /images/scaled/posts/reduce-css-file/css-render-blocking-278w.webp 278w'
  alt='css render blocking'>
</div>

</p>
</section>

<section id='use-npm-scripts-pre-post'>
<h2>Use npm Scripts pre \ post</h2>
<p>Npm scripts pre \ post are part of <a href='https://github.com/NathanKr/purge-css-next.js-playground/blob/main/package.json'>package.json</a>. The prebuild script will automatically execute before the build script</p>
<p>use "postbuild" script if you want to invoke a script automatically after the build script</p>

<pre>
<code class='language-json'>
"prebuild": "node scripts/remove-.next.js &amp;&amp; npm run build-css-with-purgecss-cli",
"build": "next build",
</code>
</pre>

In general, if you want to invoke a script before a script name script1, you name it "prescript1", and the same goes for the post via "postscript1"

<p>npm per \ post scripts work out of the box with npm</p>
<p>using pnpm, you need to add a .npmrc file on the project root(check <a href='https://thedaviddias.dev/notes/how-to-fix-post-pre-build-pnpm'>how-to-fix-post-pre-build-pnpm</a>)

<pre>
<code class='language-shell'>
enable-pre-post-scripts=true
</code>
</pre>

</p>
</section>

<section id='repository'>
<h2>Repository</h2>
This is a POC project for using bootstrap , purgeCSS , gzip and pre script

<a href='https://github.com/NathanKr/purge-css-next.js-playground'>purge-css-next.js-playground (tag 0.41)</a>

</section>

<section id='production-website'>
<h2>Production website</h2>
<p>At <a href='https://nathankrasney.com/'>www.nathankrasney.com</a> , I am using pre-script, purgeCSS, and bootstrap. I am using next.js, so gzip is done in build time on the CSS files out of the box by next.js</p>   
 <p>Feel free to check the performance of my website pages using <a href='https://pagespeed.web.dev/'>Page Speed Insight</a>. Note that there are fluctuations between sampling, so you can check a few times or use another way, as described in my blog post <a href='https://nathankrasney.com/posts/page-speed-insight-score-automation'>How to Automate Page Speed Insight Score></a></p>
</section>

<section id='references'>
<h2>References</h2>
<ul>
<li><a href='https://blog.openreplay.com/removing-unused-css-with-purgecss/'>'Removing unused CSS with PurgeCSS', Antonello Zanini  Jun 24, 2023</a></li>
<li><a href='https://docs.npmjs.com/cli/v9/using-npm/scripts#pre--post-scripts'>npm docs - Pre & Post Scripts</a></li>
<li><a href='https://thedaviddias.dev/notes/how-to-fix-post-pre-build-pnpm'>'How to fix "postbuild" and "prebuild" not working with pnpm?', David Dias, Jul 30, 2022</a></li>
<li><a href='https://blog.logrocket.com/css-vs-css-in-js/'>'CSS vs. CSS-in-JS: How and why to use each',  Rahul Chhodde, Nov 17, 2022</a></li>
<li><a href='https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b'>"Why We're Breaking Up with CSS-in-JS", Sam Magura,  Oct 16, 2022</a></li>
</ul>
</section>
