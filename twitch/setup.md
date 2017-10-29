---
layout: base
title: Hearthstone Deck Tracker Twitch Integration
exturl: /twitch/extension/
---

## Hearthstone Deck Tracker Twitch Extension

As of Hearthstone Deck Tracker version 1.5.2, Twitch streamers can now use the
native [HDT Twitch Extension]({{ page.exturl }}).

The extension implements game interactivity features on Twitch, giving viewers
access to a dynamically-updated, hoverable decklist as well as board interactions
(hovering over minions, secrets, quests, heroes and hero powers).

![Extension Screenshot](/static/images/twitch/decklist.png)


## Setup Guide

To enable the extension's features, follow these steps:

1) [Install the extension on Twitch]({{ page.exturl }})

![Extension Screenshot](/static/images/twitch/install.png)

2) [Link your Twitch account on HSReplay.net](https://hsreplay.net/social/account/connections).
You can link multiple Twitch accounts if you broadcast on more than one account
and want the integration on all of them.

![Twitch account linking](/static/images/twitch/oauth.png)

3) Link your HDT installation to [HSReplay.net](https://hsreplay.net) from the
settings menu: `Options (Advanced) → Streaming → Twitch Extension`.
If you cannot see the Streaming category, remember to check `Advanced settings`.

![HDT Options](/static/images/twitch/twitch-hdt.png)

*Note: If authentication fails, try running Hearthstone Deck Tracker as Administrator.*


4) Once you are ready and configured, **activate the extension on your dashboard**.

![Activation screenshot](/static/images/twitch/activate.png)


## Configuration

From the Twitch setup, you can configure whether the decklist displays on the
left or right side of the stream by default, or hide it altogether.
Users can always hide the decklist on their end as well from its title bar.
Decks can also be copied directly from it, so if you get chat requests for the
deck you are currently playing, you can tell them to copy the deckstring from
there:

![HDT Options](/static/images/twitch/copy-deckstring.png)


If you no longer want to use the extension, you can just uninstall it from the
Twitch extension dashboard.


## Support and Feedback

Join us [on our Discord server]({{ site.vars.links.discord }}) for general help,
suggestions and guidance. You can also email us at <contact@hsdecktracker.net>.


## Troubleshooting / FAQ


### "Authenticate with HSReplay.net" fails with an error

This is usually a firewall issue. Try running Hearthstone Deck Tracker as Administrator.


### Configuration screen is stuck on "Loading setup..."

This is a rare Twitch issue. Try again in a few hours.


### Is macOS supported?

HSTracker for macOS is not supported at this time. Maybe in the future.
