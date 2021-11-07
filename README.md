# devgb.stay-there

## Summary
An extension for Firefox to alter hyperlinks pointing to the live site.

## What it does
Watches for changes being made to the DOM tree (target - `document.body`).

Iterates over mutations list elements.

Gets all `a` tags and replaces `https://gamebanana.com/` with `https://dev.gamebanana.com/` in the `href` attribute.

## How to install
Open `about:debugging#/runtime/this-firefox`, click `Load Temporary Add-on...`, open `manifest.json`.