Lightshare
======================================================================

_Lightshare_ is a lightweight share widget for twitter and facebook
that currently weighs about 8KB and doesn't load in tonnes of rubbish
when the page loads, or save cookies, or use flash...

The one caveat is that it requires jQuery for dom manipulation, but I
expect that to be addressed in later releases.

You can overwrite the styles with a little reverse engineering, I'll
document this later.

It calls up the facebook like with an iframe, alas there isn't just
some url you can use like the twitter intents.

### Usage
  <div data-copy="Check out this really great website" data-url="http://www.google.com" data-via="googlebot">Share link to google</div>
  <script src="[path to lightshare]"></script>
