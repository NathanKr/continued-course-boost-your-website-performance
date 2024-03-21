---
title: "Why Should You Use The Advanced WebP Image File Format"
date: "Feb 7, 2024"
updateDate: "Feb 8, 2024"
excerpt: "Load Your Image File Faster With WebP Image File Format"
cover_image: "/images/posts/webp/webp-new-hero-1270w-847w.webp"
link_title: "Load Image Faster"
cover_image_width_px: 1270
cover_image_height_px: 847
---

<h2>Table of Contents</h2>
<nav>
  <ul>
    <li><h3><a href="#what-is-it">What is WebP</a></h3></li>
    <li><h3><a href="#motivation">Motivation for WebP</a></h3></li>
    <li><h3><a href="#when-not-to-use-webp">When Not To Use WebP</a></h3></li>
    <li><h3><a href="#tools">Conversion Tools</a></h3></li>
    <li><h3><a href="#convert-to-webp">Convert Image File Format Using sharp Package API</a></h3></li>
    <li><h3><a href="#scale-image-file">Scale Image Files Width \ Height Using sharp Package API</a></h3></li>
    <li><h3><a href="#next-js-and-webp">Next js and WebP</a></h3></li>
    <li><h3><a href="#repository">Repository</a></h3></li>
    <li><h3><a href="#references">References</a></h3></li>
  </ul>
</nav>

<section id="what-is-it">
  <h2>What is WebP</h2>
  <p>Using WebP, webmasters and web developers can create smaller, richer images that make the web faster</p>
  <p>WPage speed insight recommendation considers WebP to be an advanced format.</p>
  <p>WebP was developed by Google and announced in September 2010</p>
  <p>The browser support for WebP is <a href='https://caniuse.com/webp'>very good</a></p>
  
</section>

<section id="motivation">
  <h2>Motivation for WebP</h2>
  In short, WebP makes the image file smaller and improves the performance

  <ul>
    <li>WebP lossless images are 26% smaller in size compared to PNGs. WebP lossy images are 25-34% smaller than comparable JPEG images at equivalent SSIM quality index</li>
    <li>Excellent choice for both images and animated images. WebP offers much better compression than PNG or JPEG, supporting higher color depths, animated frames, transparency, etc. AVIF offers slightly better compression but could be better supported in browsers and supports progressive rendering. Support: Chrome, Edge, Firefox, Opera, Safari</li>
    <li>According to <a href='https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types'>mdn</a> WebP is the best among all image formats</li>
  </ul>

</section>

<section id="when-not-to-use-webp">
  <h2>When Not To Use WebP</h2>
  <h3>Lossless Compression for Photographs</h3>
  Although WebP supports lossless compression, the benefits might be less significant for photographs compared to lossy formats like JPEG. Lossless formats like PNG might be preferred when maintaining the highest quality is crucial.

  <h3>File Size Considerations</h3>
   In some cases, especially for tiny images or thumbnails, the overhead of the WebP format might not be justified compared to simpler formats like JPEG or PNG. Always consider the trade-off between file size and quality.
</section>

<section id="tools">
  <h2>Conversion Tools</h2>
  <ul>
  <li><a href='https://developers.google.com/speed/webp/docs/cwebp'>cwebp</a></li>
  <li><a href='https://sharp.pixelplumbing.com/'>sharp</a>
  <p> Note that sharp is a package also used by next.js Image component and has 4.3M weekly downloads as of Jan 2024</p>
  <p>A typical use case for this high-speed Node-API module is to convert large images in standard formats to smaller, web-friendly JPEG, PNG, WebP, GIF, and AVIF images of varying dimensions. But you can do much more; here are the complete API categories.
  <ul>
    <li>Input metadata</li>
    <li>Output options</li>
    <li>Resizing images</li>
    <li>Compositing images</li>
    <li>Image operations</li>
    <li>Color manipulation</li>
    <li>Channel manipulation</li>
  </ul>
  </p>
  <p>You can see below code samples for 'Output options' to convert image file to WebP format and 'Resizing images' to scale WebP file size</p>
  </li>
  <li><a href='https://chromewebstore.google.com/detail/webp-avif-image-converter/pbcfbdlbkdfobidmdoondbgdfpjolhci'>WebP / Avif image converter</a></li>

  </ul>
</section>

<section id="convert-to-webp">
  <h2>Convert Image File Format Using sharp Package API</h2>

The following code is an example from <a href='https://github.com/NathanKr/image-processing-with-sharp-playground/blob/main/src/utils/server/sharp-helper-utils.ts'>sharp-helper-utils.ts</a>

<pre>
<code class='language-typescript'>
  async function convertToWebP(
  inputImagePath: string,
  outputImagePath: string): Promise 
  {
    return sharp(inputImagePath).webp().toFile(outputImagePath);
  }
</code>
</pre>

</section>

<section id="scale-image-file">
  <h2>Scale Image Files Width \ Height Using Sharp Package API</h2>
  The following code is an example from <a href='https://github.com/NathanKr/image-processing-with-sharp-playground/blob/main/src/utils/server/sharp-helper-utils.ts'>sharp-helper-utils.ts</a>

<pre>
<code class='language-typescript'>
  async function scaleOne(
    newWidthPx: number,
    sourceImageFullPath: string,
    targetImageFullPath: string
  ): Promise<OutputInfo> {
    // Resize the image using sharp and await for the operation to finish
    return sharp(sourceImageFullPath)
      .resize({ width: Math.round(newWidthPx) })
      .toFile(targetImageFullPath);
  }
</code>
</pre>

</section>

<section id="next-js-and-webp">
  <h2>Next js and WebP</h2>
   WebP is used by default on the fly by next.js Image component
</section>

<section id="repository">
  <h2>Repository</h2>
  <a href='https://github.com/NathanKr/image-processing-with-sharp-playground'>image-processing-with-sharp-playground (tag 0.4)</a>
  <div style='max-width:768px;position:relative;aspect-ratio:709 / 518'>
    <img loading="lazy" 
      src='/images/posts/webp/repo.webp' 
      srcset='/images/posts/webp/repo.webp 709w,
              /images/scaled/posts/webp/repo-532w.webp 532w,
              /images/scaled/posts/webp/repo-355w.webp 355w'
      alt='project UI' title='project UI'/>
  </div>
</section>

<section id="references">
  <h2>References</h2>
  <ul>
    <li><a href='https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types'>'Image file type and format guide' , mdn</a></li>
    <li><a href='https://developers.google.com/speed/webp'>'An image format for the Web
' , Google</a></li>
    <li><a href='https://www.smashingmagazine.com/2021/09/modern-image-formats-avif-webp/'>'Using Modern Image Formats: AVIF And WebP' , Addy Osmani , sep 2021 </a></li>
  </ul>
</section>
