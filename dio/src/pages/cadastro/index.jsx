import { 
  Container, 
  Column, 
  Title, 
  TitleLogin, 
  SubtitleLogin,
  Wrapper,
  LoginText,
  TextLogin 
} from './styles';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

const Cadastro = () => {
  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate('/login')
  };

  const { control } = useForm();

  return (
    <Container>
      <Column>
        <Wrapper>
          <Title>
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Wrapper>
      </Column>
      <Column>
        <Wrapper>
          <TitleLogin>
            Comece agora grátis
          </TitleLogin>
          <SubtitleLogin>
            Crie sua conta e make the change._
          </SubtitleLogin>
        </Wrapper>
        <Wrapper>
          <form>
            <Input 
              name="name" 
              placeholder="Nome completo" 
              control={control}
              leftIcon={<MdPerson />}
            />
            <Input 
              name="email" 
              placeholder="E-mail" 
              control={control}
              leftIcon={<MdEmail />}
            />
            <Input 
              name="password" 
              placeholder="Password" 
              control={control}
              leftIcon={<MdLock />}
              type="password"
            />
            <Button title="Criar minha conta" variant="secondary" type="submit"/>
          </form>
         
        </Wrapper>
        <Wrapper>
          <SubtitleLogin>
            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
          </SubtitleLogin>
          <LoginText>
            Já tenho conta. <TextLogin onClick={handleClickSignIn}>Fazer login</TextLogin>
          </LoginText>
        </Wrapper>
      </Column>     
    </Container>
  )
}

export default Cadastro;