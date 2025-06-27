import React from 'react';
import  BannerImage  from '../../assets/banner.png'

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Title, TitleHighLight, TextContent } from './styles'

const Home = () => {
    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                        Implemente
                        <br />
                    </TitleHighLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras no mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={() => null} />
            </div>
            <div>
                <img src={BannerImage} alt="Imagem principal" />
            </div>
        </Container>
    </>)
}

export { Home }