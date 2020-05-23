import styled from 'styled-components';

const CardGrid = styled.section`
    width: 100%;
    height: auto;
    margin: 80px 0;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(2, 1fr);
`;

const Card = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    background-color: var(--oc-gray-9);
    border-radius: 4px;
    :hover{
        background-color: var(--oc-gray-8);
    }
`;

const CardImg = styled.img`
    border-radius: 4px 4px 0px 0px;
    height: 320px;
`;

const CardBody = styled.div`
    padding: 16px 24px;
`

const CardTitle = styled.h1`
    font-family: 'Jetbrains Mono Regular';
    font-size: 18px;
    text-align: left;
    color: white;
`;

const CardDescription = styled.p`
    width: 100%;
    font-size: 14px;
    color:var(--oc-gray-5);
`;

const Counter = styled.span`
    background-color: #4c6ef5;
    color:white;
    font-family: 'Jetbrains Mono Bold';
    font-size: 12px;
    padding: 2px 4px;
    margin-right: 4px;
    border-radius: 1px;
`

export {CardGrid,Card,CardBody,CardImg,CardTitle,CardDescription,Counter};