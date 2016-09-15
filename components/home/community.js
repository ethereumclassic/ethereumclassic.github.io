import React, { Component } from 'react'

import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'

import IconUsers from 'react-icons/lib/ti/group-outline'
import IconDevelopers from 'react-icons/lib/ti/code-outline'
import IconMiners from 'react-icons/lib/ti/spanner-outline'
import IconTraders from 'react-icons/lib/ti/chart-line-outline'

import users from '../../contents/community/users.md'
import developers from '../../contents/community/developers.md'
import miners from '../../contents/community/miners.md'
import traders from '../../contents/community/traders.md'

import ContentBlock from '../content-block'

export default class Community extends Component {
  render () {
    return (
      <Container fluid className="green-gradient mui--text-light-secondary">
        <Container className="mui--text-center">
          <Row>
            <Col xs="12">
              <h1>Ethereum Classic Community</h1>
              <h3>Thousands of individuals united by the promise of immutability</h3>
            </Col>
          </Row>
          <Row className="justified-paragraphs big-icons padded">
            <Col md="6" lg="3">
              <ContentBlock
                Icon={IconUsers}
                title="Users"
                body={users}
                dropdown={{
                  title: 'Learn and Discuss',
                  items: [
                    { text: 'Separate your ETH/ETC', link: 'https://github.com/ethereumclassic/README/issues/3' },
                    { text: 'Read the Wiki', link: 'http://ethcwiki.org/' },
                    { text: 'Join the ETC Subreddit', link: 'http://reddit.com/r/EthereumClassic' },
                    { text: 'Join our Slack Channel', link: 'http://ethereumclassic.herokuapp.com' },
                    { text: 'Find local ETC Meetup', link: 'http://www.meetup.com/EthereumClassic' },
                    { text: 'Visit ETCtalk forums', link: 'https://ethereumclassictalk.org' },
                  ],
                }}
              />
            </Col>
            <Col md="6" lg="3">
              <ContentBlock
                Icon={IconDevelopers}
                title="Developers"
                body={developers}
                dropdown={{
                  title: 'Write Some Code',
                  items: [
                    { text: 'Volunteer', link: 'https://github.com/ethereumproject/volunteer' },
                  ],
                }}
              />
            </Col>
            <Col md="6" lg="3">
              <ContentBlock
                Icon={IconMiners}
                title="Miners"
                body={miners}
                dropdown={{
                  title: 'Join a Pool',
                  items: [
                    { link: 'http://etherx.com/pools', text: 'Compare ETC Pools' },
                    { link: 'http://ethc.epool.io', text: 'ethc.epool.io' },
                    { link: 'https://minergate.com', text: 'minergate.com' },
                    { link: 'https://etc.suprnova.cc', text: 'etc.suprnova.cc' },
                    { link: 'https://etcpool.io', text: 'etcpool.io' },
                    { link: 'https://etc.bw.com', text: 'etc.bw.com' },
                    { link: 'https://f2pool.com/help', text: 'f2pool.com/help' },
                    { link: 'http://ethc.coin-miners.info', text: 'ethc.coin-miners.info' },
                    { link: 'http://etc.digger.ws', text: 'etc.digger.ws' },
                    { link: 'http://yolo.ethclassic.faith', text: 'yolo.ethclassic.faith' },
                    { link: 'http://ethteam.com', text: 'ethteam.com' },
                    { link: 'http://etcmine.io', text: 'etcmine.io' },
                    { link: 'http://bdt.io/', text: 'btd.io' },
                    { link: 'http://etc.nanopool.org', text: 'etc.nanopool.org' },
                    { link: 'http://etc.gpuminer.ru', text: 'etc.gpuminer.ru' },
                    { link: 'http://ethclassic.tk', text: 'ethclassic.tk' },
                    { link: 'http://etc.altpool.net/', text: 'etc.altpool.net' },
                    { link: 'http://etc-pool.com', text: 'etc-pool.com' },
                    { link: 'https://ethereum-classic.miningpoolhub.com/', text: 'ethereum-classic.miningpoolhub.com' },
                    { link: 'http://etc-poolcrypto.org/', text: 'etc-poolcrypto.org' }
                  ],
                }}
              />
            </Col>
            <Col md="6" lg="3">
              <ContentBlock
                Icon={IconTraders}
                title="Investors"
                body={traders}
                dropdown={{
                  title: 'Trade ETC',
                  items: [
                    { link: 'https://bitfinex.com', text: 'Bitfinex ETC/BTC, ETC/USD ' },
                    { link: 'https://www.kraken.com', text: 'Kraken ETC/ETH, ETC/EUR, ETC/USD, ETC/XBT' },
                    { link: 'https://poloniex.com/exchange#btc_etc', text: 'Poloniex  ETC/BTC, ETC/ETH, ETC/USDT' },
                    { link: 'https://bittrex.com/Market/Index?MarketName=BTC-ETC', text: 'Bittrex' },
                    { link: 'http://yunbi.com/', text: 'Yunbi' },
                    { link: 'https://trans.chbtc.com/etc', text: 'CHBTC' },
                    { link: 'https://korbit.co.kr/etc_market', text: 'Korbit' },
                    { link: 'https://bter.com/trade/etc_btc', text: 'BTER' },
                    { link: 'https://yobit.net/en/trade/ETC/BTC', text: 'Yobit' },
                    { link: 'https://coinexchange.io/market/ETC/BTC', text: 'Coinexchange' },
                    { link: 'https://c-cex.com/?p=etc-btc', text: 'C-CEX' },
                    { link: 'https://shapeshift.io', text: 'Shapeshift.io' },
                    { link: 'https://changelly.com/exchange/BTC/ETC/1', text: 'Changelly' },
                    { link: 'https://www.bitmex.com/app/trade/ETC24H', text: 'BitMex futures contract ETC' },
                    { link: 'http://bitsquare.io', text: 'BitSquare' },
                  ],
                }}
              />
            </Col>
          </Row>
          <Row className="padded">
            <Col xs="12">
              <h4>Want to Learn More?</h4>
              <p>
                Whatever your interest,{' '}
                <a target="_blank" href="http://ethereumclassic.herokuapp.com/">
                  join the slack group
                </a>
                , and help us continue the <b>original</b> Ethereum vision!
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}
