"use strict";

const liveLinkDestination = "https://gamebanana.com/";
const devLinkDestination = "https://dev.gamebanana.com/";

const observerTarget = document.body;

const observerOptions = {
    subtree: true,
    childList: true,
    attributes: false
};

function replaceLinks(element, match, replacement)
{
    let x = element.querySelectorAll("a");

    for (let i = 0; i < x.length; i++) {
        if (x[i].href.indexOf(match) > -1) {
            x[i].href = x[i].href.replace(match, replacement);
        }
    }
}

const observerCallback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
            replaceLinks(mutation.target, liveLinkDestination, devLinkDestination);
        }
    }
}

replaceLinks(observerTarget, liveLinkDestination, devLinkDestination);

const observer = new MutationObserver(observerCallback);

observer.observe(observerTarget, observerOptions);