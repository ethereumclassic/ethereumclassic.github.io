---
title: "Implicit Ethereum Classic Blockchain Information"
date: 2018-01-26
author: Christian Seberino
---

![](./1*NO9OzqP7jGt-lMgxqzPTkw.jpeg)

To the beginner, some necessary information may appear to be missing from the
Ethereum Classic (ETC) blockchain. This information is *implicitly* contained in
the blockchain which may lead to confusion.

### Examples

*Account Balances* - Regarding accounts, the blockchain specifies transfers
but not balances. They can nevertheless be determined by accounting for all the
transfers in all the blocks.

*Smart Contract Storage* - Regarding smart contracts, the blockchain specifies
machine codes and input data but not storage values. They can nevertheless be
determined by executing all the invocations on all the input data in all the
blocks.

*Transaction Sending Accounts* - With respect to sending accounts,
transactions contain digital signatures but not addresses. They can nevertheless
be determined from the digital signatures and transactions using the
mathematical properties of the signature algorithm.

*Transaction Gas Requirements* - The blockchain specifies the gas requirements
for certain *sets* of transactions. It does not specify the requirements for
every transaction separately. They can nevertheless be determined from the given
transaction set gas requirements.

*Average Mining Hash Rates* - The blockchain specifies mining block creation
times and mining difficulty parameters. It does not specify mining hash rates.
However, the mining hash algorithm and mining difficulty parameter are defined
such that:

&lt;H&gt; &cong; &lt;D&gt; / &lt;ΔT&gt;

where &lt;H&gt; is the average mining hash rate, &lt;D&gt; is the average mining difficulty parameter, and,
&lt;ΔT&gt; is the average creation time difference between consecutive
blocks. The averages can be taken over any desired number of blocks.

### Conclusion

![](./1*ELop_qM95rX3ELDGojmwbg.jpeg)

The ETC blockchain brilliantly encodes information in a *practical* manner. It
supports the ETC world computer without being unwieldy. Although it may at first
appear incomplete, it still includes all the essentials.

### Feedback

You can contact me by clicking any of these icons:

![](./0*eoFC6QOWZ--bCngK.png)

![](./0*i3CwTFEKUnKYHMf0.png)

![](./0*HQj6HSHxE7pkIBjk.png)

### Acknowledgements

I would like to thank IOHK (Input Output Hong Kong) for funding this effort.

### License

![](./0*hocpUZXBcjzNJeQ2.png)

This work is licensed under the Creative Commons Attribution ShareAlike 4.0
International License.
