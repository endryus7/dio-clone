import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 7.5rem;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

export const Column = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    gap: 2rem;
`

export const Wrapper = styled.div `
    max-width: 360px;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h2 `
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 700;
    font-style: normal;
    color: #FFFFFF;
`

export const TitleLogin = styled.p `
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 700;
    font-style: normal;
`

export const SubtitleLogin = styled.p `
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.5rem;  
    margin: .5rem 0;
`

export const LoginText = styled.p `
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
`

export const TextLogin = styled.a `
    display: inline;
    text-decoration: none;    
    color: #23DD7A;

    &:hover {
        cursor: pointer;
    }

`