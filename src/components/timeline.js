import React from 'react';

import TimelineItem from './timelineItem';

const ForkTimeline = ({ i18n }) => (
  <div className="fork-timeline">
    <div className="items">
      <TimelineItem
        className="purple"
        link="https://blog.ethereum.org/2015/07/30/ethereum-launches/"
        icon="fab fa-ethereum"
        title={i18n.ethereumLaunches}
        date={i18n.ethereumLaunchesDate}
        text={i18n.ethereumLaunchesText}
      />
      <TimelineItem
        link="https://blog.slock.it/deja-vu-dao-smart-contracts-audit-results-d26bc088e32e"
        icon="far fa-file-code"
        title={i18n.slockItCreatesTheDAO}
        date={i18n.slockItCreatesTheDAODate}
        text={i18n.slockItCreatesTheDAOText}
      />
      <TimelineItem
        link="https://blog.slock.it/the-dao-creation-is-now-live-2270fd23affc"
        icon="fas fa-bullhorn"
        title={i18n.theDAOCrowdsaleBegins}
        date={i18n.theDAOCrowdsaleBeginsDate}
        text={i18n.theDAOCrowdsaleBeginsText}
      />
      <TimelineItem
        className="orange"
        link="https://blog.slock.it/dao-security-a-proposal-to-guarantee-the-integrity-of-the-dao-3473899ace9d"
        icon="far fa-keyboard"
        title={i18n.securityProposal}
        date={i18n.securityProposalDate}
        text={i18n.securityProposalText}
      />
      <TimelineItem
        className="orange"
        link="http://hackingdistributed.com/2016/05/27/dao-call-for-moratorium/"
        icon="fas fa-crosshairs"
        title={i18n.moratoriumCalled}
        date={i18n.moratoriumCalledDate}
        text={i18n.moratoriumCalledText}
      />
      <TimelineItem
        link="http://slacknation.github.io/medium/8/8.html"
        icon="fas fa-funnel-dollar"
        title={i18n.theDAOCrowdsaleEnds}
        date={i18n.theDAOCrowdsaleEndsDate}
        text={i18n.theDAOCrowdsaleEndsText}
      />
      <TimelineItem
        className="orange"
        link="http://vessenes.com/more-ethereum-attacks-race-to-empty-is-the-real-deal/"
        icon="fas fa-bug"
        title={i18n.recursiveCallBugDiscovered}
        date={i18n.recursiveCallBugDiscoveredDate}
        text={i18n.recursiveCallBugDiscoveredText}
      />
      <TimelineItem
        link="https://blog.slock.it/no-dao-funds-at-risk-following-the-ethereum-smart-contract-recursive-call-bug-discovery-29f482d348b"
        icon="fas fa-thumbs-up"
        title={i18n.noFundsAtRisk}
        date={i18n.noFundsAtRiskDate}
        text={i18n.noFundsAtRiskText}
      />
      <TimelineItem
        className="red"
        link="http://slacknation.github.io/medium/10/10.html"
        icon="fas fa-times-circle"
        title={i18n.theDAOIsHacked}
        date={i18n.theDAOIsHackedDate}
        text={i18n.theDAOIsHackedText}
      />
      <TimelineItem
        className="red"
        link="https://cointelegraph.com/news/dao-potentially-hacked-millions-of-ether-may-be-stolen-griff-green-says"
        icon="fas fa-chart-area"
        title={i18n.panicHitsTheMarkets}
        date={i18n.panicHitsTheMarketsDate}
        text={i18n.panicHitsTheMarketsText}
      />
      <TimelineItem
        className="blue"
        link="https://blog.ethereum.org/2016/06/17/critical-update-re-dao-vulnerability/"
        icon="fas fa-hourglass-start"
        title={i18n.theCountdownBeings}
        date={i18n.theCountdownBeingsDate}
        text={i18n.theCountdownBeingsText}
      />
      <TimelineItem
        className="white"
        link="https://www.reddit.com/r/ethereum/comments/4p7mhc/update_on_the_white_hat_attack/"
        icon="fas fa-user-secret"
        title={i18n.robinHoodGroupAnnounced}
        date={i18n.robinHoodGroupAnnouncedDate}
        text={i18n.robinHoodGroupAnnouncedText}
      />
      <TimelineItem
        className="blue"
        link="https://blog.ethereum.org/2016/06/24/dao-wars-youre-voice-soft-fork-dilemma/"
        icon="fas fa-wrench"
        title={i18n.dAOWars}
        date={i18n.dAOWarsDate}
        text={i18n.dAOWarsText}
      />
      <TimelineItem
        className="red"
        link="https://blog.ethereum.org/2016/06/28/security-alert-dos-vulnerability-in-the-soft-fork/"
        icon="far fa-calendar-times"
        title={i18n.softForkVulnerability}
        date={i18n.softForkVulnerabilityDate}
        text={i18n.softForkVulnerabilityText}
      />
      <TimelineItem
        icon="fas fa-comments"
        title={i18n.hardForkDebate}
        date={i18n.hardForkDebateDate}
        text={i18n.hardForkDebateText}
      />
      <TimelineItem
        className="blue"
        link="https://blog.slock.it/hard-fork-specification-24b889e70703"
        icon="fas fa-exclamation-triangle"
        title={i18n.hardForkSpecAnnounced}
        date={i18n.hardForkSpecAnnouncedDate}
        text={i18n.hardForkSpecAnnouncedText}
      />
      <TimelineItem
        className="orange"
        link="https://blog.ethereum.org/2016/07/15/to-fork-or-not-to-fork/"
        icon="far fa-clock"
        title={i18n.lastMinuteCarbonvote}
        date={i18n.lastMinuteCarbonvoteDate}
        text={i18n.lastMinuteCarbonvoteText}
      />
      <TimelineItem
        className="blue"
        link="https://blog.ethereum.org/2016/07/20/hard-fork-completed/"
        icon="fas fa-code-branch"
        title={i18n.dAOBailoutHardFork}
        date={i18n.dAOBailoutHardForkDate}
        text={i18n.dAOBailoutHardForkText}
      />
      <TimelineItem
        className="purple"
        link="https://twitter.com/initc3org/status/758000698881613824"
        icon="fas fa-cocktail"
        title={i18n.missionAccomplished}
        date={i18n.missionAccomplishedDate}
        text={i18n.missionAccomplishedText}
      />
      <TimelineItem
        className="green"
        link="https://gastracker.io/block/0x94365e3a8c0b35089c1d1195081fe7489b528a84b22199c916180db8b28ade7f"
        icon="fas fa-rocket"
        title={i18n.ethereumClassicIsBorn}
        date={i18n.ethereumClassicIsBornDate}
        text={i18n.ethereumClassicIsBornText}
      />
      <TimelineItem
        className="green"
        link="https://twitter.com/poloniex/status/757068619234803712"
        icon="fas fa-chart-line"
        title={i18n.poloniexListsETC}
        date={i18n.poloniexListsETCDate}
        text={i18n.poloniexListsETCText}
      />
      <TimelineItem
        className="red"
        icon="far fa-frown"
        title={i18n.communityInDisarray}
        date={i18n.communityInDisarrayDate}
        text={i18n.communityInDisarrayText}
      />
      <TimelineItem
        className="green"
        link="https://www.reddit.com/r/EthereumClassic/"
        icon="fas fa-users"
        title={i18n.ethereumClassicCommunity}
        date={i18n.ethereumClassicCommunityDate}
        text={i18n.ethereumClassicCommunityText}
      />
      <TimelineItem
        className="white"
        link="https://www.reddit.com/r/EthereumClassic/comments/4x1157/from_whitehat_to_poloniex/"
        icon="fas fa-dumpster-fire"
        title={i18n.rHGStrikesBack}
        date={i18n.rHGStrikesBackDate}
        text={i18n.rHGStrikesBackText}
      />
      <TimelineItem
        className="green"
        icon="fas fa-flag"
        link="/blog/2016-08-13-declaration-of-independence"
        title={i18n.classicDeclaresIndependence}
        date={i18n.classicDeclaresIndependenceDate}
        text={i18n.classicDeclaresIndependenceText}
      />
      <TimelineItem
        className="green"
        icon="fas fa-cubes"
        title={i18n.classicRebuilds}
        date={i18n.classicRebuildsDate}
        text={i18n.classicRebuildsText}
      />
      <TimelineItem
        className="white"
        link="https://bitcoinmagazine.com/articles/millions-of-dollars-worth-of-etc-may-soon-be-dumped-on-the-market-1472567361"
        icon="fas fa-chart-area"
        title={i18n.dAOETCUnlocked}
        date={i18n.dAOETCUnlockedDate}
        text={i18n.dAOETCUnlockedText}
      />
      <TimelineItem
        className="red"
        link="https://www.reddit.com/r/EthereumClassic/comments/599kmf/etc_community_successfully_implemented_gasreprice/"
        icon="fas fa-exclamation-circle"
        title={i18n.attacksAndUpgrades}
        date={i18n.attacksAndUpgradesDate}
        text={i18n.attacksAndUpgradesText}
      />
      <TimelineItem
        className="green"
        link="https://www.reddit.com/r/EthereumClassic/comments/5cm582/monetary_policy_update/"
        icon="fas fa-coins"
        title={i18n.etcMonetaryPolicy}
        date={i18n.etcMonetaryPolicyDate}
        text={i18n.etcMonetaryPolicyText}
      />
      <TimelineItem
        className="white"
        link="https://ethereumclassic.github.io/blog/2016-12-12-TeamGrothendieck/"
        icon="fas fa-user-ninja"
        title={i18n.grothendieckTeam}
        date={i18n.grothendieckTeamDate}
        text={i18n.grothendieckTeamText}
      />
      <TimelineItem
        className="green"
        link="https://www.reddit.com/r/EthereumClassic/comments/5nt4qm/diehard_etc_protocol_upgrade_successful_nethash/"
        icon="far fa-calendar-plus"
        title={i18n.etcDiehardUpgrade}
        date={i18n.etcDiehardUpgradeDate}
        text={i18n.etcDiehardUpgradeText}
      />
      <TimelineItem
        className="white"
        link="https://www.etcdevteam.com/"
        icon="fas fa-user-ninja"
        title={i18n.etcDEVTeamAnnouncement}
        date={i18n.etcDEVTeamAnnouncementDate}
        text={i18n.etcDEVTeamAnnouncementText}
      />
      <TimelineItem
        className="green"
        link="https://www.etcdevteam.com/blog/articles/a-joint-statement-ecip1017.html"
        icon="fas fa-hand-holding-usd"
        title={i18n.monetaryPolicyAdopted}
        date={i18n.monetaryPolicyAdoptedDate}
        text={i18n.monetaryPolicyAdoptedText}
      />
      <TimelineItem
        className="green"
        link="https://grayscale.co/ethereum-classic-investment-thesis-march-2017/"
        icon="fas fa-user-tie"
        title={i18n.etcInvestmentFund}
        date={i18n.etcInvestmentFundDate}
        text={i18n.etcInvestmentFundText}
      />
      <TimelineItem title={i18n.toBeContinued} text={i18n.toBeContinuedText} />
    </div>
    <div className="scroll-info">
      <i className="fas fa-arrows-alt-h" />
      {` ${i18n.helperText}`}
    </div>
  </div>
);

export default ForkTimeline;
