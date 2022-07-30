import styled from "styled-components";


function Topo() {
    return (
        <Header>
            <h2>CINEFLEX</h2>
        </Header>

    )
}

export default Topo;


const Header = styled.div`
width: 100%;
height: 67px;
background-color: #C3CFD9;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
h2 {
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
}

`;