// ==UserScript==
// @name            Redirect From Reddit To Old Reddit
// @namespace       https://vanyauhalin.me/
// @version         0.1.0
// @icon            https://www.google.com/s2/favicons/?sz=64&domain=old.reddit.com
// @description     Userscript that redirects from Reddit to old Reddit
// @author          Ivan Uhalin <vanyauhalin@gmail.com> (https://vanyauhalin.me/)
// @license         MIT
// @homepageURL     https://github.com/vanyauhalin/userscript-redirect-from-reddit-to-old-reddit/
// @contributionURL https://github.com/vanyauhalin/userscript-redirect-from-reddit-to-old-reddit/
// @updateURL       https://github.com/vanyauhalin/userscript-redirect-from-reddit-to-old-reddit/releases/latest/download/main.js
// @match           https://www.reddit.com/*
// @run-at          document-start
// ==/UserScript==

(() => {
  "use strict"

  function main(): void {
    let u = new URL(window.location.pathname, "https://old.reddit.com/")
    window.location.replace(u.toString())
  }

  main()
})()
