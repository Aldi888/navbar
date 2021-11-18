import styled from "styled-components";


export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
    color: #ffffff;
`;
export const Container = styled.div`
    background-color: #214184;
    color: #282c34;
    min-height: 50vh;
    text-align: center;
    margin-bottom: 30px;
    border-radius: 11px;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;

export const Blocklist = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 28px 38px 38px 38px;
font-size: 15px;
border-radius: 10px;
margin: 0 20px;
background-color: #4374b7;

`;

export const Btn = styled.button `
font: inherit;
padding: 0.5rem 1.5rem;
cursor: pointer;
border-radius: 4px;
background-color: #800040;
color: white;
border: 1px solid #800040;
margin: 0 1rem;

`;

export default styled;