import React, { Component } from 'react'

import Container from 'muicss/lib/react/container'
import ArrowUp from 'react-icons/lib/ti/arrow-up-outline'

import TimelineItem from './timeline-item'

// icons
import IconEthereum from 'react-icons/lib/fa/sort'
import IconDaoCreated from 'react-icons/lib/fa/file-code-o'
import IconDaoCrowdsale from 'react-icons/lib/fa/bullhorn'
import IconMoratorium from 'react-icons/lib/fa/crosshairs'
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
      <Container fluid className="dark-grey-gradient">
        <Container>
          <h2>
            Hard Fork Timeline{' '}
            <small className="mui--text-dark-secondary">
              The Events that Created Classic
            </small>
          </h2>
        </Container>
        <div className="fork-timeline-scroller">
          <Container className="fork-timeline">
            <TimelineItem
              className="purple"
              Icon={IconEthereum} date="Jan 31st" title="Ethereum Launches"
              text="Vitalik Buterin and The Ethereum Foundation create the first blockchain-based turing-complete smart contract platform"
            />
            <TimelineItem
              Icon={IconDaoCreated} date="Jan 31st" title="Slock.it Creates TheDAO"
              text="Christoph and Lefteris from Slock.it being constructing TheDAO Etheruem Contract; a security audit is compelted by Dejavu"
            />
            <TimelineItem
              Icon={IconDaoCrowdsale} date="Jan 31st" title="TheDAO Crowdsale Begins"
              text="TheDAO smart contract is deployed; members of the public send it value in return for DAO tokens"
            />
            <TimelineItem
              className="orange"
              Icon={IconMoratorium} date="Jan 31st" title="Moratorium Called"
              text="On the last day of the crowdsale, Vlad Zamfir calls for a moratorium on TheDAO, citing many game-theoritcal security issues"
            />
            <TimelineItem
              Icon={IconCrodsaleEnds} date="Jan 31st" title="TheDAO Crowdsale Ends"
              text="The crowdsale completes, breaking many world records and raising an incredible $150 Million USD"
            />
            <TimelineItem
              className="orange"
              Icon={IconRentryBug} date="Jan 31st" title="Recursive Call Bug Discovered"
              text="Bla blah TODO; MakerDAO drain their own contracts."
            />
            <TimelineItem
              Icon={IconNoFundsAtRisk} date="Jan 31st" title="'No Funds at Risk'"
              text="Stephan Taul publicly claims that TheDAO funds are safe despite the newly-discoverd critical security flaw"
            />
            <TimelineItem
              className="red"
              Icon={IconDaoHacked} date="Jan 31st" title="TheDAO is Hacked"
              text="Ether is slowly and silently drained from TheDAO as the re-entry bug is applied"
            />
            <TimelineItem
              className="red"
              Icon={IconMarketPanic} date="Jan 31st" title="Panic Hits the Markets"
              text="The price of Ether is slashed in half as Griff Green announces that TheDAO has been hacked"
            />
            <TimelineItem
              Icon={IconCountdown} date="Jan 31st" title="The Countdown Beings"
              text="TheDAO's splitting mechanism gives around a month for a solution to be found that recovers the funds; Foundation and community developers race to implement"
            />
            <TimelineItem
              className="white"
              Icon={IconRhg} date="Jan 31st" title="Robin Hood Group Announced"
              text="A group of 'white-hat' hackers secure 70% of TheDAO funds but protocol-level action is required to save the remaining 30% split by the hacker"
            />
            <TimelineItem
              className="blue"
              Icon={IconSoftFork} date="Jan 31st" title="Soft Fork Announced"
              text="The Etherum Foundation releases a 'Soft Fork' client to censor transactions coming from the hacker; mining pools vote to enable it"
            />
            <TimelineItem
              className="red"
              Icon={IconSoftForkFail} date="Jan 31st" title="Soft Fork Fails"
              text="Critical Denial of Service flaws are found in the Soft Fork implementation, miners quicky decide not to use it"
            />
            <TimelineItem
              className="blue"
              Icon={IconHardForkAnnounced} date="Jan 31st" title="Hard Fork Announced"
              text="The only reamining option is a controversial Hard Fork. A Specification is determined and implemented by Slock.it and Ethereum Foundation"
            />
            <TimelineItem
              Icon={IconDebate} date="Jan 31st" title="Hard Fork Debate"
              text="Many days of intense arguing goes on in the Etheruem community about the pros and cons of the Hard Fork"
            />
            <TimelineItem
              Icon={IconLastMinute} date="Jan 31st" title="Last Minute Voting"
              text="With 20 hours notice, The Etherum Foundation use a controversial third party 'coin vote' to determine that the Hard Fork should be turned on by default; consensus is declaired and an updated client is released"
            />
            <TimelineItem
              className="blue"
              Icon={IconHardForkHappens} date="Block 192000" title="Ethereum Hard Forks"
              text="With around 80% of nodes updating to the new client, the community nervously await the arrival of the Hard Fork activation block"
            />
            <TimelineItem
              Icon={IconMissionAccomplished} date="Block 192000 + 1 second" title="Mission Accomplished!"
              text="The community lets out a sigh of releif as the Hard Fork code is succesfully implemented with no obvious flaws; champangne corks are popped all over the globe"
            />
            <TimelineItem
              className="green"
              Icon={IconClassicBorn} date="Block 192001" title="Ethereum Classic is Born"
              text="With predictions of the original non-forked chain to disappear within hours, many are surpised to find that miners continue mining blocks on the original chain at a lower hashrate"
            />
            <TimelineItem
              className="green"
              Icon={IconPoloniexLists} date="Block 192001" title="Poloniex Lists Classic"
              text="The largest Etherum exchange lists 'ETC' - Etheruem Classic; many exchanges quickly follow suit, ETC price the peaks to 1/3 of ETH's"
            />
            <TimelineItem
              className="red"
              Icon={IconBadTimes} date="Jan 20" title="Community in Disary"
              text="Flame wars begin in the once peacful /r/etherum and /r/ethtrader subreddits and economically-charged vitriolic spats being to take hold of the community as it comes to terms with the split"
            />
            <TimelineItem
              className="green"
              Icon={IconEthClassic} date="Jan 20" title="Classic Community"
              text="The Classic community begins to branch off from the forked-chain subreddits and form it's own communication channels, including /r/EtheruemClassic, Slack and Telegram"
            />
            <TimelineItem
              className="white"
              Icon={IconRhgDump} date="Jan 20" title="RHG Strikes Back"
              text="The Robin Hood Group attempts to dump a large quantity of stolen ETC on the market. Poloniex freezes the funds. Uncertainty reaches an all time high."
            />
            <TimelineItem
              className="green"
              Icon={IconClassicRebuild} date="Jan 20" title="Classic Rebuilds"
              text="The Etherum Classic community begins to rally behind a stabailizng ETC price by rebuilding on the Classic network; this website is created, groups are formed, new ideas being to surface"
            />
            <TimelineItem
              Icon={IconTbc} date="Jan 20" title="To Be Continued"
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
