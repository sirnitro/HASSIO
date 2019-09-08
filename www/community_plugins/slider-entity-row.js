





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-aVn2DoCuXdXX9G3sp/Luupl/Ui00/iXrUh7Ke3geLlkigQY8GHBky7kKRSuyeKxGApWDdCQUy+6gTF1ZmYHWkw==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-6b8b7859c4b8fbe3ab45f8ab0905a9f8.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-Myp6HIV6QpUnPxl7XbmQTeyGZboMMugCA3QK9vka+wV9W6ZE0NoHtZh0nWjowNoOB34X1nAgcEgfhhzhy+5u4g==" rel="stylesheet" href="https://github.githubassets.com/assets/site-b046b27487428b94fc20941868838997.css" />
    <link crossorigin="anonymous" media="all" integrity="sha512-QhuwqMmfVbf7hBKQiI06Hhr+N3pwbFEoddGW/mB4FL2g0/hxjDyFOZQfa8NF2wymI8UnTVRHFU1zeG0x+wLbQw==" rel="stylesheet" href="https://github.githubassets.com/assets/github-74ca376c8e9adc68a252986ce12b0857.css" />
    
    
    
    

  <meta name="viewport" content="width=device-width">
  
  <title>lovelace-slider-entity-row/slider-entity-row.js at master · thomasloven/lovelace-slider-entity-row · GitHub</title>
    <meta name="description" content="🔹 Add sliders to entity cards. Contribute to thomasloven/lovelace-slider-entity-row development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars0.githubusercontent.com/u/1299821?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="thomasloven/lovelace-slider-entity-row" /><meta name="twitter:description" content="🔹 Add sliders to entity cards. Contribute to thomasloven/lovelace-slider-entity-row development by creating an account on GitHub." />
    <meta property="og:image" content="https://avatars0.githubusercontent.com/u/1299821?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="thomasloven/lovelace-slider-entity-row" /><meta property="og:url" content="https://github.com/thomasloven/lovelace-slider-entity-row" /><meta property="og:description" content="🔹 Add sliders to entity cards. Contribute to thomasloven/lovelace-slider-entity-row development by creating an account on GitHub." />

  <link rel="assets" href="https://github.githubassets.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="E811:1CFA:18D419:25704A:5D716FA4" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="E811:1CFA:18D419:25704A:5D716FA4" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-dimension-visitor_id" content="3282514394880866963" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">


<meta class="js-ga-set" name="dimension1" content="Logged Out">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MGQ4ZDg3YmE2MmZiOGY0NDMxOTVkNDU4OGM4MTNmOWI1ZTVhODY0NzUxMzkwYWEyYmZlNzFmNWZmZjYwMTE2Nnx7InJlbW90ZV9hZGRyZXNzIjoiNjkuMTc0LjE2MC42NiIsInJlcXVlc3RfaWQiOiJFODExOjFDRkE6MThENDE5OjI1NzA0QTo1RDcxNkZBNCIsInRpbWVzdGFtcCI6MTU2NzcxNTI1NSwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">

    <meta name="enabled-features" content="ACTIONS_V2_ON_MARKETPLACE,MARKETPLACE_FEATURED_BLOG_POSTS,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS">

  <meta name="html-safe-nonce" content="6522ac7213c68425ec7c20e2953e3c14fb585daf">

  <meta http-equiv="x-pjax-version" content="d237c2b71e49a92d4a6366cb711255df">
  

      <link href="https://github.com/thomasloven/lovelace-slider-entity-row/commits/master.atom" rel="alternate" title="Recent Commits to lovelace-slider-entity-row:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/thomasloven/lovelace-slider-entity-row git https://github.com/thomasloven/lovelace-slider-entity-row.git">

  <meta name="octolytics-dimension-user_id" content="1299821" /><meta name="octolytics-dimension-user_login" content="thomasloven" /><meta name="octolytics-dimension-repository_id" content="144899700" /><meta name="octolytics-dimension-repository_nwo" content="thomasloven/lovelace-slider-entity-row" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="144899700" /><meta name="octolytics-dimension-repository_network_root_nwo" content="thomasloven/lovelace-slider-entity-row" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/thomasloven/lovelace-slider-entity-row/blob/master/slider-entity-row.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">





  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-responsive page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    


        <header class="Header-old header-logged-out js-details-container Details position-relative f4 py-2" role="banner">
  <div class="container-lg d-lg-flex flex-items-center p-responsive">
    <div class="d-flex flex-justify-between flex-items-center">
        <a class="mr-4" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
          <svg height="32" class="octicon octicon-mark-github text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>

          <div class="d-lg-none css-truncate css-truncate-target width-fit p-2">
            
              <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
    <a class="Header-link" href="/thomasloven">thomasloven</a>
    /
    <a class="Header-link" href="/thomasloven/lovelace-slider-entity-row">lovelace-slider-entity-row</a>


          </div>

        <div class="d-flex flex-items-center">
            <a href="/join?source=header-repo"
              class="d-inline-block d-lg-none f5 text-white no-underline border border-gray-dark rounded-2 px-2 py-1 mr-3 mr-sm-5"
              data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:&quot;764269939.1559952019&quot;,&quot;originating_request_id&quot;:&quot;E811:1CFA:18D419:25704A:5D716FA4&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-slider-entity-row/blob/master/slider-entity-row.js&quot;,&quot;referrer&quot;:&quot;https://github.com/thomasloven/lovelace-slider-entity-row&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="bdca275be6036237ff36342304d23aa3b1ba1c05a5015320418236b94c9d5a6d"
              data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">
              Sign&nbsp;up
            </a>

          <button class="btn-link d-lg-none mt-1 js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
            <svg height="24" class="octicon octicon-three-bars text-white" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
          </button>
        </div>
    </div>

    <div class="HeaderMenu HeaderMenu--logged-out position-fixed top-0 right-0 bottom-0 height-fit position-lg-relative d-lg-flex flex-justify-between flex-items-center flex-auto">
      <div class="d-flex d-lg-none flex-justify-end border-bottom bg-gray-light p-3">
        <button class="btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <svg height="24" class="octicon octicon-x text-gray" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        </button>
      </div>

        <nav class="mt-0 px-3 px-lg-0 mb-5 mb-lg-0" aria-label="Global">
          <ul class="d-lg-flex list-style-none">
              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Why GitHub?
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>
                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <a href="/features" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Features">Features <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>
                    <ul class="list-style-none f5 pb-3">
                      <li class="edge-item-fix"><a href="/features/code-review/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code review">Code review</a></li>
                      <li class="edge-item-fix"><a href="/features/project-management/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Project management">Project management</a></li>
                      <li class="edge-item-fix"><a href="/features/integrations" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Integrations">Integrations</a></li>
                      <li class="edge-item-fix"><a href="/features/actions" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Actions">Actions</a>
                          <li class="edge-item-fix"><a href="/features/package-registry" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Package Registry">Package registry</a>
                      <li class="edge-item-fix"><a href="/features#team-management" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Team management">Team management</a></li>
                      <li class="edge-item-fix"><a href="/features#social-coding" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Social coding">Social coding</a></li>
                      <li class="edge-item-fix"><a href="/features#documentation" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Documentation">Documentation</a></li>
                      <li class="edge-item-fix"><a href="/features#code-hosting" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code hosting">Code hosting</a></li>
                    </ul>

                    <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li class="edge-item-fix"><a href="/customer-stories" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Customer stories">Customer stories <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="/security" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Security">Security <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
              <li class="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
                <a href="/enterprise" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Enterprise">Enterprise</a>
              </li>

              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Explore
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/explore" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Explore">Explore GitHub <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2 border-lg-top pt-lg-3">Learn &amp; contribute</h4>
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/topics" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Topics">Topics</a></li>
                        <li class="edge-item-fix"><a href="/collections" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Collections">Collections</a></li>
                      <li class="edge-item-fix"><a href="/trending" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Trending">Trending</a></li>
                      <li class="edge-item-fix"><a href="https://lab.github.com/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Learning lab">Learning Lab</a></li>
                      <li class="edge-item-fix"><a href="https://opensource.guide" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Open source guides">Open source guides</a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2 border-lg-top pt-lg-3">Connect with others</h4>
                    <ul class="list-style-none mb-0">
                      <li class="edge-item-fix"><a href="https://github.com/events" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Events">Events</a></li>
                      <li class="edge-item-fix"><a href="https://github.community" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Community forum">Community forum</a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com" class="py-2 pb-0 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to GitHub Education">GitHub Education</a></li>
                    </ul>
                  </div>
                </details>
              </li>

              <li class="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
                <a href="/marketplace" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Marketplace">Marketplace</a>
              </li>

              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Pricing
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                       <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <a href="/pricing" class="pb-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Pricing">Plans <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>

                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/pricing#feature-comparison" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Compare plans">Compare plans</a></li>
                      <li class="edge-item-fix"><a href="https://enterprise.github.com/contact" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Contact Sales">Contact Sales</a></li>
                    </ul>

                    <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li class="edge-item-fix"><a href="/nonprofit" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Nonprofits">Nonprofit <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com" class="py-2 pb-0 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover"  data-ga-click="(Logged out) Header, go to Education">Education <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
          </ul>
        </nav>

      <div class="d-lg-flex flex-items-center px-3 px-lg-0 text-center text-lg-left">
          <div class="d-lg-flex mb-3 mb-lg-0">
            <div class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="144899700" data-scoped-search-url="/thomasloven/lovelace-slider-entity-row/search" data-unscoped-search-url="/search" action="/thomasloven/lovelace-slider-entity-row/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search"
          data-unscoped-placeholder="Search GitHub"
          data-scoped-placeholder="Search"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=UHEljJJ1RwgjWrPpC7GmLCvMlc7/ZkjIM2nGd9yMIflVqQOklViBajk3xDwQpp5MDneY+045KUcomeVzg4+s2g=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


</ul>

            </div>
      </label>
</form>  </div>
</div>

          </div>

        <a href="/login?return_to=%2Fthomasloven%2Flovelace-slider-entity-row%2Fblob%2Fmaster%2Fslider-entity-row.js"
          class="HeaderMenu-link no-underline mr-3"
          data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:&quot;764269939.1559952019&quot;,&quot;originating_request_id&quot;:&quot;E811:1CFA:18D419:25704A:5D716FA4&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-slider-entity-row/blob/master/slider-entity-row.js&quot;,&quot;referrer&quot;:&quot;https://github.com/thomasloven/lovelace-slider-entity-row&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="e8854ebf4ae6c4fe64c13fd6201874c4a2f92bf8685202b96f645e65824c159c"
          data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">
          Sign&nbsp;in
        </a>
          <a href="/join?source=header-repo"
            class="HeaderMenu-link d-inline-block no-underline border border-gray-dark rounded-1 px-2 py-1"
            data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:&quot;764269939.1559952019&quot;,&quot;originating_request_id&quot;:&quot;E811:1CFA:18D419:25704A:5D716FA4&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-slider-entity-row/blob/master/slider-entity-row.js&quot;,&quot;referrer&quot;:&quot;https://github.com/thomasloven/lovelace-slider-entity-row&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="e8854ebf4ae6c4fe64c13fd6201874c4a2f92bf8685202b96f645e65824c159c"
            data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">
            Sign&nbsp;up
          </a>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      


  










  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav pt-0 pt-lg-4 ">
    <div class="repohead-details-container clearfix container-lg p-responsive d-none d-lg-block">

      <ul class="pagehead-actions">




  <li>
    
  <a class="tooltipped tooltipped-s btn btn-sm btn-with-count" aria-label="You must be signed in to watch a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;notification subscription menu watch&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:&quot;764269939.1559952019&quot;,&quot;originating_request_id&quot;:&quot;E811:1CFA:18D419:25704A:5D716FA4&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-slider-entity-row/blob/master/slider-entity-row.js&quot;,&quot;referrer&quot;:&quot;https://github.com/thomasloven/lovelace-slider-entity-row&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="ff0b4bfe8a9ee82753f7437443fbfa8ff9b27430847861569a16d414221eeb05" href="/login?return_to=%2Fthomasloven%2Flovelace-slider-entity-row">
    <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
</a>    <a class="social-count" href="/thomasloven/lovelace-slider-entity-row/watchers"
       aria-label="24 users are watching this repository">
      24
    </a>

  </li>

  <li>
        <a class="btn btn-sm btn-with-count tooltipped tooltipped-s" aria-label="You must be signed in to star a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:144899700,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:&quot;764269939.1559952019&quot;,&quot;originating_request_id&quot;:&quot;E811:1CFA:18D419:25704A:5D716FA4&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-slider-entity-row/blob/master/slider-entity-row.js&quot;,&quot;referrer&quot;:&quot;https://github.com/thomasloven/lovelace-slider-entity-row&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="e94ff7486329519752e7aea31842e54e7737af13626208937ab89319c0a32839" href="/login?return_to=%2Fthomasloven%2Flovelace-slider-entity-row">
      <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
      Star
</a>
    <a class="social-count js-social-count" href="/thomasloven/lovelace-slider-entity-row/stargazers"
      aria-label="198 users starred this repository">
      198
    </a>

  </li>

  <li>
      <a class="btn btn-sm btn-with-count tooltipped tooltipped-s" aria-label="You must be signed in to fork a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;repo details fork button&quot;,&quot;repository_id&quot;:144899700,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:&quot;764269939.1559952019&quot;,&quot;originating_request_id&quot;:&quot;E811:1CFA:18D419:25704A:5D716FA4&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-slider-entity-row/blob/master/slider-entity-row.js&quot;,&quot;referrer&quot;:&quot;https://github.com/thomasloven/lovelace-slider-entity-row&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="521a5c3a82ff6fcaaa5452b295d86762bf3c85792d8b966be6f306feb8bdc5ad" href="/login?return_to=%2Fthomasloven%2Flovelace-slider-entity-row">
        <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
</a>
    <a href="/thomasloven/lovelace-slider-entity-row/network/members" class="social-count"
       aria-label="44 users forked this repository">
      44
    </a>
  </li>
</ul>

      <h1 class="public ">
    <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=1299821" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/thomasloven">thomasloven</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/thomasloven/lovelace-slider-entity-row">lovelace-slider-entity-row</a></strong>
  

</h1>

    </div>
    
<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax container-lg p-responsive d-none d-lg-block"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /thomasloven/lovelace-slider-entity-row" href="/thomasloven/lovelace-slider-entity-row">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /thomasloven/lovelace-slider-entity-row/issues" href="/thomasloven/lovelace-slider-entity-row/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">6</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /thomasloven/lovelace-slider-entity-row/pulls" href="/thomasloven/lovelace-slider-entity-row/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /thomasloven/lovelace-slider-entity-row/projects" href="/thomasloven/lovelace-slider-entity-row/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>


    <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /thomasloven/lovelace-slider-entity-row/security/advisories" href="/thomasloven/lovelace-slider-entity-row/security/advisories">
      <svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"/></svg>
      Security
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse people /thomasloven/lovelace-slider-entity-row/pulse" href="/thomasloven/lovelace-slider-entity-row/pulse">
      <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
      Insights
</a>

</nav>

  <div class="reponav-wrapper reponav-small d-lg-none">
  <nav class="reponav js-reponav text-center no-wrap"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /thomasloven/lovelace-slider-entity-row" href="/thomasloven/lovelace-slider-entity-row">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /thomasloven/lovelace-slider-entity-row/issues" href="/thomasloven/lovelace-slider-entity-row/issues">
          <span itemprop="name">Issues</span>
          <span class="Counter">6</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /thomasloven/lovelace-slider-entity-row/pulls" href="/thomasloven/lovelace-slider-entity-row/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="3">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /thomasloven/lovelace-slider-entity-row/projects" href="/thomasloven/lovelace-slider-entity-row/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="4">
</a>      </span>


      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /thomasloven/lovelace-slider-entity-row/security/advisories" href="/thomasloven/lovelace-slider-entity-row/security/advisories">
        <span itemprop="name">Security</span>
        <meta itemprop="position" content="6">
</a>
      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /thomasloven/lovelace-slider-entity-row/pulse" href="/thomasloven/lovelace-slider-entity-row/pulse">
        Pulse
</a>

  </nav>
</div>


  </div>
<div class="container-lg clearfix new-discussion-timeline experiment-repo-nav  p-responsive">
  <div class="repository-content ">

    
    


  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/thomasloven/lovelace-slider-entity-row/blob/db9a50a2de55a49cb3c1bf6f79bba6cd3d1f26a9/slider-entity-row.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:8dcaa73d9d04ffa57f808446863c5d51 -->
          <div class="signup-prompt-bg rounded-1">
      <div class="signup-prompt p-4 text-center mb-4 rounded-1">
        <div class="position-relative">
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/prompt_dismissals/signup" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="YuRaCUP/iuOO9aFJR/1UbJLYj+DajriHkmn3bin/F9+ckRmLuEqhrUvoNIt1YQiR6PJhCz6Vw6Dvf9of/8U/iA==" />
            <button type="submit" class="position-absolute top-0 right-0 btn-link link-gray" data-ga-click="(Logged out) Sign up prompt, clicked Dismiss, text:dismiss">
              Dismiss
            </button>
</form>          <h3 class="pt-2">Join GitHub today</h3>
          <p class="col-6 mx-auto">GitHub is home to over 40 million developers working together to host and review code, manage projects, and build software together.</p>
          <a class="btn btn-primary" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;files signup prompt&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:&quot;764269939.1559952019&quot;,&quot;originating_request_id&quot;:&quot;E811:1CFA:18D419:25704A:5D716FA4&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-slider-entity-row/blob/master/slider-entity-row.js&quot;,&quot;referrer&quot;:&quot;https://github.com/thomasloven/lovelace-slider-entity-row&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="c5809d02bdae76ee20f4b16f7fd858ca4e04244f8035e61f3942cf79ce7f3ac0" data-ga-click="(Logged out) Sign up prompt, clicked Sign up, text:sign-up" href="/join?source=prompt-blob-show">Sign up</a>
        </div>
      </div>
    </div>


    <div class="d-flex flex-items-start flex-shrink-0 pb-3 flex-column flex-md-row">
      <span class="d-flex flex-justify-between width-full width-md-auto">
        
<details class="details-reset details-overlay select-menu branch-select-menu  hx_rsm" id="branch-select-menu">
  <summary class="btn btn-sm select-menu-button css-truncate"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target" data-menu-button>master</span>
  </summary>

  <details-menu class="select-menu-modal hx_rsm-modal position-absolute" style="z-index: 99;" src="/thomasloven/lovelace-slider-entity-row/ref-list/master/slider-entity-row.js?source_action=show&amp;source_controller=blob" preload>
    <include-fragment class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
    </include-fragment>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-md-none">
          <a href="/thomasloven/lovelace-slider-entity-row/find/master"
                class="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="slider-entity-row.js" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment"><a data-pjax="true" href="/thomasloven/lovelace-slider-entity-row"><span>lovelace-slider-entity-row</span></a></span></span><span class="separator">/</span><strong class="final-path">slider-entity-row.js</strong>
      </h2>

      <div class="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="/thomasloven/lovelace-slider-entity-row/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="slider-entity-row.js" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>



    
  <div class="Box Box--condensed d-flex flex-column flex-shrink-0">
      <div class="Box-body d-flex flex-justify-between bg-blue-light flex-column flex-md-row flex-items-start flex-md-items-center">
        <span class="pr-md-4 f6">
          <a rel="author" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=1299821" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/thomasloven"><img class="avatar" src="https://avatars1.githubusercontent.com/u/1299821?s=40&amp;v=4" width="20" height="20" alt="@thomasloven" /></a>
          <a class="text-bold link-gray-dark lh-default v-align-middle" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=1299821" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/thomasloven">thomasloven</a>
            <span class="lh-default v-align-middle">
              <a data-pjax="true" title="Readd RTL support. Fix #40 (again)" class="link-gray" href="/thomasloven/lovelace-slider-entity-row/commit/db9a50a2de55a49cb3c1bf6f79bba6cd3d1f26a9">Readd RTL support.</a> <span class="issue-keyword tooltipped tooltipped-se" aria-label="This commit closes issue #40."><a data-pjax="true" title="Readd RTL support. Fix #40 (again)" class="link-gray" href="/thomasloven/lovelace-slider-entity-row/commit/db9a50a2de55a49cb3c1bf6f79bba6cd3d1f26a9">Fix</a></span> <a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="431664648" data-permission-text="Issue title is private" data-url="https://github.com/thomasloven/lovelace-slider-entity-row/issues/40" data-hovercard-type="issue" data-hovercard-url="/thomasloven/lovelace-slider-entity-row/issues/40/hovercard" href="https://github.com/thomasloven/lovelace-slider-entity-row/issues/40">#40</a> <a data-pjax="true" title="Readd RTL support. Fix #40 (again)" class="link-gray" href="/thomasloven/lovelace-slider-entity-row/commit/db9a50a2de55a49cb3c1bf6f79bba6cd3d1f26a9">(again)</a>
            </span>
        </span>
        <span class="d-inline-block flex-shrink-0 v-align-bottom f6 mt-2 mt-md-0">
          <a class="pr-2 text-mono link-gray" href="/thomasloven/lovelace-slider-entity-row/commit/db9a50a2de55a49cb3c1bf6f79bba6cd3d1f26a9" data-pjax>db9a50a</a>
          <relative-time datetime="2019-08-28T19:24:12Z">Aug 28, 2019</relative-time>
        </span>
      </div>

    <div class="Box-body d-flex flex-items-center flex-auto f6 border-bottom-0 flex-wrap" >
      <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-2" id="blob_contributors_box">
        <summary class="btn-link">
          <span><strong>4</strong> contributors</span>
        </summary>
        <details-dialog
          class="Box Box--overlay d-flex flex-column anim-fade-in fast"
          aria-label="Users who have contributed to this file"
          src="/thomasloven/lovelace-slider-entity-row/contributors/master/slider-entity-row.js/list" preload>
          <div class="Box-header">
            <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
              <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
            </button>
            <h3 class="Box-title">
              Users who have contributed to this file
            </h3>
          </div>
          <include-fragment class="octocat-spinner my-3" aria-label="Loading..."></include-fragment>
        </details-dialog>
      </details>
        <span class="">
    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=1299821" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/thomasloven/lovelace-slider-entity-row/commits/master/slider-entity-row.js?author=thomasloven">
      <img class="avatar mr-1" src="https://avatars1.githubusercontent.com/u/1299821?s=40&amp;v=4" width="20" height="20" alt="@thomasloven" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=7717888" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/thomasloven/lovelace-slider-entity-row/commits/master/slider-entity-row.js?author=gabe565">
      <img class="avatar mr-1" src="https://avatars2.githubusercontent.com/u/7717888?s=40&amp;v=4" width="20" height="20" alt="@gabe565" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=1409758" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/thomasloven/lovelace-slider-entity-row/commits/master/slider-entity-row.js?author=hulkhaugen">
      <img class="avatar mr-1" src="https://avatars3.githubusercontent.com/u/1409758?s=40&amp;v=4" width="20" height="20" alt="@hulkhaugen" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=14112103" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/thomasloven/lovelace-slider-entity-row/commits/master/slider-entity-row.js?author=benct">
      <img class="avatar mr-1" src="https://avatars0.githubusercontent.com/u/14112103?s=40&amp;v=4" width="20" height="20" alt="@benct" /> 
</a>
</span>

    </div>
  </div>





    <div class="Box mt-3 position-relative">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">

  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">
      54 lines (54 sloc)
      <span class="file-info-divider"></span>
    10.7 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/thomasloven/lovelace-slider-entity-row/raw/master/slider-entity-row.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/thomasloven/lovelace-slider-entity-row/blame/master/slider-entity-row.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/thomasloven/lovelace-slider-entity-row/commits/master/slider-entity-row.js">History</a>
    </div>


    <div>
            <a class="btn-octicon tooltipped tooltipped-nw hide-sm"
               href="https://desktop.github.com"
               aria-label="Open this file in GitHub Desktop"
               data-ga-click="Repository, open with desktop, type:windows">
                <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
            </a>

          <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
            aria-label="You must be signed in to make or propose changes">
            <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
          <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
            aria-label="You must be signed in to make or propose changes">
            <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
    </div>
  </div>
</div>




      

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">!function(t){var e={};function s(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){&quot;undefined&quot;!=typeof Symbol&amp;&amp;Symbol.toStringTag&amp;&amp;Object.defineProperty(t,Symbol.toStringTag,{value:&quot;Module&quot;}),Object.defineProperty(t,&quot;__esModule&quot;,{value:!0})},s.t=function(t,e){if(1&amp;e&amp;&amp;(t=s(t)),8&amp;e)return t;if(4&amp;e&amp;&amp;&quot;object&quot;==typeof t&amp;&amp;t&amp;&amp;t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,&quot;default&quot;,{enumerable:!0,value:t}),2&amp;e&amp;&amp;&quot;string&quot;!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&amp;&amp;t.__esModule?function(){return t.default}:function(){return t};return s.d(e,&quot;a&quot;,e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p=&quot;&quot;,s(s.s=0)}([function(t,e,s){&quot;use strict&quot;;s.r(e);const i=customElements.get(&quot;home-assistant-main&quot;)?Object.getPrototypeOf(customElements.get(&quot;home-assistant-main&quot;)):Object.getPrototypeOf(customElements.get(&quot;hui-view&quot;)),r=i.prototype.html,a=i.prototype.css;class n{constructor(t){this._config=t}set hass(t){this._hass=t,this.stateObj=this._config.entity in t.states?t.states[this._config.entity]:null}get value(){return this._value?Math.round(this._value/this.step)*this.step:0}set value(t){t!==this.value&amp;&amp;(this._value=t)}get string(){return`${this.value}`}get hidden(){return!1}get hasSlider(){return!0}get hasToggle(){return!0}get isOff(){return 0===this.value}get min(){return void 0!==this._config.min?this._config.min:void 0!==this._min?this._min:0}get max(){return void 0!==this._config.max?this._config.max:void 0!==this._max?this._max:100}get step(){return void 0!==this._config.step?this._config.step:void 0!==this._step?this._step:5}}const u={light:class extends n{get attribute(){return this._config.attribute||&quot;brightness&quot;}get _value(){if(&quot;on&quot;!==this.stateObj.state)return 0;switch(this.attribute){case&quot;color_temp&quot;:return Math.ceil(this.stateObj.attributes.color_temp);case&quot;brightness&quot;:return Math.ceil(100*this.stateObj.attributes.brightness/255);case&quot;red&quot;:return this.stateObj.attributes.rgb_color?Math.ceil(this.stateObj.attributes.rgb_color[0]):0;case&quot;green&quot;:return this.stateObj.attributes.rgb_color?Math.ceil(this.stateObj.attributes.rgb_color[1]):0;case&quot;blue&quot;:return this.stateObj.attributes.rgb_color?Math.ceil(this.stateObj.attributes.rgb_color[2]):0;case&quot;hue&quot;:return this.stateObj.attributes.hs_color?Math.ceil(this.stateObj.attributes.hs_color[0]):0;case&quot;saturation&quot;:return this.stateObj.attributes.hs_color?Math.ceil(this.stateObj.attributes.hs_color[1]):0;case&quot;effect&quot;:return this.stateObj.attributes.effect_list?this.stateObj.attributes.effect_list.indexOf(this.stateObj.attributes.effect):0;default:return 0}}get _step(){switch(this.attribute){case&quot;effect&quot;:return 1;default:return 5}}get _min(){switch(this.attribute){case&quot;color_temp&quot;:return this.stateObj.attributes.min_mireds;default:return 0}}get _max(){switch(this.attribute){case&quot;color_temp&quot;:return this.stateObj.attributes.max_mireds;case&quot;red&quot;:case&quot;green&quot;:case&quot;blue&quot;:return 255;case&quot;hue&quot;:return 360;case&quot;effect&quot;:return this.stateObj.attributes.effect_list?this.stateObj.attributes.effect_list.length-1:0;default:return 100}}set _value(t){let e,s=this.attribute,i=!0;switch(s){case&quot;brightness&quot;:(t=Math.ceil(t/100*255))||(i=!1);break;case&quot;red&quot;:case&quot;green&quot;:case&quot;blue&quot;:e=this.stateObj.attributes.rgb_color||[0,0,0],&quot;red&quot;===s&amp;&amp;(e[0]=t),&quot;green&quot;===s&amp;&amp;(e[1]=t),&quot;blue&quot;===s&amp;&amp;(e[2]=t),t=e,s=&quot;rgb_color&quot;;break;case&quot;hue&quot;:case&quot;saturation&quot;:e=this.stateObj.attributes.hs_color||[0,0],&quot;hue&quot;===s&amp;&amp;(e[0]=t),&quot;saturation&quot;===s&amp;&amp;(e[1]=t),t=e,s=&quot;hs_color&quot;;break;case&quot;effect&quot;:t=this.stateObj.attributes.effect_list[t],s=&quot;effect&quot;}i?this._hass.callService(&quot;light&quot;,&quot;turn_on&quot;,{entity_id:this.stateObj.entity_id,[s]:t}):this._hass.callService(&quot;light&quot;,&quot;turn_off&quot;,{entity_id:this.stateObj.entity_id})}get string(){if(&quot;off&quot;===this.stateObj.state)return this._hass.localize(&quot;state.default.off&quot;);switch(this.attribute){case&quot;color_temp&quot;:return`${this.value} K`;case&quot;brightness&quot;:case&quot;saturation&quot;:return`${this.value} %`;case&quot;hue&quot;:return`${this.value} °`;case&quot;effect&quot;:return this.stateObj.attributes.effect;default:return this.value}}get hasSlider(){switch(this.attribute){case&quot;brightness&quot;:return&quot;brightness&quot;in this.stateObj.attributes||!!(&quot;supported_features&quot;in this.stateObj.attributes&amp;&amp;1&amp;this.stateObj.attributes.supported_features);case&quot;color_temp&quot;:return&quot;color_temp&quot;in this.stateObj.attributes||!!(&quot;supported_features&quot;in this.stateObj.attributes&amp;&amp;2&amp;this.stateObj.attributes.supported_features);case&quot;red&quot;:case&quot;green&quot;:case&quot;blue&quot;:return&quot;rgb_color&quot;in this.stateObj.attributes||!!(&quot;supported_features&quot;in this.stateObj.attributes&amp;&amp;16&amp;this.stateObj.attributes.supported_features);case&quot;hue&quot;:case&quot;saturation&quot;:return&quot;hs_color&quot;in this.stateObj.attributes||!!(&quot;supported_features&quot;in this.stateObj.attributes&amp;&amp;16&amp;this.stateObj.attributes.supported_features);case&quot;effect&quot;:return&quot;effect&quot;in this.stateObj.attributes;default:return!1}}},media_player:class extends n{get _value(){return&quot;on&quot;===this.stateObj.is_volume_muted?0:Math.ceil(100*this.stateObj.attributes.volume_level)}set _value(t){t/=100,this._hass.callService(&quot;media_player&quot;,&quot;volume_set&quot;,{entity_id:this.stateObj.entity_id,volume_level:t})}get isOff(){return&quot;off&quot;===this.stateObj.state}get string(){return this.stateObj.attributes.is_volume_muted?&quot;-&quot;:this.stateObj.attributes.volume_level?`${this.value} %`:this._hass.localize(&quot;state.media_player.off&quot;)}get hasToggle(){return!1}},climate:class extends n{get _value(){return this.stateObj.attributes.temperature}set _value(t){this._hass.callService(&quot;climate&quot;,&quot;set_temperature&quot;,{entity_id:this.stateObj.entity_id,temperature:t})}get string(){return&quot;off&quot;===this.stateObj.attributes.hvac_mode?this._hass.localize(&quot;state.climate.off&quot;):`${this.value} ${this._hass.config.unit_system.temperature}`}get isOff(){return&quot;off&quot;===this.stateObj.attributes.hvac_mode}get _min(){return this.stateObj.attributes.min_temp}get _max(){return this.stateObj.attributes.max_temp}get _step(){return 1}},cover:class extends n{get attribute(){return this._config.attribute||&quot;position&quot;}get _value(){switch(this.attribute){case&quot;position&quot;:return&quot;closed&quot;===this.stateObj.state?0:this.stateObj.attributes.current_position;case&quot;tilt&quot;:return this.stateObj.attributes.current_tilt_position;default:return 0}}set _value(t){switch(this.attribute){case&quot;position&quot;:this._hass.callService(&quot;cover&quot;,&quot;set_cover_position&quot;,{entity_id:this.stateObj.entity_id,position:t});break;case&quot;tilt&quot;:this._hass.callService(&quot;cover&quot;,&quot;set_cover_tilt_position&quot;,{entity_id:this.stateObj.entity_id,tilt_position:t})}}get string(){if(!this.hasSlider)return&quot;&quot;;switch(this.attribute){case&quot;position&quot;:return&quot;closed&quot;===this.stateObj.state?this._hass.localize(&quot;state.cover.closed&quot;):`${this.value} %`;case&quot;tilt&quot;:return this.value}}get hasToggle(){return!1}get hasSlider(){switch(this.attribute){case&quot;position&quot;:if(&quot;current_position&quot;in this.stateObj.attributes)return!0;if(&quot;supported_features&quot;in this.stateObj.attributes&amp;&amp;4&amp;this.stateObj.attributes.supported_features)return!0;case&quot;tilt&quot;:if(&quot;current_tilt_position&quot;in this.stateObj.attributes)return!0;if(&quot;supported_features&quot;in this.stateObj.attributes&amp;&amp;128&amp;this.stateObj.attributes.supported_features)return!0;default:return!1}}get _step(){return 10}},fan:class extends n{get _value(){return&quot;off&quot;!==this.stateObj.state?this.stateObj.attributes.speed_list.indexOf(this.stateObj.attributes.speed):0}set _value(t){t in this.stateObj.attributes.speed_list?this._hass.callService(&quot;fan&quot;,&quot;turn_on&quot;,{entity_id:this.stateObj.entity_id,speed:this.stateObj.attributes.speed_list[t]}):this._hass.callService(&quot;fan&quot;,&quot;turn_off&quot;,{entity_id:this.stateObj.entity_id})}get string(){return&quot;off&quot;===this.stateObj.state?this._hass.localize(&quot;state.default.off&quot;):this.stateObj.attributes.speed}get hasSlider(){return&quot;speed&quot;in this.stateObj.attributes}get _max(){return this.stateObj.attributes.speed_list.length-1}get _step(){return 1}},input_number:class extends n{get _value(){return this.stateObj.state}set _value(t){this._hass.callService(&quot;input_number&quot;,&quot;set_value&quot;,{entity_id:this.stateObj.entity_id,value:t})}get string(){return`${parseFloat(this.stateObj.state)} ${this.stateObj.attributes.unit_of_measurement||&quot;&quot;}`.trim()}get isOff(){return!1}get hasToggle(){return!1}get hasSlider(){return&quot;slider&quot;===this.stateObj.attributes.mode}get _min(){return this.stateObj.attributes.min}get _max(){return this.stateObj.attributes.max}get _step(){return this.stateObj.attributes.step}},input_select:class extends n{get _value(){return this.stateObj.attributes.options.indexOf(this.stateObj.state)}set _value(t){t in this.stateObj.attributes.options&amp;&amp;this._hass.callService(&quot;input_select&quot;,&quot;select_option&quot;,{entity_id:this.stateObj.entity_id,option:this.stateObj.attributes.options[t]})}get string(){return this.stateObj.state}get isOff(){return!1}get hasToggle(){return!1}get hasSlider(){return this.stateObj.attributes.options&amp;&amp;this.stateObj.attributes.options.length&gt;0}get _max(){return this.stateObj.attributes.options.length-1}get _step(){return 1}}};customElements.define(&quot;slider-entity-row&quot;,class extends i{static get properties(){return{hass:{}}}setConfig(t){this._config=t;const e=t.entity.split(&quot;.&quot;)[0],s=u[e];if(!s)throw new Error(`Unsupported entity type: ${e}`);this.ctrl=new s(t)}render(){const t=this.ctrl;t.hass=this.hass;const e=this.hass.translationMetadata.translations[this.hass.language||&quot;en&quot;].isRTL?&quot;rtl&quot;:&quot;ltr&quot;,s=r`</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">&lt;</span>ha<span class="pl-k">-</span>slider</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">        .<span class="pl-smi">min</span><span class="pl-k">=</span>${<span class="pl-smi">t</span>.<span class="pl-smi">min</span>}</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">        .<span class="pl-smi">max</span><span class="pl-k">=</span>${<span class="pl-smi">t</span>.<span class="pl-smi">max</span>}</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">        .<span class="pl-smi">step</span><span class="pl-k">=</span>${<span class="pl-smi">t</span>.<span class="pl-smi">step</span>}</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">        .<span class="pl-c1">value</span><span class="pl-k">=</span>${<span class="pl-smi">t</span>.<span class="pl-c1">value</span>}</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">        .<span class="pl-c1">dir</span><span class="pl-k">=</span>${e}</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">        pin</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">        @change<span class="pl-k">=</span>${<span class="pl-smi">e</span><span class="pl-k">=&gt;</span><span class="pl-smi">t</span>.<span class="pl-c1">value</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">shadowRoot</span>.<span class="pl-c1">querySelector</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ha-slider<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">value</span>}</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">class</span><span class="pl-k">=</span>${<span class="pl-c1">this</span>.<span class="pl-smi">_config</span>.<span class="pl-smi">full_row</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>full<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>}</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">&gt;&lt;</span><span class="pl-k">/</span>ha<span class="pl-k">-</span>slider<span class="pl-k">&gt;</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">`</span>,i=r<span class="pl-pds">`</span></span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">&lt;</span>ha<span class="pl-k">-</span>entity<span class="pl-k">-</span>toggle</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">        .<span class="pl-smi">stateObj</span><span class="pl-k">=</span>${<span class="pl-c1">this</span>.<span class="pl-smi">hass</span>.<span class="pl-smi">states</span>[<span class="pl-c1">this</span>.<span class="pl-smi">_config</span>.<span class="pl-smi">entity</span>]}</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">        .<span class="pl-smi">hass</span><span class="pl-k">=</span>${<span class="pl-c1">this</span>.<span class="pl-smi">hass</span>}</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">&gt;&lt;</span><span class="pl-k">/</span>ha<span class="pl-k">-</span>entity<span class="pl-k">-</span>toggle<span class="pl-k">&gt;</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">`</span>,a=r<span class="pl-pds">`</span></span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">&lt;</span>div <span class="pl-k">class</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>wrapper<span class="pl-pds">&quot;</span></span> @click<span class="pl-k">=</span>${<span class="pl-smi">t</span><span class="pl-k">=&gt;</span><span class="pl-smi">t</span>.<span class="pl-c1">stopPropagation</span>()}<span class="pl-k">&gt;</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">      ${<span class="pl-s"><span class="pl-pds">&quot;</span>unavailable<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">t</span>.<span class="pl-smi">stateObj</span>.<span class="pl-smi">state</span><span class="pl-k">?</span>r<span class="pl-s"><span class="pl-pds">`</span></span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-s">          &lt;span class=&quot;state&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-s">          unavailable</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-s">          &lt;/span&gt;</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-s">        <span class="pl-pds">`</span></span><span class="pl-k">:</span>r<span class="pl-s"><span class="pl-pds">`</span></span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-s">          <span class="pl-s1"><span class="pl-pse">${</span><span class="pl-c1">this</span>.<span class="pl-smi">_config</span>.<span class="pl-smi">hide_when_off</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">t</span>.<span class="pl-smi">isOff</span><span class="pl-k">||!</span><span class="pl-smi">t</span>.<span class="pl-smi">hasSlider</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>s<span class="pl-pse">}</span></span></span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-s">          <span class="pl-s1"><span class="pl-pse">${</span><span class="pl-c1">this</span>.<span class="pl-smi">_config</span>.<span class="pl-smi">hide_state</span><span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-smi">_config</span>.<span class="pl-smi">toggle</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>r<span class="pl-s"><span class="pl-pds">`</span></span></span></span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-s1"><span class="pl-s">              &lt;span class=&quot;state&quot;&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-s1"><span class="pl-s">                <span class="pl-s1"><span class="pl-pse">${</span><span class="pl-smi">t</span>.<span class="pl-smi">string</span><span class="pl-pse">}</span></span></span></span></span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-s1"><span class="pl-s">              &lt;/span&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-s1"><span class="pl-s">              <span class="pl-pds">`</span></span><span class="pl-pse">}</span></span></span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-s">          <span class="pl-s1"><span class="pl-pse">${</span><span class="pl-c1">this</span>.<span class="pl-smi">_config</span>.<span class="pl-smi">toggle</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">t</span>.<span class="pl-smi">hasToggle</span><span class="pl-k">?</span>i<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-pse">}</span></span></span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-s">        <span class="pl-pds">`</span></span>}</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">`</span>;return this._config.full_row?a:r<span class="pl-pds">`</span></span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">&lt;</span>hui<span class="pl-k">-</span>generic<span class="pl-k">-</span>entity<span class="pl-k">-</span>row</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">      .<span class="pl-smi">hass</span><span class="pl-k">=</span>${<span class="pl-c1">this</span>.<span class="pl-smi">hass</span>}</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">      .<span class="pl-smi">config</span><span class="pl-k">=</span>${<span class="pl-c1">this</span>.<span class="pl-smi">_config</span>}</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">&gt;</span> ${a} <span class="pl-k">&lt;</span><span class="pl-k">/</span>hui<span class="pl-k">-</span>generic<span class="pl-k">-</span>entity<span class="pl-k">-</span>row<span class="pl-k">&gt;</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">`</span>}static get styles(){return a<span class="pl-pds">`</span></span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">      .<span class="pl-smi">wrapper</span> {</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">        display<span class="pl-k">:</span> flex;</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">        align<span class="pl-k">-</span>items<span class="pl-k">:</span> center;</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">        height<span class="pl-k">:</span> <span class="pl-ii">40px</span>;</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">      .<span class="pl-smi">state</span> {</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">        min<span class="pl-k">-</span>width<span class="pl-k">:</span> <span class="pl-ii">45px</span>;</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">        text<span class="pl-k">-</span>align<span class="pl-k">:</span> end;</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">      ha<span class="pl-k">-</span>entity<span class="pl-k">-</span>toggle {</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">        margin<span class="pl-k">-</span>left<span class="pl-k">:</span> <span class="pl-ii">8px</span>;</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">      ha<span class="pl-k">-</span><span class="pl-smi">slider</span>.<span class="pl-smi">full</span> {</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">        width<span class="pl-k">:</span> <span class="pl-c1">100</span><span class="pl-k">%</span>;</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">`</span>}})}]);</span></td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/thomasloven/lovelace-slider-entity-row/blame/db9a50a2de55a49cb3c1bf6f79bba6cd3d1f26a9/slider-entity-row.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/thomasloven/lovelace-slider-entity-row/issues/new/choose">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2019 <span title="0.18183s from unicorn-7b8d4d9c8b-6lmxj">GitHub</span>, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" integrity="sha512-7DgnKTvrXv8ipUdIi9xz0FXboKiq95B6EB028aPspG4JRZsvvwSbe2mLifBycxKZWNnQLZEwHqGAgw48jgpLLg==" type="application/javascript" src="https://github.githubassets.com/assets/compat-bootstrap-21b609a5.js"></script>
    <script crossorigin="anonymous" integrity="sha512-66yPJ4JAblq1zDn/+3IKWzUuzR0Oin7dKMBwDVuflRlcQHmegTtqoyANZqWlTompijP0bSNSRyk09xnPzusbjw==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-7cd2951d.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-CDqh3OIJfVsfaqNpzmuSj4NKQ8A/QNp6fWGd/OzIKRzjCRW7J2UhDWslWlqdfvRFWoBmL59UI+9nIqVX68FrCQ==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-5d33ad3d.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

