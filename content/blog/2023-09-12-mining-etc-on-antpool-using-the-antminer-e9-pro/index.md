---
title: "Mining ETC on Antpool Using the Antminer E9 Pro"
date: 2023-09-12
author: Donald McIntyre
contributors: ["DonaldMcIntyre"]
tags: ["guide"]
linkImage: ./antminer-banner.png
---

---
**You can listen to or watch this interview here:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/K3xokypGLnM?si=di3ykKFTMAGJqyJq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

In our previous post about mining Ethereum Classic (ETC) with the Antminer E9 Pro through Antpool, we published 5 videos explaining the unboxing, connection, setup, checking statistics, and how to start mining processes.

In this article, we will go over the same steps, but in written form as there are many miners around the world who would prefer these guides in text.

This is the link to our previous post: 

https://ethereumclassic.org/blog/2023-06-07-mining-ethereum-classic-with-an-antminer-e9-pro-through-antpool 

In the following sections we will explain the processes mentioned above.

## 1. Unboxing the Antminer E9 Pro

![](1.png)

When unboxing the Antminer E9 Pro you will find a big machine that measures 22 inches deep, 8 inches wide, and 12 inches tall (in centimeters, that is 56 cm deep x 20 cm wide x 31 cm tall).

It has an ethernet port to connect to your local internet router, but it does not bring the cable, so you need to get one.

The miner requires 3000 watts of power and runs at 220 to 240 volts, so if you are mining from a location with different voltage, then you will need a transformer with two 220/240 outlets.

I said above two outlets because the E9 Pro miner uses two power sources, one for the fans and one for the mining boards. However, the machine does not come with the power cables, so you will need to purchase them as well.

If you will mine at home or office and you have normal air conditioning, or the temperature is around 75º F (around 24º C) then it will work fine.

## 2. Connection

![](2.png)

The fans of the Antminer E9 Pro make a lot of noise, so if you are mining from home or office, make sure to put it in an isolated location!

To connect the ASIC miner, first get the two power cables and connect them to the two available plugs in the machine. Then, connect the other ends of the two cables into the transformer, if you are using one, a multiplug extension cord, or outlets on the wall.

Second, connect the miner to the router by plugging your ethernet cable to the port in the miner, and then into your local WiFi router.

If your are using a transformer or multiplug extension, then connect them to the wall outlet. 

Once you connect the power source to the miner, or you turn on the transformer, the machine will start immediately.

You will notice that the secondary fans start first and after a while the primary fans will turn on.

## 3. Setup With Your Local Computer

![](3.png)

To set up your Antminer E9 Pro to your computer to be able to manage it, both machines must be connected to the same WiFi router.

To open the Antminer interface, open your browser and type the URL 192.168.0.210 to access it. This is the address of your miner within your local network.

The interface will immediately ask you for a user ID and password. The defaults are “root” and “root”, so type them as your ID and password to open the interface.

Once in the user interface, you need to change your password for security reasons. For this, go to the “System” tab on the left hand menu and change your password there.

The next step is to configure your miner to point it to the Antminer pool. For this we will go to the “Settings” section, but first we will get the configuration information from Antpool in the next section.

## 4. Start Mining: Connecting to Antpool

![](4.png)

To get the configuration information from Antpool to connect your miner to that mining pool, you need to go to https://antpool.com and register.

Once you are on your account select “ETC” as the mining pool you want to work for by opening the dropdown menu on the top right and clicking on Ethereum Classic.

On the ETC mining page, you will see the three pool addresses listed below:

stratum+tcp://stratum-etc.antpool.com:8008
stratum+tcp://stratum-etc.antpool.com:443
stratum+tcp://stratum-etc.antpool.com:25

You will have to copy each address and paste them in the corresponding section on your Antpool interface. For this open your Antpool app again and go to “Settings”.

![](5.png)

In the settings page on the Antminer interface, you will see the form to enter the three URLs to mine through Antpool: Pool 1, Pool 2, and Pool 3.

In the “Mining Address” fields, enter the mining URLs that Antpool gave you one by one.

In the “Miner Name” field give a name to this miner you are configuring by entering your Antpool account ID followed by a dot and then a number you may give to this machine.

For example, in my case I named it “ETCPOW.11” where ETCPOW is my account ID on Antpool and 11 is the number I gave my miner.

In the “Password” field just enter 123, which is the usual password that these systems use.

Once you entered all the fields, then press “Save”.

Now you are ready to see the dashboard with your mining statistics.

## 5. Checking the Miner Statistics

![](6.png)

It is important to note that you need to wait for several minutes after you started mining to start seeing statistics on your Antminer and Antpool dashboards.

When you go to the Antminer dashboard again you will see the “Real time hashrate”, “Network status”, “Fan speed”, and “Miner temperature” metrics that should all be on “Normal”.

Below you will see a chart of the chain’s hashrate and on its left you will see your Antminer’s specific hasrate. If it’s between 3,600 and 4,000 MH/s, then it is a normal range as the target hashrate of this machine is 3,680 MH/s.

At the bottom of the page you should see your miner has two mining boards with a theoretical capacity of 1,850 MH/s each.

When you go to the “Pool” section you must see that the pool is accepting your work. Todo know this, see if under the column “Accepted’ there are a number of works accepted by Antpool. If so, then your machine is working fine and connected to the pool.

![](7.png)

When you go to your account on Antpool, you will see a parallel dashboard to the one on your miner.

On your account you will see a chart that should show that the pool is receiving your work, and also statistics of your hashrate.

When you go to the “Dashboard” tab, you will find the hashrate of your worker, how many workers you have in this account on this pool, and your total earnings.

## 6. We Wish You Success!

We wish you success and happy ETC mining!

You may watch this whole explanation in video form here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=eHrz-GRnbNNkVNGG&amp;list=PLIzptAKK7iDTX6Clfd7KoD6W7gSGpb9hv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

**Thank you for reading this article!**

To learn more about ETC please go to: https://ethereumclassic.org
