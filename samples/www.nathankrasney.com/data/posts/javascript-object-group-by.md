---
title: "How to Use Object.groupBy in Javascript"
date: "Dec 1, 2023"
excerpt: "Master JavaScript's Object.groupBy for efficient data organization and enhanced coding prowess"
cover_image: "/images/posts/javascript-object-group-by/javascript-object-group-by-hero-1084w-720w.webp"
link_title: "New 2023 Javascript Method"
cover_image_width_px: 1084
cover_image_height_px: 720
---

<h2> Table of Contents</h2>
<nav>
  <ul>
    <li><h3><a href="#what-is-object-group-by">What is Object.groupBy</h3></a></li>
    <li><h3><a href="#when-should-you-use-object-group-by">When Should You Use Object.groupBy</h3></a></li>
    <li><h3><a href="#sample1">Sample1</h3></a></li>
    <li><h3><a href="#sample2">Sample2</h3></a></li>
    <li><h3><a href="#sample3">Sample3</h3></a></li>
    <li><h3><a href="#browser-comatability">Browser Compatibility 1-Dec-2023</h3></a></li>
    <li><h3><a href="#does-it-works-in-node">Does it Work in Node.js</h3></a></li>
    <li><h3><a href="#repository">Repository</h3></a></li>
    <li><h3><a href="#references">References</h3></a></li>
  </ul>
</nav>

<section id="what-is-object-group-by">
  <h2>What is Object.groupBy</h2>
  <p>The Object.groupBy() static method groups the elements of a given iterable, such as array \ Map, according to the string values returned by a provided callback function. The returned object has separate properties for each group, containing arrays with the elements in the group</p>
  <p>Browsers started supporing Object.groupBy by sep 2023 check <a href='#browser-comatability'>browser compatibility</a></p>
</section>

<section id="when-should-you-use-object-group-by">
  <h2>When Should You Use Object.groupBy</h2>
  <p>This method should be used when strings can represent group names. If you need to group elements using a key that is some arbitrary value, use Map.groupBy() instead</p>
</section>

<section id="sample1">
  <h2>Sample1</h2>
 
  <h3>source code</h3>
   <a href='https://github.com/NathanKr/object-group-by-javascript-playground/blob/main/client/utils.js'>source code - sample1()</a>

<pre>
<code class='language-typescript'>
export function sample1() {
  const posts = [
    {
      name: "Why Should You Use Core Web Vitals in Your WebSite",
      category: "performance",
    },
    { name: "Object.groupBy", category: "javascript" },
    {
      name: "How to Automate Page Speed Insight Score",
      category: "performance",
    },
  ];

/_
--- group by category : javascript , performance
--- groups keys are categories and value are the original object
_/
const groups = Object.groupBy(posts, ({ category }) => category);
console.log(groups);
console.log(Object.keys(groups));
console.log(Object.values(groups));
}
</code>
</pre>

  <h3>output</h3>
  <div style='max-width:768px;position:relative;aspect-ratio:724 / 347'>
    <img loading="lazy" 
    src=   '/images/posts/javascript-object-group-by/sample1.webp' 
    srcset='/images/posts/javascript-object-group-by/sample1.webp 724w,
            /images/scaled/posts/javascript-object-group-by/sample1-543w.webp 543w 
            /images/scaled/posts/javascript-object-group-by/sample1-362w.webp 362w ,
            '
    alt='Object.groupBy sample1' title='Object.groupBy sample1' />
  </div>

</section>

<section id="sample2">
  <h2>Sample2</h2>
 
  <h3>source code</h3>
   <a href='https://github.com/NathanKr/object-group-by-javascript-playground/blob/main/client/utils.js'>source code - sample2()</a>

<pre>
<code class='language-typescript'>
export function sample2() {
  const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];

/_
--- group by type : vegetables , fruit , meat
--- groups keys are types and value are the original object
_/
const groups = Object.groupBy(inventory, ({ type }) => type);
console.log("groups", groups);
console.log("Object.keys(groups)", Object.keys(groups));
console.log("Object.values(groups)", Object.values(groups));
}
</code>
</pre>

  <h3>output</h3>
  <div style='max-width:768px;position:relative;aspect-ratio:729 / 393'>
    <img loading="lazy" 
      src='/images/posts/javascript-object-group-by/sample2.webp' 
      srcset='/images/posts/javascript-object-group-by/sample2.webp 729w,
              /images/scaled/posts/javascript-object-group-by/sample2-547w.webp 547w ,
            /images/scaled/posts/javascript-object-group-by/sample2-365w.webp 365w'
      alt='Object.groupBy sample2' title='Object.groupBy sample2'/>
  </div>

</section>

<section id="sample3">
  <h2>Sample3</h2>
 
  <h3>source code</h3>
   <a href='https://github.com/NathanKr/object-group-by-javascript-playground/blob/main/client/utils.js'>source code - sample3()</a>

<pre>
<code class='language-typescript'>
export function sample3() {
  const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];

/_
--- group by inventory : big , small
--- groups keys are quantity based and value are the original object
_/
const groups = Object.groupBy(inventory, ({ quantity }) => {
return quantity > 5 ? "big" : "small";
});
console.log("groups", groups);
console.log("Object.keys(groups)", Object.keys(groups));
console.log("Object.values(groups)", Object.values(groups));
}
</code>
</pre>

<h3>output</h3>
<div style='max-width:768px;position:relative;aspect-ratio:708 / 340'>
  <img loading="lazy" 
      src='/images/posts/javascript-object-group-by/sample3.webp' 
      srcset='/images/posts/javascript-object-group-by/sample3.webp 708w ,
            /images/scaled/posts/javascript-object-group-by/sample3-531w.webp 531w , 
            /images/scaled/posts/javascript-object-group-by/sample3-354w.webp 354w '
            alt='Object.groupBy sample3' title='Object.groupBy sample3'/>

</div>

</section>

<section id="browser-comatability">
  <h2>Browser Comatability 1-Dec-2023</h2>
  <div style='max-width:768px;position:relative;aspect-ratio:675 / 324'>
    <img loading="lazy" 
    src='/images/posts/javascript-object-group-by/object-group-by-browser-compatability.webp' 
    srcset='/images/scaled/posts/javascript-object-group-by/object-group-by-browser-compatability.webp 675w ,
            /images/scaled/posts/javascript-object-group-by/object-group-by-browser-compatability-506w.webp 506w ,
            /images/scaled/posts/javascript-object-group-by/object-group-by-browser-compatability-338w.webp 338w
            '
    alt='browser compatability of Object.groupBy 1-Dec-2023' title='browser compatability of Object.groupBy 1-Dec-2023' />
  </div>

</section>

<section id="does-it-works-in-node">
  <h2>Does it Work in node.js</h2>
 <p>node.js does not support it out of the box. you can use Polyfill of Object.groupBy in core-js<p> 
   <h3>Node.js sample</h3>
    <a href='https://github.com/NathanKr/object-group-by-javascript-playground/blob/main/server/index.js'>source node.js Object.groupBy polyfill</a>

<pre>
<code class='language-typescript'>
import "core-js/features/object/group-by.js";

const posts = [
  {
    name: "Why Should You Use Core Web Vitals in Your WebSite",
    category: "performance",
  },
  { name: "Object.groupBy", category: "javascript" },
  {
    name: "How to Automate Page Speed Insight Score",
    category: "performance",
  },
];

const groups = Object.groupBy(posts, ({ category }) => category);
console.log(groups);
</code>
</pre>

</section>

<section id="repository">
  <h2>Repository</h2>
  <a href='https://github.com/NathanKr/object-group-by-javascript-playground'>object-group-by-javascript-playground (tag 0.2)</a>
</section>

<section id="references">
  <h2>References</h2>
  <ul>
  <li><a href='https://tc39.es/proposal-array-grouping/#sec-object.groupby'>Object.groupBy specification</a></li>
  <li> <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy'>Object.groupBy mdn web docs</a></li>
  </ul>
</section>
