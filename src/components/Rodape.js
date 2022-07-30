import styled from "styled-components"
function Rodape({ title, img, weekday, date}) {

    function infoRodape() {

        if (weekday === undefined) {
            return (
                <h2>{title}</h2>
            )
        } else {
            return (
                <>
                    <h2>{title}</h2>
                    <h2>{weekday} - {date}</h2>
                </>
            )
        }

    }




    return (
        <Footer>
            <Poster>
                <img src={img} alt="Vidro - 2019" />
            </Poster>
            <InfosFooter>
                {infoRodape()}
            </InfosFooter>
        </Footer>
    )
}


export default Rodape;

const Footer = styled.div`
width: 100%;
height: 117px;
left: 0px;
bottom: 0px;
background-color: #DFE6ED;
border: 1px solid #9EADBA;
display: flex;
align-items: center;
position: fixed;
bottom: 0px;
padding: 14px;

`;

const Poster = styled.div`
width: 64px;
height: 89px;
left: 10px;
bottom: 14px;
background-color: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
display: flex;
justify-content: center;
align-items: center;
img {
    width: 48px;
    height: 72px;
    object-fit: cover;
}
`;

const InfosFooter = styled.div`
margin-left: 14px;
h2 {
    font-size: 26px;
    line-height: 30px;
    color: #293845;
}

`;