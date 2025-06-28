import React from 'react'
import logo from '../../assets/logo-dio.png';
import { Link } from 'react-router-dom';

import { Button } from '../Button';

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
      <Container>
          <Row>
            <img src={logo} alt="Logo da dio"/>
            {autenticado ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
              {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/111534901?s=400&u=3b64018efc7dcf5d68f677085d7bb3880d7e5dae&v=4"/>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Link to="/login">
                  <Button title="Entrar"/>
                </Link>
                <Link to="/login">
                  <Button title="Cadastrar"/>
                </Link>
              </>)}
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }