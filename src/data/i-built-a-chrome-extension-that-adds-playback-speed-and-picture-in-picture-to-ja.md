# I Built a Chrome Extension That Adds Playback Speed and Picture-in-Picture to Japan's Free Streaming Service

Source: https://dev.to/_350df62777eb55e1/i-built-a-chrome-extension-that-adds-playback-speed-and-picture-in-picture-to-japans-free-5bbo

TVer is Japan's official free streaming platform — catch-up TV for every major broadcaster. It's the legal, ad-supported way to watch NHK, TBS, Fuji TV, and others without a cable subscription.

It's missing two features I use on every other video platform: playback speed control and Picture-in-Picture.

So I built TVer Plus to add them.

Playback speed is the feature I miss most. I watch a lot of documentary and news content on TVer where 1.5x is comfortable and 2x is fine for anything I'm half-watching. The native player doesn't expose this. Most modern video platforms do. The HTML5 <video> element supports it natively — there's no technical reason TVer can't have it.

Picture-in-Picture is the API that lets a video float over other windows. Chrome has had native PiP support since 2018 via HTMLVideoElement.requestPictureInPicture(). Again: technically trivial, just not exposed in TVer's UI.

TVer uses a custom video player on top of a standard <video> element. The player controls are in a separate DOM layer. I inject a small floating control panel via content script that interacts directly with the underlying <video> element.

TVer's player wraps the video in several layers of divs:

TVer's player structure sometimes embeds the video in an iframe for ad isolation. The try-catch handles the cross-origin case (ad iframes from third-party domains).

Setting playback rate is one line:

The interesting part is persistence. TVer is a SPA — navigating to a new episode triggers pushState without a full reload. The video element gets replaced with a new one. A MutationObserver on the player container re-applies the saved rate to new video elements:

The { once: true } on the event listener prevents memory leaks — it auto-removes after firing once.

The requestPictureInPicture() call must happen in response to a user gesture (click). Trying to call it programmatically throws a NotAllowedError. The button in my UI is a direct click handler, which satisfies the gesture requirement.

TVer plays ads before content. Setting playbackRate = 2 on an ad is technically possible but feels wrong (and might violate terms). I check if an ad is playing before applying speed:

The control panel is injected into the page DOM as a fixed-position element:

It's designed to be minimal — no branding, no settings pane, just the controls. The position is saved per-session so it stays where the user drags it.

I want to be clear about what this extension doesn't do: it does not remove ads, bypass DRM, download content, or do anything that would affect TVer's revenue. The whole point of TVer is that it's ad-supported free TV. The extension just adds quality-of-life playback controls that most streaming services already provide.

The extension is available on the Chrome Web Store.

Built with TypeScript. Content script injection into tver.jp pages. No external dependencies.