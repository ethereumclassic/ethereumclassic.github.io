import React from 'react';

import Grid from '~components/grid';
import Card from '~components/card';
import LinkGroup from '~components/linkGroup';

const resourcesCommmunity = () => {
  return (
    <>
      <section>
        <h2>Community Resources</h2>
      </section>
      <Grid className="semi" itemWidth={380}>
        <Card title="Github Repos">
          <LinkGroup
            items={[
              {
                text: 'ETC (general)',
                link: 'https://github.com/ethereumclassic/'
              },
              {
                text: 'IOHK',
                link: 'https://github.com/input-output-hk/mantis'
              },
              {
                text: 'ETC Cooperative',
                link: 'https://github.com/ethereum-classic-cooperative/'
              },
              { text: 'ETCDEV', link: 'https://github.com/ETCDEVTeam/' },
              {
                text: 'Ethereum Commonwealth',
                link: 'https://github.com/EthereumCommonwealth/'
              }
            ]}
          />
        </Card>
        <Card title="Twitter">
          <LinkGroup
            items={[
              {
                text: '@Eth_Classic',
                link: 'http://twitter.com/Eth_Classic'
              },
              {
                text: '@ClassicIsComing',
                link: 'https://twitter.com/ClassicIsComing'
              },
              { text: '@ETCDEV', link: 'https://twitter.com/etcdev' },
              {
                text: '@ETCCooperative',
                link: 'https://twitter.com/ETCCooperative'
              },
              { text: '@ETCChina', link: 'https://twitter.com/ETCChina' },
              { text: '@ETCJapan', link: 'https://twitter.com/ETCJapan' },
              { text: '@ETCKorea', link: 'https://twitter.com/ETCKorea' },
              {
                text: '@ETC_Philippines',
                link: 'https://twitter.com/ETC_Philippines'
              }
            ]}
          />
        </Card>
        <Card title="Chat Rooms">
          <LinkGroup
            items={[
              { text: 'Discord', link: 'https://discord.gg/bMGuZsA' },
              {
                text: 'Matrix (Dev-focused)',
                link: 'https://riot.im/app/#/room/#ecips:matrix.org'
              },
              {
                text: 'Kakao Talk (Korea)',
                link: 'https://open.kakao.com/o/gi4uNJ1'
              }
            ]}
          />
          <LinkGroup
            title="Telegram"
            items={[
              { text: 'ETC Arabic', link: 'https://t.me/EtherClassic_Ar' },
              {
                text: 'Eth Classic (English)',
                link: 'http://telegram.me/ethclassic'
              },
              { text: 'ETC Chat (English)', link: 'http://t.me/etcchat' },
              { text: 'ETC China', link: 'http://t.me/etczh' },
              { text: 'ETC Español', link: 'https://t.me/ethclassicesp' },
              { text: 'ETC Germany', link: 'https://t.me/EtherCalssic_de' },
              {
                text: 'ETC Japan',
                link: 'https://t.me/joinchat/GqAqlRC9hD5bVy65DuHcfg'
              },
              { text: 'ETC Russia', link: 'http://telegram.me/etcrussia' },
              { text: 'ETC RU', link: 'http://telegram.me/etcru' },
              { text: 'ETC Vietnam', link: 'https://t.me/ETC_Vietnam' }
            ]}
          />
        </Card>
      </Grid>
    </>
  );
};

export default resourcesCommmunity;
