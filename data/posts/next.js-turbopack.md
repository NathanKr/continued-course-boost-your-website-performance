---
title: "How to Easily Get Faster next.js Development Server with Turbopack"
date: "Dec 18, 2023"
excerpt: "Use The Rust-powered Successor to Webpack for Fast Development Experience for Apps of Any Size"
cover_image: "/images/posts/next.js-turbopack/turbopack-new-dim-804w-534w.webp"
link_title: "Get Better DX"
cover_image_width_px: 804
cover_image_height_px: 534
---

<h2> Table of Contents</h2>
<nav>
<ol>
  <li><h3><a href="#what-is-turbopack">What is Turbopack</a></h3></li>
  <li><h3><a href="#motivation-for-turbopack">Motivation for Turbopack</a></h3></li>
  <li><h3><a href="#how-to-use-turbopack">How to Use Turbopack</a></h3></li>
  <li><h3><a href="#turbopack-status-for-next.js-14">Turbopack Status for next.js 14</a></h3></li>
  <li><h3><a href="#reopsitory">Repository</a></h3></li>
  <li><h3><a href="#references">References</a></h3></li>
  </ol>
</nav>

<section id="what-is-turbopack">
<h2>What is Turbopack</h2>
<p>Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust by the creators of webpack and Next.js</p>
</section>

<section id="motivation-for-turbopack">
<h2>Motivation for Turbopack</h2>
<p>The motivation behind TurboPack is to address the limitations of Webpack in handling large applications and incremental builds. TurboPack introduces a new architecture to optimize cache validation and improve build efficiency</p>
</section>

<section id="how-to-use-turbopack">
<h2>How to Use Turbopack</h2>
<p>You simply add --turbo to your dev script in package.json as follows

before turopack

<pre>
<code class='language-shell'>
"dev" : "next dev"
</code>
</pre>

with turbopack

<pre>
<code class='language-shell'>
"dev" : "next dev --turbo"
</code>
</pre>

</p>
</section>

<section id="turbopack-status-for-next.js-14">
<h2>Turbopack Status for next.js 14</h2>
<ul>
  <li>5,000 tests passing for App & Pages Router</li>
  <li>53% faster local server startup</li>
  <li>94% faster code updates with Fast Refresh</li>
</ul>
<p>This benchmark is a practical result of performance improvements you should expect with a large application (and large module graph). With 90% of tests for next dev now passing, you should see faster and more reliable performance consistently when using next dev --turbo.

Once we hit 100% of tests passing, we'll move Turbopack to stable in an upcoming minor release. We'll also continue to support using webpack for custom configurations and ecosystem plugins</p>

</section>

<section id="reopsitory">
<h2>Repository</h2>
<a href='https://github.com/NathanKr/turbopack-next.js-playground'>turbopack-next.js-playground</a>

<h3>Installation</h3>

<pre>
<code class='language-shell'>
npm i
</code>
</pre>

<h3>Usage</h3>

run with turbopack

<pre>
<code class='language-shell'>
npm run dev
</code>
</pre>

run without turbo

<pre>
<code class='language-shell'>
npm run dev-no-turbo
</code>
</pre>

<h3>Performance</h3>
<p>After a few runs, it is stabilizing to these values. In this sample for turbopack the dev server is ready after 780s. Without turbopack, the dev server is ready after 2.7 seconds. Thus, x3 better with turbopack for this repository</p>

with turbo

<div style='max-width:768px;position:relative;aspect-ratio:1189 / 530'>
  <img loading="lazy" 
  src='/images/posts/next.js-turbopack/with-turbo.webp' 
  srcset= '/images/posts/next.js-turbopack/with-turbo.webp 1189w ,
          /images/scaled/posts/next.js-turbopack/with-turbo-892w.webp 892w ,
          /images/scaled/posts/next.js-turbopack/with-turbo-595w.webp 595w ,
          /images/scaled/posts/next.js-turbopack/with-turbo-297w.webp 297w 
          '
  alt='performance with turbopack'>
</div>

without turbo

<div style='max-width:768px;position:relative;aspect-ratio:1192 / 531'>
  <img loading="lazy" 
  src='/images/posts/next.js-turbopack/without-turbo.webp' 
  srcset= '/images/posts/next.js-turbopack/without-turbo.webp 1192w ,
          /images/scaled/posts/next.js-turbopack/without-turbo-894w.webp 894w ,
          /images/scaled/posts/next.js-turbopack/without-turbo-596w.webp 596w ,
          /images/scaled/posts/next.js-turbopack/without-turbo-298w.webp 298w 
          '
  alt='performance without turbopack'>

</div>

</section>

<section id="references">
<h2>References</h2>
<ul>
<li><a href='https://turbo.build/pack'>Official docs</a> </li>
<li><a href='https://nextjs.org/blog/next-14#nextjs-compiler-turbocharged'>Status in next.js 14</a></li>
</ul>

</section>
