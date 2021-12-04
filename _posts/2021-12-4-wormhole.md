---
layout: post
title: Through the Wormhole
description: Wormhole has added Terra support with the Columbus-5 upgrade.
image: assets/images/wormhole.gif
banner: assets/images/posts/2021/12/wormhole/portal_2.png
tags: terra wormhole
---

## Introduction
<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">1/ The <a href="https://twitter.com/wormholecrypto?ref_src=twsrc%5Etfw">@wormholecrypto</a> support for Terra in the V2 UI is live! <br><br>Transfers of <a href="https://twitter.com/search?q=%24UST&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$UST</a> and <a href="https://twitter.com/search?q=%24LUNA&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$LUNA</a> between Terra, <a href="https://twitter.com/ethereum?ref_src=twsrc%5Etfw">@ethereum</a>, <a href="https://twitter.com/solana?ref_src=twsrc%5Etfw">@solana</a>, and <a href="https://twitter.com/BinanceChain?ref_src=twsrc%5Etfw">@BinanceChain</a> via Wormhole’s cross-chain bridge are now available :) <a href="https://t.co/2gWsIq2KxW">https://t.co/2gWsIq2KxW</a></p>&mdash; Terra (UST) 🌍 Powered by LUNA 🌕 (@terra_money) <a href="https://twitter.com/terra_money/status/1450538513141690371?ref_src=twsrc%5Etfw">October 19, 2021</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

 There's a lot out there already written about what Wormhole is and how to use it. This isn't going to be one of those articles. Two recent Flipside bounties asked the community analysts to investigate user behavior in the weeks since Wormhole was enabled for Terra. I really enjoyed those so I created a whole website just to write more about my work on those (and future) bounties.

#### Terra Bounties 101 & 103

As many of them often are, two recent Terra analytics bounties were closely inter-related. The primary question for 101 was a call to analyze initial user behavior with Wormhole v2, focusing on what they're sending and to where. 103 honed in on UST, aka the Terra dollar. I've loved analyzing UST - where it is, where it's going, and how it's being used (I'll definitely be revisiting a lot of my work on Anchor Protocol for some more comprehensive write-ups) so of course I jumped into these two prompts.  

The basis of this is my work on these bounties:
 - [My submission (101)](https://app.flipsidecrypto.com/dashboard/into-the-wormhole-Sqv35x)  
 - [My submission (103)](https://app.flipsidecrypto.com/dashboard/usd-terra-usd-v5wGyB)  

*Note - images are linked to an interactive version of the chart until embeds are fixed. From there, you can download via csv or see the SQL to reproduce and further explore the data. Most charts are from the above bounties, but I did create a few new ones for this post.*

 In this post, I am going to use t$. This is the denomination symbol I am giving to terra dollars and will be using this going forward rather than assuming equivalent value in USD. Basically, it's count of UST (because 1=1) plus LUNA (or whatever other token) in UST value. When a chart is scaled to token count, instead, that will be made clear. Basically, t$ means UST.  

**Very briefly**, what is Wormhole?  
It's a decentralized, cross-chain, token bridge. Users will find it somewhat similar to the native Terra Bridge, but with support for more chains. That's about all I am going to say about it here because Terraform Labs has already written an [extensive blog post](https://medium.com/terra-money/wormhole-v2-for-terra-the-ui-walkthrough-595ca6649ae8) on Wormhole. One final note of import is that the eventual plan is for Wormhole to supplant the Bridge due to its decentralized nature.

# 👨‍🚀 Into the Wormhole We Go
Access to the [Wormhole Token Bridge](https://wormholebridge.com/) kicked-off with that tweet on October 19th and immediately we see some large outflow of UST. Now, this was mainly one single transaction of 30mm, so in reality it took a couple days for user behavior to rev up.  
The [same address](https://finder.extraterrestrial.money/mainnet/address/terra1dtzfwgzt8xa70zkm8gqzwz0n4zrqtngdpqejx5) sent the next 30mm on October 30th. I almost got pulled into a rabbit hole by trying to figure out who or what that address is, but we're talking wormholes, here, not rabbit holes. Maybe later (probably later).

<div class="row">
	<div class="8u 12u$(medium)">
		<a href="https://velocity-app.flipsidecrypto.com/velocity/visuals/ee9092ae-c16d-482a-861e-ec3cbf951681/7cb23054-67de-4de3-b966-da8cb5960c86"><img src="{% link assets/images/posts/2021/12/wormhole/outbound_gross_volume.png %}" class="image fit"></a>
	</div>

	<div class="4u 12u$(small)">
		<div>
			<div style="color:#58aabf">&nbsp;&#9632; Solana</div>
			<div style="color:#CEB0FA">&nbsp;&#9632; Ethereum</div>
			<div style="color:#f3ba2b">&nbsp;&#9632; Binance Smart Chain</div>
			<div style="color:black">&nbsp;&#9632; Polygon</div>
		</div>
		<p>Click chart for interactive version.</p>
		<a href="https://velocity-app.flipsidecrypto.com/velocity/visuals/f468585c-aa8a-4ad0-887a-42caf798c33c/b85415e4-3e70-4fe9-a7a8-86032dd5edfb">Just UST</a><br>
		<a href="https://velocity-app.flipsidecrypto.com/velocity/visuals/28d49c65-f4a5-46a2-878f-5c91d5788791/dc2a21d3-0e22-4d0a-879c-d7f658de8b65">Just LUNA</a>


	</div>
</div>

## ☀️ Bound for the Sun

<div class="row">
	<div class="10u 12u$(medium)">
		<p>
		<span class="image right"><a href="https://velocity-app.flipsidecrypto.com/velocity/visuals/dcd50746-5230-4c87-b6bc-7304937cd7cd/7dc9927c-1d6d-427d-a6bd-116d3f069aff"><img src="{% link assets/images/posts/2021/12/wormhole/destination_donut.png %}"></a></span>
		We set out to analyze the initial activity, right? <br>
		Solana.  <br>
		That's the initial activity. A lot of value was sent over to Solana in the first ~two months since Wormhole v2 support was added to the Terra network. This shouldn't come as a surprise, as the <a href="https://bridge.terra.money/">native Terra bridge</a> already supports Ethereum, Binance Smart Chain and Harmony. Wormhole offers users another way to get to Ethereum and BSC but Solana is the new kid on the block, and Terra users nearly exclusively used Wormhole to get over to Solana. This donut is percent of total outbound value (t$), thru December 3rd. Over that time period, users have send $185.3mm in LUNA and UST, primarily to Solana and Ethereum.<br>
		</p>
	</div>
	<div class="2u 12u$(medium)">
		<div style="color:#2475b4">&nbsp;&#9632; Solana</div>
		<div style="color:#fd7d13">&nbsp;&#9632; Ethereum</div>
		<div style="color:#34a42d">&nbsp;&#9632; BSC</div>
		<div style="color:#d41429">&nbsp;&#9632; Polygon</div>

	</div>
</div>
<a href="https://app.flipsidecrypto.com/velocity/visuals/60556a3f-15b0-46d6-8d6b-ba1cf613c922/5ece72b0-370c-4105-9221-2c8a2b655498"><img src="{% link assets/images/posts/2021/12/wormhole/outbound_cumulative.png %}"></a>


<p>
<span class="image left"><a href="https://velocity-app.flipsidecrypto.com/velocity/visuals/05aae2b1-04c0-4f16-864e-ede79214d59f/e7593818-5b25-4eb0-979a-22b5c9bc64aa"><img src="{% link assets/images/posts/2021/12/wormhole/outbound_token_donut.png %}"></a></span>
<div>
	<div style="color:#ffffdd">&nbsp;&#9632; UST</div>
	<div style="color:#eff8b9">&nbsp;&#9632; LUNA</div>
</div>
A significant majority of this outflow has been the stablecoin, UST. This is not wholly surprising for a few reasons. LUNA is the native chain token. It secures the network, it can be bonded, it can be used as collateral ... ultimately, it's most useful on the mother chain (though Terra does need solid LUNA/UST pools across inter-chain networks 🌐). UST, on the other hand, is money, let it fly 💸.
</p>

So, it seems users are pretty excited to have direct access to bridge their UST from Terra over to Solana. Context is always important, so let's take a look at just how much UST has been sent to Solana, and how much already exists across the major chains.  
<div class="row">
	<div class="8u 12u$(medium)">

		<a href="https://velocity-app.flipsidecrypto.com/velocity/visuals/2ce68b68-f43a-4e15-bcc2-7bb8cf64e8e0/b85415e4-3e70-4fe9-a7a8-86032dd5edfb"><img src="{% link assets/images/posts/2021/12/wormhole/cumulative_ust.png %}"></a>
	</div>
	<div class="4u 12u$(medium)">

		Per the respective block scanners, the supply of wrapped UST (as of this writing) is:  
		<ul>
			<li><a href="https://etherscan.io/token/0xa47c8bf37f92abed4a126bda807a7b7498661acd">800mm on Ethereum</a></li>
			<li><a href="https://bscscan.com/token/0x23396cf899ca06c4472205fc903bdb4de249d6fc">22mm on BSC</a></li>
			<li><a href="https://polygonscan.com/token/0x692597b009d13c4049a947cab2239b7d6517875f">7.4mm on Polygon</a></li>
		</ul>

		... 125mm to Solana is a lot 💪  <br>
		... in 6 weeks is fast ⚡️
	</div>
</div>
<br>

## What's the catch?
<div class="row">
	<div class="6u 12u$(small)">
		Finally, I was interested in *who* is sending money through the wormhole. Is it whales, like those $30mm transfers? Or is it the everydayman, just looking for some low-fee yield? Turns out, it's a bit of both. We can look at the spread of transfer size to determine the type of user that's sending money through the wormhole. I did have to set an upper limit at $4mm as the chart scaling skews representation on the smaller end. <a href="https://velocity-app.flipsidecrypto.com/velocity/visuals/0bf8920d-12d1-40b7-bf54-c2726c1523e4/c87a857d-4abd-4fc9-b16c-578e243d0809">Here's an un-capped chart</a>.<br>
		<br>
		I was, frankly, surprised to see the extensive spread of transfers >t$100,000. I can throw some hypothese out there, but a look at LUNA's price action might be lending a helping hand to these large transactions. Today, LUNA recently overtook DOGE as the 10th largest cryptocurrency, by marketcap, and has made quite a lot of people quite a lot of money. However, that's not the point of this writeup, so we'll move on.<br>
		<br>
	</div>

	<div class="6u 12u$(medium)">
		<span class="image fit">
			<a href="https://velocity-app.flipsidecrypto.com/velocity/visuals/85e89ec9-714a-4120-b211-e6641830d719/f29cf5ec-f7dc-46d9-876b-1e10a3ba31cb"><img src="{% link assets/images/posts/2021/12/wormhole/ust_transfer_spread.png %}"></a>
		</span>
	</div>

</div>
Affluent wallets are readily sending their UST through the wormhole. The direct Terra-Solana connection is long awaited, and we can see the immediate impact of the past six weeks. At some point soon™️, Flipside will announce Solana tables and bounties and all that analytical goodness. Where this UST is going and what users are doing with it is something I'm incredibly interested in. For now, I expect users will continue to utilize this new chain connection and we'll see a steady stream of UST exports off the Terra blockchain.

## 👥 Who is using what
When I looked at this 10 days ago, the story was looked quite different. When I wrote bounty 101, Bridge users (daily unique wallets) were down 25% since Wormhole launched and it looked like users were fleeing the old for the new. Running the query today, we see user activity has rebounded from it's local minimum while Wormhole has continued to attract users. This is why updating analyses is important and no conclusion is really ever set in stone - this isn't a predictive piece.  

As mentioned above, the plan is for Wormhole to become the primary bridge to and from Terra, so one day this point will be moot. Further, we know that Solana is the primary destination for users going through the Wormhole and when you send UST through, it does get wrapped. Users do have to send a transaction through on the other side to confirm and claim the whUST, so it would make sense that the native bridge remains option one for Ethereum, as there are fewer fee-incurring transactions with that bridge. If users have to unwrap UST when it hits Ethereum and the only bridge available is Wormhole, we may see some problems continuing to scale UST on Ethereum in the future due to fee friction.  

**Take note that the bridge is fixed to the left axis and wormhole to the right. Flipside is working on fixing charts to show both scales when this is the case.**

<span class="image fit">
	<a href="https://app.flipsidecrypto.com/velocity/visuals/e2edefe4-eb2e-4966-9ecb-fc8fc9c3080b/0f267f10-5c50-4a69-8d9f-4762bb6ef612"><img src="{% link assets/images/posts/2021/12/wormhole/users_comp.png %}"></a>
</span>

## 🎬 What's next?
This didn't encompass everything I took a look at for the bounties. In [my submission for 101](https://app.flipsidecrypto.com/dashboard/into-the-wormhole-Sqv35x), I took a look at alternate stablecoins coming through the Wormhole to Terra. Volume is still relatively low, so not worth expanding on at this point in time. However, it will remain interesting to see if users bring over USDC, Dai or Tether for some reason. Terra is an entire blockchain built to create and support the decentralized stablecoin UST, so I see no reason to have pools of alternate stables but others have different preferences.  

Wormhole is also enabling wrapped tokens of all origins on Terra. In that same submission (101), I provide a table of known wrapped tokens that users have sent to Terra. Volume is few and far between, at this time, so I haven't yet expanded that view. However, it is expected that more and more tokens will be made available to users of the Terra blockchain. [LOOP](https://dex.loop.markets/) has already enabled whWBTC and whWETH pools. Wormhole support is a huge step forward for Terra because of this. There are a lot of great native protocols on Terra, but it's a young ecosystem. Having access to these (wrapped) tokens provides foundational support to the entire Terra ecosystem. We'll see how it develops.