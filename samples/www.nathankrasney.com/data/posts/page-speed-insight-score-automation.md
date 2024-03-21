---
title: "How to Automate Page Speed Insight Score"
date: "Nov 20, 2023"
excerpt: "How to use typescript to compute the score automatically for different tabs and save time"
cover_image: "/images/posts/page-speed-insight-score-automation/page-speed-insight-score-automation2-hero.webp"
link_title: "Score Automation"
cover_image_width_px: 1280
cover_image_height_px: 850
---

<!-- Table of Contents -->
<aside id="table-of-contents">
  <h2>Table of Contents</h2>
  <ul>
    <li><h3><a href="#what-is-page-speed-insight-and-score">What is Page Speed Insight and Score</a></h3></li>
    <li><h3><a href="#motivation-for-page-speed-insight-score">Motivation for Page Speed Insight Score</a></h3></li>
    <li><h3><a href="#why-would-you-want-to-compute-the-score-automatically">Why Compute the Score Automatically</a></h3></li>
    <li><h3><a href="#which-api-i-am-using">Which API am I Using</a></h3></li>
    <li><h3><a href="#how-did-i-get-the-api-key">How Did I Get the API Key</a></h3></li>
    <li><h3><a href="#a-repository-you-can-clone-and-tweak">Repository You Can Clone and Tweak</a></h3></li>
    <li><h3><a href="#result-output">Result Output</a></h3></li>
    <li><h3><a href="#how-can-you-tweak-it-yourself">How Can You Tweak It Yourself</a></h3></li>
  </ul>
</aside>

<hr>
<h2 id='what-is-page-speed-insight-and-score'>What is page speed insight and score</h2>
The following is the result you get after you navigate to <a href='https://pagespeed.web.dev/'>https://pagespeed.web.dev/</a>enter a page url e.g. https://www.nathankrasney.com/ and click tha Analyze button

<div style='max-width:768px;position:relative;aspect-ratio:1044 / 518'>
  <img loading="lazy" 
  src='/images/posts/page-speed-insight-score-automation/pagespeed.web.dev.webp' 
  srcset='/images/posts/page-speed-insight-score-automation/pagespeed.web.dev.webp 1044w,
          /images/scaled/posts/page-speed-insight-score-automation/pagespeed.web.dev-783w.webp 783w,
          /images/scaled/posts/page-speed-insight-score-automation/pagespeed.web.dev-522w.webp 522w,'
  alt='https://pagespeed.web.dev/' title='https://pagespeed.web.dev/'/>
</div>

<span>Figure : https://pagespeed.web.dev/</span>

<h3>PageSpeed Insights</h3>
        <h4>Tool by Google</h4> PageSpeed Insights is a tool provided by Google to assess the performance of web pages
        <h4>Analysis for Mobile and Desktop</h4> It evaluates web pages for both mobile and desktop devices, providing insights into their loading speed and user experience

<h3>Performance Score</h3>
        <h4> 0-100 Scale</h4> PageSpeed Insights assigns a performance score ranging from 0 to 100, indicating the webpage's speed and overall performance.
        <h4>Score Categories</h4> Scores are categorized as Good (90-100), Needs Improvement (50-89), or Poor (0-49), helping website owners understand their page's performance relative to optimization best practices.

<h3>Metrics Evaluated</h3>
        <h4>Key Metrics</h4> The tool considers various metrics such as First Contentful Paint (FCP), Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Total Blocking Time (TBT) to assess and provide recommendations for improving webpage performance.
        
<hr>
<h2 id="motivation-for-page-speed-insight-score">Motivation for page speed insight score</h2>
<h3>User Experience Enhancement</h3>

<h4>Faster Loading Times</h4> Improving the PageSpeed Insights score results in faster loading times for web pages, enhancing the overall user experience.
<h4>Reduced Bounce Rates</h4> Users are more likely to stay and engage with a site that loads quickly, leading to lower bounce rates.

<h3>SEO and Search Rankings</h3>

<h4>Search Engine Visibility</h4> Google considers page speed as a ranking factor, and a higher PageSpeed Insights score can positively impact search engine rankings.
<h4>Improved Discoverability</h4> Websites with faster loading times are more likely to be prioritized by search engines, potentially increasing visibility in search results.

<h3>Conversion Rate Optimization:

<h4>Higher Conversions</h4> Faster-loading pages contribute to a positive user experience, leading to higher conversion rates, whether that involves making a purchase, filling out a form, or other desired user actions.

<hr>
<h2 id='why-would-you-want-to-compute-the-score-automatically'>Why would you want to compute the score automatically</h2>
<p>In short, it saves you time and effort</p>
<p>You can navigate to <a href='https://pagespeed.web.dev/'>https://pagespeed.web.dev/</a> insert a url and wait for about 15 sec. if you have 10 pages to check you need to wait at least 150 sec, not including the time it takes you to enter each page URL</p> 
<p> But by using the automation tool you can do it 3 times faster and in one go</p>

<hr>
<h2 id='which-api-i-am-using'>Which API i am using</h2>
Google provides an <a href='https://developers.google.com/speed/docs/insights/v5/get-started'>api</a>

<hr>
<h2 id='how-did-i-get-the-api-key'>How did i get the api key</h2>
Navigate to <a href='https://developers.google.com/speed/docs/insights/v5/get-started#APIKey'>get-started#APIKey</a> and click on the button "Get a Key"

<hr>
<h2 id='a-repository-you-can-clone-and-tweak'>A repository you can clone and tweak</h2>
<a href='https://github.com/NathanKr/page-speed-insight-api-playground'>github repository</a>. The tag for the time of this post is <a href='https://github.com/NathanKr/page-speed-insight-api-playground/releases/tag/0.26'>0.26</a>

<hr>
<h2 id='result-output'>Result output</h2>
Following are two run 5 minutes apart and there are some deviations e.g for the home page

<div style='max-width:768px;position:relative;aspect-ratio:1248 / 352'>
  <img loading="lazy" 
  src='/images/posts/page-speed-insight-score-automation/psi-score-1.webp'  
  srcset='/images/posts/page-speed-insight-score-automation/psi-score-1.webp 1248w ,
          /images/scaled/posts/page-speed-insight-score-automation/psi-score-1-936w.webp 936w,
          /images/scaled/posts/page-speed-insight-score-automation/psi-score-1-624w.webp 642w,
          /images/scaled/posts/page-speed-insight-score-automation/psi-score-1-312w.webp 312w,
          '
  alt='first page speed insight score automation' 
  title='first page speed insight score automation'>
</div>
<span>Figure : Page speed insight score 1</span>

<div style='max-width:768px;position:relative;aspect-ratio:1224 / 356'>
  <img loading="lazy" 
  src='/images/posts/page-speed-insight-score-automation/psi-score-2.webp' 
  srcset='/images/posts/page-speed-insight-score-automation/psi-score-2.webp 1224w ,
          /images/scaled/posts/page-speed-insight-score-automation/psi-score-2-918w.webp 918w,
          /images/scaled/posts/page-speed-insight-score-automation/psi-score-2-612w.webp 612w,
          /images/scaled/posts/page-speed-insight-score-automation/psi-score-2-306w.webp 306w
          '
  alt='second page speed insight score automation' 
  title='second page speed insight score automation'> 
</div>

<span>Figure : Page speed insight score 2 (after 5 minutes)</span>

<hr>
<h2 id='how-can-you-tweak-it-yourself'>How can you tweak it yourself</h2>

navigate to data/infos.ts and change according to your needs

<pre>
<code class='language-typescript'>
const baseUrl = "https://nathankrasney.com";

const tabs: string[] = [
  "/",
  "/about",
  "/contact",
  "/courses",
  "/quiz",
  "/testimonials",
  // "/blog",
  "/events",
];

const catChosen = {
  performance: true,
  accessibility: true,
  bestPractices: true,
  seo: true,
};

const strategy = StrategyGoogleApi.mobile;
</code>
</pre>
