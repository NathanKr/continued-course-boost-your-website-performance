
<h2>1.51 (18 Feb 2023)</h2> 
fix a bug in index.tsx by using background-image + media query

<h2>1.5 (16 Feb 2023)</h2> 
<ul>
<li>All pages have 100 for page speed insight sep , accessability and best practices</li>
<li>All pages have average performance score of about 92-94</li>
</ul>

<h2>1.43 (12 Feb 2023)</h2> 
Add code highlight

<h2>1.42 (6 Feb 2023)</h2> 
Performance issue
<ul>
<li>use webp</li>
<li>use srcset on post img</li>
</ul>

<h2>1.41 (24 Jan 2023)</h2> 
Performance issue
<ul>
<li>better seo \ accessability \ best preactices in posts</li>
<li>use aspect-ratio in core-web-vitls to improve CLS</li>
</ul>


<h2>1.4 (8 Jan 2023)</h2> 
Reduce bootstrap css file
<ul>
<li>add purgeCSS for build</li>
<li>remove react-boostrap be cause purgeCSS can not handle it robustly</li>
</ul>

<h2>1.3 (18 Dec 2023)</h2> 
<ul> 
<li>discount system for wednesday and coupon + e2e tests based on <a href='https://github.com/NathanKr/nathan-krasney-com-private/discussions/63'>this discussion</a></li> 
<ul> 


<h2>1.26 (29 Nov 2023)</h2> 
<ul> 
<li>get events to eventslide via getStaticProps - remove api</li>
<li>add JoinMyNewsletter to be used in post and contact</li>
<ul> 



<h2>1.25 (28 Nov 2023)</h2> 
<ul> 
<li>add subscribe to newsletter using mailchimp</li>
<li>add meetup icon</li>
<li>add title to icons and images</li>
<ul> 

<h2>1.24 (27 Nov 2023)</h2> 
<ul> 
<li>add price (low) to podia courses</li>
<li>use Inter font from next.js</li>
<li>first post improvments like table of contents</li>
<li>better performance using Image priority on first images</li>
<li>add button class with my brand colors</li>
<li>finalize lang only english</li>
<ul> 


<h2>1.22 (11 Nov 2023)</h2> 
<ul> 
<li>bring blog back</li>
<li>remove dummy posts</li>
<li>add first post</li>
<
</ul> 


<h2>1.21 (19 Nov 2023)</h2> 
<ul> 
<li>remark blog tab</li>
</ul> 


<h2>1.1 (..... 2023)</h2> 
<ul> 
<li>remove heb support</li>
<li>add static blog </li>
<li>better seo in terms of : heading , img (alt) , missing head title and description</li>
</ul>

<h2>1.07 (1 Nov 2023)</h2> 
<ul> 
<li>remove meetup icon</li>
</ul>

<h2>1.06 (10 Oct 2023)</h2> 
<ul> 
<li>add Real-World TypeScript Unit Testing course</li>
</ul>


<h2>1.05 (22 Mar 2023)</h2> 
<ul> 
<li>add next.js on home and more</li>
</ul>


<h2>1.05 (21 Mar 2023)</h2> 
<ul> 
<li>remove sale course</li>
</ul>


<h2>1.04 (19 Mar 2023)</h2> 
<ul> 
<li>redeploy after adding NEXT_PUBLIC_GOOGLE_ANALYTICS_ID to vercel </li>
</ul>

<h2>1.03 (13 Mar 2023)</h2>
<ul> 
<li>better readme</li>
<li>add page name to browser tab</li>
</ul> 

<h2>1.02 (13 Mar 2023)</h2>
<ul> 
<li>change directory for deploy</li>
<li>bring back /api/events to use from client</li>
<li>the background for home is better but i am not able to use cover</li>
<li>handle i18n in terms of
<ul>
<li>page translations files : he.ts , en.ts under data/locales using ts interface ILang</li>
<li>translations in data files : event-slide.json , onlines-courses.json , testemonials.json using ts interface ILangKeyValue </li>
<li>next.js locale based routing in Top component</li>
<li>language change and persist in local storage in ChangeLanguage component</li>
<li>layout : textAlignStyle , directionStyle via my custom hook useLang</li>
</ul>
</li>
</ul>

<h2>1.01 (06 Mar 2023)</h2>
<ul> 
<li>use data of old-react in next.js</li>
<li>create different directory structure : old-react , old-next.js , next.js</li>
<li>working with next.js 13 Image</li>
<li>use next.js 13.2 instead of 13.0</li>
<li>add sharp package following warning</li>
<li>change all files to lower case with -</li>
<li>access events\testimonials\courses from function not api directory and remove also from api</li>
</ul>

<h2>1.0 (05 Mar 2023)</h2>
<ul> 
<li>copy the <a href='https://github.com/NathanKr/pass-2-tei-course-react-to-next-private'>migration course repo</a> here and it is working</li>
</ul> 


