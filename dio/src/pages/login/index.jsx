import React from 'react';

import { useNavigate } from 'react-router-dom'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from '../../services/api'

import { Colum, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles'

const schema = yup.object({
  email: yup.string().email('email não é valido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório')
}).required();

const Login = () => {

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    console.log(isValid, errors);

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

    const navigate = useNavigate();

    return (<>
        <Header />
        <Container>
            <Colum>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Colum>
            <Colum>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name='email'
                            errorMessage={errors?.email?.message}
                            control={control} placeholder="Email"/>
                        <Input name='password'
                            errorMessage={errors?.password?.message}
                            control={control} placeholder="Senha" type="password"/>
                        <Button title="Entrar" variant='secondary'  type="submit"></Button>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Colum>
        </Container>
    </>)
}

export { Login }