import { useNavigate } from "react-router-dom";
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input'; 
import { api } from '../../services/api';
import { useForm } from "react-hook-form";

import { Container, Column, Title, TitleLogin, SubtitleLogin, Wrapper, LoginText, TextLogin
} from './styles';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
  nome: yup.string().required('Campo obrigatório'),
  email: yup.string().email('O email não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'A senha deve ter no mínimo 3 caracteres').required('Campo obrigatório')
}).required();

const Cadastro = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login');
  };

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  console.log('Form isValid:', isValid, 'Errors:', errors);

  const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            
            if(data.length === 1){
                navigate('/feed') 
            } else {
                alert('Email ou senha inválido')
            }
        }catch{
            //alert('Houve um erro, tente novamente.')
        }
    };

  return (
    <>
      <Header />
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name='nome' errorMessage={errors?.nome?.message} control={control} placeholder="EmaiNome completo"/>

              <Input name='email' errorMessage={errors?.email?.message} control={control} placeholder="Email"/>

              <Input name='password' errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password"/>

              <Button title="Criar minha conta" variant="secondary" type="submit" />
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
    </>
  );
};

export { Cadastro };