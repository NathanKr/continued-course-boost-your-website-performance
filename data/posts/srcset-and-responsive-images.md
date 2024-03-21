---
title: "srcset img Attribute and Responsive Images"
date: "Jan 26, 2024"
updateDate: "Feb 18, 2024"
excerpt: "Learn How to Use srcset and Make Your Images Load Faster"
cover_image: "/images/posts/srcset-and-responsive-images/srcset-new-hero-800w-531w.webp"
link_title: "Responsive Image With srcset"
cover_image_width_px: 800
cover_image_height_px: 531
---

<h2>Table of Contents</h2>
  <nav>
    <ul>
      <li><h3><a href="#top-level-perspective">Top-Level Perspective</a></h3></li>
      <li><h3><a href="#what-is-responsive-image">What is Responsive Image</a></h3></li>
      <li><h3><a href="#important-definitions">Important Definitions</a></h3></li>
      <li><h3><a href="#when-to-use-responsive-images">When to Use Responsive Images</a></h3></li>
      <li><h3><a href="#what-is-srcset-attribute">What is srcset Attribute</a></h3></li>
      <li><h3><a href="#srcset-vs-media-query">srcset vs Media Query</a></h3></li>
      <li><h3><a href="#what-is-sizes-attribute">What is sizes Attribute</a></h3></li>
      <li><h3><a href="#how-to-emulate-screen-resolution">How to Emulate Screen Resolution</a></h3></li>
      <li><h3><a href="#repository">Repository</a></h3></li>
      <li><h3><a href="#references">References</a></h3></li>
    </ul>
  </nav>

<section id="top-level-perspective">
  <h2>Top-level perspective</h2>
  Different devices (desktop, mobile, laptop) means
  <ul>
    <li>Different screen width/height</li>
    <li>Different resolutions for the same screen width, maybe: 1x,2x,3x</li>
  </ul>

These conditions create two challenges

<ul>
<li><strong>Ux</strong>: you want the UI to look good; in particular you don't want images to look distorted (wrong aspect ratio, not enough pixels)</li>
<li><strong>Performance</strong>: no need to download big images when it is not needed</li>

  </ul>

The solution to these challenges is responsive design.

In this article, we will concentrate on responsive images, which allow us to download different image files for the same img element given different device dimensions and resolution

</section>

<section id="what-is-responsive-image">
  <h2>What is a responsive image? </h2>
  
  <ul>
  <li>Responsive images work well on devices with widely differing <strong>screen sizes(width, height)</strong>, <strong>and resolution</strong></li>
  <li>The goal of the responsive image is to serve the right image to the right screen size and device (including desktops, laptops, tablets, and smartphones) to <strong>avoid downloading unnecessary large images on a smaller device</strong>
    <div style='max-width:768px;position:relative;aspect-ratio: 1118 / 409'>
      <img loading="lazy" 
      src='/images/posts/srcset-and-responsive-images/responsive-image.webp' 
      srcset='/images/posts/srcset-and-responsive-images/responsive-image.webp 1118w,
              /images/scaled/posts/srcset-and-responsive-images/responsive-image-839w.webp 839w ,
              /images/scaled/posts/srcset-and-responsive-images/responsive-image-559w.webp 559w ,
              /images/scaled/posts/srcset-and-responsive-images/responsive-image-280w.webp 280w'
      alt='responsive image' title='responsive image'/>
    </div>
  </li>
  <li>Responsive image plays an important role in <strong>web performance</strong></li>
  <li>Responsive image is part of <strong>responsive design</strong>
  </li>
  </ul>
  
</section>

<section id="important-definitions">
  <h2>Important definitions</h2>
  <h3>Display size</h3>
  <p>Display size refers to the physical dimensions of a screen, typically measured diagonally from one corner to the opposite corner. It is common to express display size in inches</p>
  <p>Often, people specify the display size as the diagonal size, such as 15 inches for PCs, 27 inches for PCs, 5.5 inches for mobile phones, etc</p>

  <h3>Display resolution</h3>
  <p>Resolution refers to the number of pixels on the display's screen. It is expressed as the total number of pixels in width by the total number of pixels in height. Commonly, the resolution is given as width x height (e.g., 1920x1080)</p>
  
  <h3>Pixel Density \ Pixels Per Inch (PPI)</h3>
  <p>Pixel density indicates the number of pixels per inch (PPI) on a display. The higher the pixel density, the more detailed the picture is</p>
  <p>In short, pixel density is the ratio between a screen’s size and its resolution</p>
  <p>For instance, the standard 1920×1080 Full HD resolution will result in a different pixel density (or pixels per inch) on a 24″ screen (92 PPI) and a 27″ screen (82 PPI).</p>

  <h3>1x , 2x , 3x screen resolution</h3>
  The terms "1x," "2x," and "3x" are used in the context of screen resolutions, particularly concerning images displayed on screens with different pixel densities. These terms are often associated with the srcset attribute in HTML, where they help define different versions of an image for different screen resolutions.

Notice that in the following figure, the same physical space is occupied by 1 pixel for a 1x screen, 4 pixels for a 2x screen, and 9 pixels for a 3x screen.

  <div style='max-width:768px;position:relative;aspect-ratio: 1200 / 675'>
    <img loading="lazy" 
    src='/images/posts/srcset-and-responsive-images/pixel-density.webp' 
    srcset='/images/posts/srcset-and-responsive-images/pixel-density.webp 1200w, 
            /images/scaled/posts/srcset-and-responsive-images/pixel-density-900w.webp 900w ,
            /images/scaled/posts/srcset-and-responsive-images/pixel-density-600w.webp 600w ,
            /images/scaled/posts/srcset-and-responsive-images/pixel-density-300w.webp 300w'
    alt='Pixel Density And Pixels Per Inch (PPI)' title='Pixel Density And Pixels Per Inch (PPI)'/>

  </div>

  <h4>1x</h4>
      <p>Definition: 1x, or "baseline," refers to the standard pixel density or resolution. In the context of images, this typically corresponds to a display with a standard pixel density, where one device pixel is equivalent to one CSS pixel</p>
    <p>Use Case: Images marked with 1x are intended for devices with a standard or baseline pixel density</p>

  <h4>2x</h4>
    <p>2x, or "retina" or "high-density," indicates a screen with a pixel density roughly twice that of the baseline. 2x is often applied to devices with high-resolution displays, such as Retina displays on Apple devices</p>
    <p>Use Case: Images marked with 2x are higher-resolution versions designed for devices with higher pixel densities to ensure sharp and clear visuals</p>
  <h4>3x</h4>
    <p>Definition: 3x signifies an even higher pixel density, approximately three times that of the baseline. 3x is used for devices with extremely high-resolution screens</p>
    <p>Use Case: Images marked with 3x are meant for devices with very high pixel densities, such as certain newer smartphones with ultra-high-definition displays</p>
</section>

<section id="when-to-use-responsive-images">
  <h2>When to use responsive images</h2>
  Responsive image use cases :
  <ol>
  <li>
  <h3>Resolution switching - Different sizes</h3>
  Depending on the device, we want to display identical image content, just larger or smaller

  <div style='max-width:768px;position:relative;aspect-ratio: 1147 / 192'>
    <img loading="lazy" 
    src='/images/posts/srcset-and-responsive-images/responsive-image-use-case-1-resolution-switching.webp' 
    srcset='/images/posts/srcset-and-responsive-images/responsive-image-use-case-1-resolution-switching.webp 1147w, 
            /images/scaled/posts/srcset-and-responsive-images/responsive-image-use-case-1-resolution-switching-860w.webp 860w ,
            /images/scaled/posts/srcset-and-responsive-images/responsive-image-use-case-1-resolution-switching-574w.webp 574w ,
            /images/scaled/posts/srcset-and-responsive-images/responsive-image-use-case-1-resolution-switching-287w.webp 287w'
    alt='resolution switching'
    title='resolution switching' />

  </div>

Check this <a href='#code-sample-resolution-switchin'>sample code resolution switching</a> and <a href='#code-sample-resolution-switching-with-sizes
'>sample code resolution switching with sizes</a>

  </li>

  <li>
  <h3>Density switching - Same size, different resolutions</h3>
   Suppose you're supporting multiple display resolutions, but everyone sees your image at the same real-world size on the screen. In that case, you can allow the browser to choose an appropriate resolution image using srcset with x-descriptors and without sizes — a somewhat easier syntax!
  <p>Density switching is a particular case of resolution-switching</p>
  <p>1x screen refers to a low-resolution screen, 2x screen refers to a high-resolution screen</p>

  <div style='max-width:768px;position:relative;aspect-ratio: 1144 / 185'>
    <img loading="lazy" 
    src='/images/posts/srcset-and-responsive-images/responsive-image-use-case-2-resolution-switching-density-switching.webp' 
      srcset='/images/posts/srcset-and-responsive-images/     responsive-image-use-case-2-resolution-switching-density-switching.webp 1144w,
            /images/scaled/posts/srcset-and-responsive-images/responsive-image-use-case-2-resolution-switching-density-switching-858w.webp 858w ,
            /images/scaled/posts/srcset-and-responsive-images/responsive-image-use-case-2-resolution-switching-density-switching-572w.webp 572w ,
            /images/scaled/posts/srcset-and-responsive-images/responsive-image-use-case-2-resolution-switching-density-switching-286w.webp 286w '
    alt='density switching' 
    title='density switching'/>
  </div>
    check this <a href='#code-sample-desnisty-switching'>sample code</a>

  </li>

  <li>
  <h3>Art direction -  change the image displayed to suit different image display sizes</h3>
  Serve cropped images or smaller images for smaller screens. Picture element is used here

  <div style='max-width:768px;position:relative;aspect-ratio:1145 / 166'>
    <img loading="lazy" 
    src='/images/posts/srcset-and-responsive-images/responsive-image-use-case-3-resolution-switching-art-direction.webp' 
    srcset='/images/posts/srcset-and-responsive-images/responsive-image-use-case-3-resolution-switching-art-direction.webp 1145w,
            /images/scaled/posts/srcset-and-responsive-images/responsive-image-use-case-3-resolution-switching-art-direction-859w.webp 859w ,
            /images/scaled/posts/srcset-and-responsive-images/responsive-image-use-case-3-resolution-switching-art-direction-573w.webp 573w ,
            /images/scaled/posts/srcset-and-responsive-images/responsive-image-use-case-3-resolution-switching-art-direction-286w.webp 286w '
    alt='art direction' 
    title='art direction'/>
  </div>
   Picture element is part of responsive images and supports srcset, but so I do not provide a sample code in this post
  </li>
  </ol>
</section>

<section id="what-is-srcset-attribute">
  <h2>What is srcset attribute</h2>
  <p>srcset is part of a responsive image. It is an attribute of img. Most developers need to be aware of this attribute and use it</p>

  <p>srcset defines the set of images we will allow the browser to choose between and what size each image is. Each image information set is separated from the previous one by a comma. For each one, we write:</p>
  <ul>
  <li>An image filename (e.g. elva-fairy-480w.jpg or pic-1600w.png)</li>
  <li>A space</li>
  <li>The image's intrinsic width in pixels (e.g., 480w) — note that this uses the w unit, not px, as expected. You can find an image's intrinsic size, which is its actual size, by inspecting the details of the image file on your computer.
    
  <div style='max-width:334px;position:relative;aspect-ratio: 334 / 175'>
    <img loading="lazy" 
    src='/images/posts/srcset-and-responsive-images/elva-480-details.jpg' 
    alt='elva-480-details.jpg' 
    title='elva-480-details.jpg'/>
  </div>  
  </li>
  </ul>

  <h3 id='code-sample-resolution-switchin'>Code sample - resolution switching</h3>
  <h4>Source code</h4>
  <a href='https://github.com/NathanKr/responsive-image-using-srcset-playground/blob/main/public/index-use-case1.html'>index-use-case1.html</a>

<pre>
<code class='language-html'>
  &lt;img
    style="width: 100vw"
    src="pic-1600w.png"
    alt="responsive image use case 1 - resolution switching without sizes"
    srcset="pic-1600w.png 1600w, pic-800w.png 800w, pic-600w.png 600w"
  /&gt;
</code>
</pre>

<p>The browser will typically base its decision for the appropriate image file on the device's pixel density (DPR) and the available width of the viewport</p>

<p>Notice that this algorithm is intelligent: if the viewport width is large, it fits the large picture for better UX. But if the viewport width is small, the UX will also be good enough with a smaller-width image. When the browser downloads a smaller image faster, it improves performance, especially regarding LCP (Largest Contentful Paint).</p>
Check the figs to get a better feeling

  <h4>Performance and file size</h4>
  These are the file sizes
  <ul>
  <li>pic-1600w.png - 27.1kb</li>
  <li>pic-800w.png  - 8.92kb</li>
  <li>pic-600w.png  - 6.55kb</li>
  </ul>

Notice that pic-600w.png file is x4 lighter than pic-1600w.png, so the download time is four times quicker, improving the performance. You can use <a href='pic-1600w.png'>Page Speed Insight</a> for performance in general and LCP in particular

  <h4>Figs</h4>
  You can see very nicely how the srcset algorithm fits the best image file based on the viewport width

  <hr/>
   <p>PC : viewport width 1173px --> pic-1600w.png is used</p>  
   <div style='max-width:768px;position:relative;aspect-ratio: 1258 / 485'>
    <img loading="lazy" 
    src='/images/posts/srcset-and-responsive-images/pixel-ratio-desktop-use-case1-a.webp' 
    srcset='/images/posts/srcset-and-responsive-images/pixel-ratio-desktop-use-case1-a.webp 1258w, 
            /images/scaled/posts/srcset-and-responsive-images/pixel-ratio-desktop-use-case1-a-944w.webp 944w ,
            /images/scaled/posts/srcset-and-responsive-images/pixel-ratio-desktop-use-case1-a-629w.webp 629w ,
            /images/scaled/posts/srcset-and-responsive-images/pixel-ratio-desktop-use-case1-a-315w.webp 315w '
    alt='viewport width 1173px' 
    title='viewport width 1173px'/>
   </div>

  <hr/>
  <p>PC : viewport width 791px --> pic-1600w.png is used</p>  
  <div style='max-width:768px;position:relative;aspect-ratio: 869 / 463'>
    <img loading="lazy" 
    src='/images/posts/srcset-and-responsive-images/pixel-ratio-desktop-use-case1-b.webp' 
    srcset='/images/posts/srcset-and-responsive-images/pixel-ratio-desktop-use-case1-b.webp 869w,
            /images/scaled/posts/srcset-and-responsive-images/pixel-ratio-desktop-use-case1-b-652w.webp 652w ,
            /images/scaled/posts/srcset-and-responsive-images/pixel-ratio-desktop-use-case1-b-435w.webp 435w '
    alt='viewport width 791px' 
    title='viewport width 791px'/>
  </div>

  <hr/>
  <p>PC : viewport width 674px --> pic-800w.png is used</p>  
  <div style='max-width:768px;position:relative;aspect-ratio: 738 / 445'>
    <img loading="lazy" 
    src='/images/posts/srcset-and-responsive-images/pixel-ratio-desktop-use-case1-c.webp' 
    srcset='/images/posts/srcset-and-responsive-images/pixel-ratio-desktop-use-case1-c.webp 738w, 
            /images/scaled/posts/srcset-and-responsive-images/pixel-ratio-desktop-use-case1-c-554w.webp 554w ,
            /images/scaled/posts/srcset-and-responsive-images/pixel-ratio-desktop-use-case1-c-369w.webp 369w'
    alt='viewport width 674px' 
    title='viewport width 674px'/>
  </div>

  <hr/>
  <p>PC : viewport width 445px --> pic-600w.png is used</p>  
  <div style='max-width:487px;position:relative;aspect-ratio: 487 / 363'>
    <img loading="lazy" 
    src='/images/posts/srcset-and-responsive-images/pixel-ratio-desktop-use-case1-d.webp' 
    alt='viewport width 445px' 
    title='viewport width 445px'/>
  </div>

  <hr/>
  <p>Mobile : The viewport width is 360, and the device pixel ratio is 2, so we use pic-800w.png. Notice that the device pixel ratio is 2, i.e., every image file pixel is represented by the mobile device screen by 2 pixels. So we have here 360*2 pixels, which seems appropriate for the pic-800w.png image </p>  
  <div style='max-width:720px;position:relative;aspect-ratio: 720 / 1600'>
    <img loading="lazy" 
    src='/images/posts/srcset-and-responsive-images/pixel-ratio-mobile-use-case1.webp' 
    srcset='/images/posts/srcset-and-responsive-images/pixel-ratio-mobile-use-case1.webp 720w,
            /images/scaled/posts/srcset-and-responsive-images/pixel-ratio-mobile-use-case1-540w.webp 540w ,
            /images/scaled/posts/srcset-and-responsive-images/pixel-ratio-mobile-use-case1-360w.webp 360w'
    alt='window width 360 and device pixel ratio 2' 
    title='window width 360 and device pixel ratio 2'/>
  </div>

  <h3 id='code-sample-desnisty-switching'>Code sample - density switching</h3>
  
  <h4>Source code</h4>

<a href='https://github.com/NathanKr/responsive-image-using-srcset-playground/blob/main/public/index-use-case3.html'>index-use-case3.html</a>

<pre>
<code class='language-html'>
&lt;img
  src="pic-1500w.png"
  alt="responsive image use case 3 - use density switching (no sizes)"
  srcset="pic-1500w.png 3x, pic-1000w.png 2x, pic-500w.png 1x"
/&gt;
</code>
</pre>

  <h4>Figs</h4>
  You can see very nicely how the srcset algorithm fits the best image file based on the pixel density of the screen device. The device with the most pixel density - 3x was matched with the file with the most pixels desktop-use-case3-3x.jpg
  
  <p>Fit desktop-use-case3-1x.jpg for 1x device screen</p>
  <div style='max-width:768px;position:relative;aspect-ratio: 892 / 522'>
    <img loading="lazy" 
    src='/images/posts/srcset-and-responsive-images/desktop-use-case3-1x.webp' 
    srcset='/images/posts/srcset-and-responsive-images/desktop-use-case3-1x.webp 892w,
            /images/scaled/posts/srcset-and-responsive-images/desktop-use-case3-1x-669w.webp 669w ,
            /images/scaled/posts/srcset-and-responsive-images/desktop-use-case3-1x-443w.webp 443w'
    alt='Fit desktop-use-case3-1x.jpg for 1x device screen' 
    title='Fit desktop-use-case3-1x.jpg for 1x device screen'/>
  </div>

  <p>Fit desktop-use-case3-2x.jpg for 2x device screen</p>
  <div style='max-width:768px;position:relative;aspect-ratio: 825 / 404'>
    <img loading="lazy" 
    src='/images/posts/srcset-and-responsive-images/desktop-use-case3-2x.webp' 
    srcset='/images/posts/srcset-and-responsive-images/desktop-use-case3-2x.webp 825w, 
            /images/scaled/posts/srcset-and-responsive-images/desktop-use-case3-2x-619w.webp 619w ,
            /images/scaled/posts/srcset-and-responsive-images/desktop-use-case3-2x-413w.webp 413w'
    alt='Fit desktop-use-case3-2x.jpg for 2x device screen' 
    title='Fit desktop-use-case3-2x.jpg for 2x device screen'/>
  </div>

  <p>Fit desktop-use-case3-3x.jpj for 3x device screen</p>
  <div style='max-width:740px;position:relative;aspect-ratio: 740 / 732'>
    <img loading="lazy" 
    src='/images/posts/srcset-and-responsive-images/desktop-use-case3-3x.webp' 
    srcset='/images/posts/srcset-and-responsive-images/desktop-use-case3-3x.webp 740w,
            /images/scaled/posts/srcset-and-responsive-images/desktop-use-case3-2x-619w.webp 619w ,
            /images/scaled/posts/srcset-and-responsive-images/desktop-use-case3-2x-413w.webp 413w'
    alt='Fit desktop-use-case3-3x.jpj for 3x device screen' 
    title='Fit desktop-use-case3-3x.jpj for 3x device screen'/>
  </div>

</section>

<section id="srcset-vs-media-query">
  <h2>srcset vs media query</h2>
  <p>While media queries are excellent for adjusting the layout and styles based on the <strong>viewport</strong>, srcset specifically addresses the challenges related to delivering appropriately <strong>sized and resolution-specific images</strong></p> <p>Combining both allows for a comprehensive approach to responsive web design</p>
  <p>Furthermore, it is not possible to use different image files for a given img element using a media query; It is possible by using srcset!</p>
</section>

<section id="what-is-sizes-attribute">
  <h2>What is sizes attribute</h2>

  <h3>Definition</h3>
  <p>sizes define a set of media conditions (e.g., screen widths) and indicate the best image size to choose when certain media conditions are true. In this case, before each comma, we write</p>
  <ul>
    <li>A media condition (e.g. (max-width:600px)) —  let's just say that a media condition describes a possible state that the screen can be in. In this case, we are saying "when the viewport width is 600 pixels or less"</li>
    <li>A space</li>
    <li>The width of the slot the image will fill when the media condition is true (480px)</li>
  </ul>

  <h3 id='code-sample-resolution-switching-with-sizes'>Code sample - resolution switching with sizes</h3>
  <p>When you don't specify the sizes, the default is 100vw, meaning the image file will choose to match the whole viewport. What if the image occupies half the viewport? in this case, you want the browser to choose the appropriate image file to fit into half the viewport size, and you can do it using sizes as shown below</p>

  <h3>Source code</h3>
  <a href='https://github.com/NathanKr/responsive-image-using-srcset-playground/blob/main/public/index-use-case2.html'>index-use-case2.html</a>

<pre>
<code class='language-html'>
&lt;img
  style="width: 50vw"
  src="pic-1600w.png"
  alt="responsive image use case 2 - resolution switching with sizes"
  sizes="50vw"
  srcset="pic-1600w.png 1600w, pic-800w.png 800w, pic-600w.png 600w"
/&gt;
</code>
</pre>


  <h3>Figs</h3>
  <p>The viewport width is 1280; the image occupies half, thus 640px, so the browser fits the image file with a width of 800px</p>
  <div style='max-width:740px;position:relative;aspect-ratio: 1273 / 350'>
   <img loading="lazy" 
    src='/images/posts/srcset-and-responsive-images/desktop-use-case2-800.webp'
    srcset='/images/posts/srcset-and-responsive-images/desktop-use-case2-800.webp 1273w, 
            /images/scaled/posts/srcset-and-responsive-images/desktop-use-case2-800-955w.webp 955w ,
            /images/scaled/posts/srcset-and-responsive-images/desktop-use-case2-800-637w.webp 637w ,
            /images/scaled/posts/srcset-and-responsive-images/desktop-use-case2-800-318w.webp 318w '
    alt='image occupy 640px --> 800px image file' 
    title='image occupy 640px --> 800px image file'/>
  </div>

  <p>The viewport width is 1200; the image occupies half, thus 600px, so the browser fits the image file with a width of 600px</p>
  <div style='max-width:740px;position:relative;aspect-ratio: 1242 / 383'>
    <img loading="lazy" 
    src='/images/posts/srcset-and-responsive-images/desktop-use-case2-600.webp' 
    srcset='/images/posts/srcset-and-responsive-images/desktop-use-case2-600.webp 1242w, 
            /images/scaled/posts/srcset-and-responsive-images/desktop-use-case2-600-932w.webp 932w ,
            /images/scaled/posts/srcset-and-responsive-images/desktop-use-case2-600-621w.webp 621w ,
            /images/scaled/posts/srcset-and-responsive-images/desktop-use-case2-600-311w.webp 311w'
    alt='image occupy 600px --> 600px image file' 
    title='image occupy 600px --> 600px image file'/>
  </div>

</section>

<section id="how-to-emulate-screen-resolution">
  <h2>How to emulate screen resolution (1x, 2x etc)</h2>
  <p>1x, 2x, and 3x are also called device pixel ratios. For 1x screen resolution, each pixel has a pixel in hardware(device screen). for 2x screen resolution, each pixel has two pixels in hardware</p>
  <p>
 To emulate this in Chrome, check <a href='https://developer.chrome.com/docs/devtools/device-mode#dpr'>Chrome documentation</a></p>

  <h3>Emulate 1x device screen resolution in Chrome dev tools</h3>
  <div style='max-width:691px;position:relative;aspect-ratio: 691 / 438'>
    <img loading="lazy" 
    alt='emulate 1x device screen resolution' 
    title='emulate 1x device screen resolution' 
    src='/images/posts/srcset-and-responsive-images/1x-emulated-chrome-dev-tools.webp'
    srcset='/images/posts/srcset-and-responsive-images/1x-emulated-chrome-dev-tools.webp 691w,
            /images/scaled/posts/srcset-and-responsive-images/1x-emulated-chrome-dev-tools-518w.webp 518w ,
            /images/scaled/posts/srcset-and-responsive-images/1x-emulated-chrome-dev-tools-346w.webp 346w'
    >

  </div>

  <h3>Emulate 2x device screen resolution in Chrome dev tools</h3>

  <div style='max-width:649px;position:relative;aspect-ratio: 649 / 439'>
    <img loading="lazy" 
    alt='emulate 2x device screen resolution' 
    title='emulate 2x device screen resolution' 
    src='/images/posts/srcset-and-responsive-images/2x-emulated-chrome-dev-tools.webp'
    srcset='/images/posts/srcset-and-responsive-images/2x-emulated-chrome-dev-tools.webp 649w,
            /images/scaled/posts/srcset-and-responsive-images/2x-emulated-chrome-dev-tools-487w.webp 487w ,
            /images/scaled/posts/srcset-and-responsive-images/2x-emulated-chrome-dev-tools-325w.webp 325w'
    >
  </div>
  </section>

<section id="repository">
  <h2>Repository</h2>
  Check the readme in <a href='https://github.com/NathanKr/responsive-image-using-srcset-playground'>responsive-image-using-srcset-playground (tag 0.3)</a>
</section>

<section id="references">
  <h2>References</h2>
  <ul>
  <li><a href='https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images'>Responsive Images , mdn</a></li>
  <li><a href='https://www.udemy.com/course/advanced-css-and-sass'>'Advanced CSS and Sass: Flexbox, Grid, Animations and More!' , Jonas Schmedtmann </a></li>
  <li><a href='https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/responsive-images'>responsive-images, mdn github repository</a></li>
  <li><a href='https://www.displayninja.com/what-is-pixel-density/'>'What Is Pixel Density And Pixels Per Inch (PPI)?' , Rob Shafer , Feb 2023</a></li>
  <li><a href='https://www.youtube.com/watch?v=fp9eVtkQ4EA'> 'Make Your Site Lightning Fast With Responsive Images' , WDS , June 2023</a></li>
  <li><a href='https://www.youtube.com/watch?v=2QYpkrX2N48'>' srcset and sizes attributes - [ images on the web | part one ] ' , Kevin Powell , Dec 2018 </a></li>
</ul>
</section>
