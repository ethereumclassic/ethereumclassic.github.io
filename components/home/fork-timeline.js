import React, { Component } from 'react'

import Container from 'muicss/lib/react/container'
import ArrowUp from 'react-icons/lib/ti/arrow-up-outline'

import TimelineItem from './timeline-item'

// icons
import IconEthereum from 'react-icons/lib/fa/sort'
import IconDaoCreated from 'react-icons/lib/fa/file-code-o'
import IconDaoCrowdsale from 'react-icons/lib/fa/bullhorn'
import IconMoratorium from 'react-icons/lib/fa/crosshairs'
import IconSecurityAudit from 'react-icons/lib/fa/keyboard-o'
import IconCrodsaleEnds from 'react-icons/lib/fa/dollar'
import IconRentryBug from 'react-icons/lib/fa/bug'
import IconNoFundsAtRisk from 'react-icons/lib/fa/thumbs-up'
import IconDaoHacked from 'react-icons/lib/fa/times-circle'
import IconMarketPanic from 'react-icons/lib/fa/area-chart'
import IconCountdown from 'react-icons/lib/fa/hourglass-1'
import IconRhg from 'react-icons/lib/fa/user-secret'
import IconSoftFork from 'react-icons/lib/fa/wrench'
import IconSoftForkFail from 'react-icons/lib/fa/calendar-times-o'
import IconHardForkAnnounced from 'react-icons/lib/fa/exclamation-triangle'
import IconDebate from 'react-icons/lib/fa/comments'
import IconLastMinute from 'react-icons/lib/fa/clock-o'
import IconHardForkHappens from 'react-icons/lib/fa/code-fork'
import IconMissionAccomplished from 'react-icons/lib/fa/glass'
import IconClassicBorn from 'react-icons/lib/fa/rocket'
import IconPoloniexLists from 'react-icons/lib/fa/line-chart'
import IconBadTimes from 'react-icons/lib/fa/frown-o'
import IconEthClassic from 'react-icons/lib/fa/group'
import IconRhgDump from 'react-icons/lib/fa/fire'
import IconClassicRebuild from 'react-icons/lib/fa/flag'
import IconTbc from 'react-icons/lib/fa/ellipsis-h'

export default class ForkTimeline extends Component {
  render () {
    return (
      <Container fluid className="dark-grey-gradient" id="fork-timeline">
        <Container>
          <h2>
            Ethereum Classic Timeline{' '}
            <small className="mui--text-dark-secondary">
              The Events that Created ETC
            </small>
          </h2>
        </Container>
        <div className="fork-timeline-scroller">
          <Container className="fork-timeline">
            <TimelineItem
              className="purple"
              link="https://blog.ethereum.org/2015/07/30/ethereum-launches/"
              Icon={IconEthereum} date="July 30 2015" title="Ethereum Launches"
              text="Vitalik Buterin and The Ethereum Foundation create the first blockchain-based turing-complete smart contract platform"
            />
            <TimelineItem
              link="https://blog.slock.it/deja-vu-dao-smart-contracts-audit-results-d26bc088e32e"
              Icon={IconDaoCreated} date="April 5 2016" title="Slock.it Creates TheDAO"
              text="Slock.it construct TheDAO Ethereum Contract; a security audit is completed by Dejavu"
            />
            <TimelineItem
              link="https://blog.slock.it/the-dao-creation-is-now-live-2270fd23affc"
              Icon={IconDaoCrowdsale} date="April 30" title="TheDAO Crowdsale Begins"
              text="TheDAO smart contract is deployed; members of the public send it value in return for DAO tokens"
            />
            <TimelineItem
              className="orange"
              link="https://blog.slock.it/dao-security-a-proposal-to-guarantee-the-integrity-of-the-dao-3473899ace9d"
              Icon={IconSecurityAudit} date="May 26" title="Security Proposal"
              text="Slock.it announce a $1.5 Million USD proposal, paid in Ether by the crowdfund, 'to guarantee the integrity of The DAO'"
            />
            <TimelineItem
              className="orange"
              link="http://hackingdistributed.com/2016/05/27/dao-call-for-moratorium/"
              Icon={IconMoratorium} date="May 27" title="Moratorium Called"
              text="On the last day of the crowdsale, DAO curator Vlad Zamfir calls for a moratorium on TheDAO, citing many game-theoretical security issues"
            />
            <TimelineItem
              link="http://slacknation.github.io/medium/8/8.html"
              Icon={IconCrodsaleEnds} date="May 27" title="TheDAO Crowdsale Ends"
              text="The crowdsale completes to become the world's largest and raising an incredible $150 Million USD"
            />
            <TimelineItem
              className="orange"
              link="http://vessenes.com/more-ethereum-attacks-race-to-empty-is-the-real-deal/"
              Icon={IconRentryBug} date="Jun 9" title="Recursive Call Bug Discovered"
              text="Peter Vessenes publicly discloses the existence of a critical security vulnerability overlooked in many Solidiy contracts"
            />
            <TimelineItem
              link="https://blog.slock.it/no-dao-funds-at-risk-following-the-ethereum-smart-contract-recursive-call-bug-discovery-29f482d348b"
              Icon={IconNoFundsAtRisk} date="Jun 12" title="'No Funds at Risk'"
              text="Stephan Tual publicly claims that TheDAO funds are safe despite the newly-discovered critical security flaw"
            />
            <TimelineItem
              className="red"
              link="http://slacknation.github.io/medium/10/10.html"
              Icon={IconDaoHacked} date="Jun 17, 03:40" title="TheDAO is Hacked"
              text="Ether is slowly and silently drained from TheDAO as the re-entry bug is applied"
            />
            <TimelineItem
              className="red"
              link="https://cointelegraph.com/news/dao-potentially-hacked-millions-of-ether-may-be-stolen-griff-green-says"
              Icon={IconMarketPanic} date="Jun 17, 07:40" title="Panic Hits the Markets"
              text="The price of Ether is slashed in half as Griff Green announces that TheDAO has been hacked"
            />
            <TimelineItem
              className="blue"
              link="https://blog.ethereum.org/2016/06/17/critical-update-re-dao-vulnerability/"
              Icon={IconCountdown} date="Jun 17" title="The Countdown Beings"
              text="TheDAO's splitting mechanism gives around a month for a solution to be found that recovers the funds; Foundation and community developers race to implement a soft fork"
            />
            <TimelineItem
              className="white"
              link="https://www.reddit.com/r/ethereum/comments/4p7mhc/update_on_the_white_hat_attack/"
              Icon={IconRhg} date="Jun 21" title="Robin Hood Group Announced"
              text="A group of 'white-hat' hackers secure 70% of TheDAO funds but protocol-level action is required to save the remaining 30% split by the hacker"
            />
            <TimelineItem
              className="blue"
              link="https://blog.ethereum.org/2016/06/24/dao-wars-youre-voice-soft-fork-dilemma/"
              Icon={IconSoftFork} date="Jun 24" title="DAO Wars: Soft Fork Vote"
              text="The Ethereum Foundation releases a 'Soft Fork' client to censor transactions coming from the hacker; mining pools vote to enable it by lowering gas limit"
            />
            <TimelineItem
              className="red"
              link="https://blog.ethereum.org/2016/06/28/security-alert-dos-vulnerability-in-the-soft-fork/"
              Icon={IconSoftForkFail} date="Jun 28" title="Soft Fork Vulnerability"
              text="Critical Denial of Service flaws are found in the Soft Fork implementation, miners quicky decide not to use it"
            />
            <TimelineItem
              Icon={IconDebate} date="Jun 28 - Jul 15" title="Hard Fork Debate"
              text="Many days of intense arguing goes on in the Ethereum community about the pros and cons of implementing a Hard Fork"
            />
            <TimelineItem
              className="blue"
              link="https://blog.slock.it/hard-fork-specification-24b889e70703"
              Icon={IconHardForkAnnounced} date="Jul 15" title="Hard Fork Spec Announced"
              text="The only remaining option is a controversial Hard Fork. A Specification is determined and announced by Slock.it and Ethereum Foundation members"
            />
            <TimelineItem
              className="orange"
              link="https://blog.ethereum.org/2016/07/15/to-fork-or-not-to-fork/"
              Icon={IconLastMinute} date="Jul 15" title="Last Minute Carbonvote"
              text="With 12 hours notice, The Ethereum Foundation use a controversial third party 'coin vote' to determine that the Hard Fork should be turned on by default; consensus is declared and an updated client is released"
            />
            <TimelineItem
              className="blue"
              link="https://blog.ethereum.org/2016/07/20/hard-fork-completed/"
              Icon={IconHardForkHappens} date="Jul 20" title="DAO Bailout Hard Fork"
              text="With around 80% of nodes updating to the new client, the community nervously await the arrival of the Hard Fork activation block 1920000"
            />
            <TimelineItem
              className="purple"
              link="https://twitter.com/initc3org/status/758000698881613824"
              Icon={IconMissionAccomplished} date="Block 1920000" title="'Mission Accomplished!'"
              text="The community lets out a sigh of relief as the Hard Fork code is succesfully implemented with no obvious flaws; champagne corks are popped all over the globe"
            />
            <TimelineItem
              className="green"
              link="https://gastracker.io/block/0x94365e3a8c0b35089c1d1195081fe7489b528a84b22199c916180db8b28ade7f"
              Icon={IconClassicBorn} date="Block 192001" title="Ethereum Classic is Born"
              text="With predictions of the original non-forked chain to disappear within hours, many are surprised to find that miners continue mining blocks and OTC trading of the original chain tokens gives them value"
            />
            <TimelineItem
              className="green"
              link="https://twitter.com/poloniex/status/757068619234803712"
              Icon={IconPoloniexLists} date="Jul 23" title="Poloniex Lists ETC"
              text="The largest Ethereum exchange lists 'ETC' - Ethereum Classic; many exchanges quickly follow suit, ETC price the peaks to 1/3 of ETH's"
            />
            <TimelineItem
              className="red"
              Icon={IconBadTimes} date="Jul 23 Onwards" title="Community in Disarray"
              text="Flame wars begin in the once peaceful /r/Ethereum and /r/ethtrader subreddits and economically-charged vitriolic spats begin to take hold of the community as it comes to terms with the split"
            />
            <TimelineItem
              className="green"
              link="https://www.reddit.com/r/EthereumClassic/"
              Icon={IconEthClassic} date="Jul 24" title="Ethereum Classic Community"
              text="The Ethereum Classic community begins to branch off from the forked-chain subreddits and form its own communication channels, including /r/EthereumClassic, Slack and Telegram"
            />
            <TimelineItem
              className="white"
              link="https://www.reddit.com/r/EthereumClassic/comments/4x1157/from_whitehat_to_poloniex/"
              Icon={IconRhgDump} date="Aug 10" title="RHG Strikes Back"
              text="The Robin Hood Group attempts to dump a large quantity of stolen ETC on the market. Poloniex freezes the funds. Uncertainty reaches an all time high."
            />
            <TimelineItem
              className="green"
              Icon={IconClassicRebuild} date="Aug 15" title="Classic Rebuilds"
              text="The Ethereum Classic community begins to rally behind a stabilizing ETC price by rebuilding on the Classic network; this website is created, groups are formed, new ideas begin to surface"
            />
            <TimelineItem
              className="white"
              link="https://bitcoinmagazine.com/articles/millions-of-dollars-worth-of-etc-may-soon-be-dumped-on-the-market-1472567361"
              Icon={IconMarketPanic} date="Aug 31" title="DAO ETC unlocked"
              text="Millions of previously locked or frozen ETC become available to DAO token holders and DAO attacker. Despite predictions of doom and gloom, ETC price holds remarkably well in face of huge dumps"
            />
            <TimelineItem
              className="red"
              link="https://www.reddit.com/r/EthereumClassic/comments/599kmf/etc_community_successfully_implemented_gasreprice/"
              Icon={IconHardForkAnnounced} date="Oct 25" title="Attacks and Upgrades"
              text="Both Ethereums are hit with non-stop network attacks; ETC devs quickly ensure smooth and uncontentious network upgrade to patch exploited vulnerabilities"
            />
            <TimelineItem
              className="green"
              link="https://www.reddit.com/r/EthereumClassic/comments/5cm582/monetary_policy_update/"
              Icon={IconCrodsaleEnds} date="Nov 1" title="ETC Monetary Policy"
              text="Classic community starts debating ETC monetary policy and emission schedule, as a way to align interests of platform users, miners, investors and developers"
            />
            <TimelineItem
              Icon={IconTbc} title="To Be Continued"
              text="As both communities begin to refocus efforts on development, despite an uncertain future, we reflect on mistakes of the past and look ahead at future potentials..."
            />
          </Container>
        </div>
        <Container>
          <br />
          <div className="mui--text-dark-hint">
            <ArrowUp size={24} /> Scroll to Progress
          </div>
        </Container>
      </Container>
    )
  }
}
