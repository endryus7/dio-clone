import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Endryus Montezano" image="https://avatars.githubusercontent.com/u/111534901?s=400&u=3b64018efc7dcf5d68f677085d7bb3880d7e5dae&v=4" percentual={25}/>
                <UserInfo nome="Endryus Montezano" image="https://avatars.githubusercontent.com/u/111534901?s=400&u=3b64018efc7dcf5d68f677085d7bb3880d7e5dae&v=4" percentual={25}/>
                <UserInfo nome="Endryus Montezano" image="https://avatars.githubusercontent.com/u/111534901?s=400&u=3b64018efc7dcf5d68f677085d7bb3880d7e5dae&v=4" percentual={25}/>
                <UserInfo nome="Endryus Montezano" image="https://avatars.githubusercontent.com/u/111534901?s=400&u=3b64018efc7dcf5d68f677085d7bb3880d7e5dae&v=4" percentual={25}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 