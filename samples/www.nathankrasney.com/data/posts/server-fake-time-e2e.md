---
title: "How to Fake the Time on next.js Server for E2E Tests"
date: "Dec 15, 2023"
excerpt: "Use sinon.js and REST API to Fake the Time on next.js Server for E2E Tests and Beyond"
cover_image: "/images/posts/next-js-fake-timer/index-hero.webp"
link_title: "Fake Server Time"
cover_image_width_px: 1280
cover_image_height_px: 850
---

<h2> Table of Contents</h2>
<nav>
  <ul>
    <li><h3><a href="#motivation">Motivation</a></h3></li>
    <li><h3><a href="#design">Design</a></h3></li>
    <li><h3><a href="#ui">UI</a></h3></li>
    <li><h3><a href="#fake-api">Fake Time API</a></h3></li>
    <li><h3><a href="#test_rest_api.rest">Invoke the API using REST Client Plugin</a></h3></li>
    <li><h3><a href="#installation">Installation</a></h3></li>
    <li><h3><a href="#usage">Usage</a></h3></li>
    <li><h3><a href="#e2e-test">E2E test using puputeer</a></h3></li>
    <li><h3><a href="#solution-scope">Solution Scope</a></h3></li>
    <li><h3><a href="#repository">Repository</a></h3></li>
    <li><h3><a href="#references">References</a></h3></li>
  </ul>
</nav>

<section id="motivation">
<h2>Motivation</h2>
<p>You want to test e2e a javascript \ typescript based server that performs time based tasks</p> 
<p>In my use case, I am developing a coupon system for my <a href='https://nathankrasney.com'>online courses web site</a> and I want to create a sale day every Wednesday</p>
<p>So the question is how to set the time on the server once for Wednesady and once for non Wednesday and perform tests</p>
</section>
<section id="design">
<h2>Design</h2>
The design must answer a few questions
<ol>
<li>How to fake time on the server --> use <a href='https://github.com/sinonjs/sinon'>sinon.js - fake time package</a></li>
<li>How to tell the server to change time and how to pass the desired time --> use REST API using POST and body <a href='https://github.com/NathanKr/next.js-server-fake-time-for-e2e/blob/main/src/pages/api/e2e-fake-server-time.ts'>e2e fake time API : e2e-fake-server-time.ts</a></li>
<li>How to make sure that the fake time will not be invoked on production and will be invoked only for localhost --> add protection in <a href='https://github.com/NathanKr/next.js-server-fake-time-for-e2e/blob/main/src/pages/api/e2e-fake-server-time.ts'>code</a> and <a href='https://github.com/NathanKr/next.js-server-fake-time-for-e2e/blob/main/test/fake-timer.test.ts'>test</a></li>
<li>Which test runner invokes the <a href='https://github.com/NathanKr/next.js-server-fake-time-for-e2e/blob/main/test/e2e.test.ts'>e2e test</a> and <a href='https://github.com/NathanKr/next.js-server-fake-time-for-e2e/blob/main/test/fake-timer.test.ts'>unit test</a> --> <a href='https://vitest.dev/'>vitest</a></li>
<li>Which tool to use for e2e test --> <a href='https://pptr.dev/'>puppeteer</a></li>
</ol>
</section>
<section id="ui">
<h2>UI</h2>

<h3>regular</h3>
This is the true time
<div style='max-width:768px;position:relative;aspect-ratio:592 / 183'>
  <img loading="lazy" 
  src='/images/posts/next-js-fake-timer/ui-reg.webp' 
  srcset='/images/posts/next-js-fake-timer/ui-reg.webp 592w,
          /images/scaled/posts/next-js-fake-timer/ui-reg-444w.webp 444w'
  alt='ui for the current true time'/>
</div>

<h3>fake time to Wednesday</h3>
Notice isSaleDay is true because it is Wednesday  (1702458733000 ms from 1970)

<div style='max-width:768px;position:relative;aspect-ratio:591 / 158'>
  <img loading="lazy" 
  src='/images/posts/next-js-fake-timer/ui-test1.webp' 
  srcset='/images/posts/next-js-fake-timer/ui-test1.webp 591w,
          /images/scaled/posts/next-js-fake-timer/ui-test1-443w.webp 443'
  alt='ui for a faked time - Wedenesday'/>
</div>

<h3>fake time to Thursday</h3>
Notice isSaleDay is false because it is not Wednesday  (1702549920000 ms from 1970)
<div style='max-width:768px;position:relative;aspect-ratio:610 / 175'>
  <img loading="lazy" 
  src='/images/posts/next-js-fake-timer/ui-test2.webp' 
  srcset='/images/posts/next-js-fake-timer/ui-test2.webp 610w ,
          /images/scaled/posts/next-js-fake-timer/ui-test2-458w.webp 458w'
  alt='ui for a faked time - non Wedenesday'/>
</div>

</section>

<section id="fake-api">
<h2>Fake API</h2>

<h3>Source code</h3>

<a href='https://github.com/NathanKr/next.js-server-fake-time-for-e2e/blob/main/src/pages/api/e2e-fake-server-time.ts'>Source code</a>

<pre>
<code class='language-typescript'>
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import IServerFakeTime from "@/types/i-server-fake-time";
import { isProduction } from "@/utils/utils";
import type { NextApiRequest, NextApiResponse } from "next";
/* 
 Use this import; otherwise, I get an error from react, thinking useFakeTimers is a custom hook.
*/
import sinon from "sinon";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    const { serverFakeTimeMs } = req.body as IServerFakeTime;

    // -- We do not want this on production so protect production from mistakes ........
    const isLocalhost = req.headers.host?.includes("localhost");

    if (!isProduction() && isLocalhost) {
      sinon.restore(); // this is required; otherwise, you get an error on setting twice
      sinon.useFakeTimers({
        toFake: ["Date"],
        now: new Date(serverFakeTimeMs),
      });
    }

    res.status(200).json({ date: new Date() });
  } else {
    // Handle other HTTP methods if needed
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
</code>
</pre>

<h3>How to protect yourself</h3>
In general, you do not want to invoke /api/e2e-fake-server-time, so how to protect yourself?

<ul>
<li>The fake timer package - sinon is installed as a dev dependency and thus can not appear in production
</li>
<li>Add code that does not allow the API to run on production, and using a host other than localhost</li>
<li>Create a separate project for the e2e test and add e2e-fake-server-time.ts only there
</li>
<li>Any developer should know what he is doing; if you need this for e2e, simply don't use it in production</li>
</ul>

</section>

<section id="test_rest_api.rest">
<h2>Invoke the API using <a href='https://marketplace.visualstudio.com/items?itemName=humao.rest-client'>rest client plugin</a></h2>
<a href='https://github.com/NathanKr/next.js-server-fake-time-for-e2e/blob/main/test_rest_api.rest'>test_rest_api.rest</a>

<h3>Call the fake time API with 13/Dec/23 - Wednesay</h3>
<div style='max-width:768px;position:relative;aspect-ratio:1242 / 520'>
  <img loading="lazy" 
  src='/images/posts/next-js-fake-timer/test1.webp' 
  srcset='/images/posts/next-js-fake-timer/test1.webp 1242w, 
          /images/scaled/posts/next-js-fake-timer/test1-932w.webp 932w ,
          /images/scaled/posts/next-js-fake-timer/test1-621w.webp 621w ,
          /images/scaled/posts/next-js-fake-timer/test1-443w.webp 443w '
  alt='Call the fake time API with 13/Dec/23 - Wednesay'>
</div>

<h3>Call the fake time API with 14/Dec/23 - Thursday</h3>
<div style='max-width:768px;position:relative;aspect-ratio:1280 / 720'>
  <img loading="lazy" 
  src='/images/posts/next-js-fake-timer/test2.webp' 
  srcset='/images/posts/next-js-fake-timer/test2.webp 1280w, 
          /images/scaled/posts/next-js-fake-timer/test2-960w.webp 960w ,
          /images/scaled/posts/next-js-fake-timer/test2-640w.webp 640w ,
          /images/scaled/posts/next-js-fake-timer/test2-320w.webp 320w'
  alt='Call the fake time API with 14/Dec/23 - Thursday'>

</div>

</section>

<section id="installation">
<h2>Installation</h2>

<pre>
<code class='language-shell'>
pnpm i
</code>
</pre>

</section>
<section id="usage">
<h2>Usage</h2>
<p>Run the app using</p>

<pre>
<code class='language-shell'>
npm run dev
</code>
</pre>

Run the tests

<pre>
<code class='language-shell'>
npm test
</code>
</pre>

</section>

<section id="e2e-test">
<h2>E2E test using puputeer</h2>

The following is one test ,all the other tests are in <a href='https://github.com/NathanKr/next.js-server-fake-time-for-e2e/blob/main/test/e2e.test.ts'>E2e tests : test/e2e.test.ts</a>

<pre>
<code class='language-typescript'>
let browser: Browser;

beforeEach(async () => {
  browser = await puppeteer.launch({ headless: "new" });
});

afterEach(async () => {
  await browser.close();
});

test("sale day is true for wednedsay", async () => {
  const page = await browser.newPage();
  // --- force sale day wedenesday 1702458733000 --> 13/12/23
  const body: IServerFakeTime = {
    serverFakeTimeMs: 1702458733000,
  };
  const baseUrl = "http://localhost:3000";
  const url = `${baseUrl}${InternalRelativeApi.E2eFakeServerTime}`;
  await axios.post(url, { ...body });
  await page.goto(baseUrl);
  await page.click(".get-info");
  const val: string = await page.$eval(
    ".sale-day",
    (elem) => (elem as HTMLParagraphElement).innerText
  );
  expect(val).toBe("true");
});
</code>
</pre>

</section>

<section id="solution-scope">
<h2>Solution Scope</h2>
The context of this post is faking time on a next.js server for an e2e test. However, the core design here is faking time using sinon.js via REST API ,and this can be applied to
<ul>
<li>Any server based javascript \ typescript e.g. node or express</li>
<li>not only e2e, currently i don't have good use case, but it may also be used in a production server (implement at your own risk)</li>
</ul>
</section>

<section id="repository">
<h2>Repository</h2>
<a href='https://github.com/NathanKr/next.js-server-fake-time-for-e2e'>next.js-server-fake-time-for-e2e (tag 0.5)</a> - this is a POC for the design
</section>

<section id="references">
<h2>References</h2>
<ul>
<li><a href='https://www.udemy.com/course/real-world-typescript-unit-testing/?referralCode=6B35B93853BC00B58172'>Real-World TypeScript Unit Testing</a></li>
</ul>
</section>
