import styled from "styled-components";

type ContainerProps = {
    done: boolean
}

export const Container = styled.div(({done}: ContainerProps)=>(
    `
    display: flex;
    background-color: #ff698f;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    label{
        color: #FFF;
        text-decoration: ${done ? 'line-through ': 'initial'} ;
    }

    input{
        width: 25px;
        height: 25px;
        margin: 5px;
    }
`
))