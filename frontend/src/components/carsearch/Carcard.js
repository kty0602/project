import styled from "styled-components";
import palette from "../../lib/styles/palette";

const CarcardBlock = styled.div`
  border: 1px solid ${palette.gray[4]};
  border-radius: 20px;
  width: 200px;
  height: 20rem;
  margin: 1rem;
  img {
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    margin: 0 auto;
    width: 100%;
    height: 35%;
  }
`;

const CardTextForm = styled.div`
  width: 100%;
  height: 65%;
  padding: 0.5rem;
  .name {
    font-size: 18px;
    font-weight: 800;
    height: 40%;
  }
  .ex {
    font-size: 12px;
  }
`;

const Carcard = ({ carData, sendTrend }) => {
  return (
    <CarcardBlock>
      <a href={`${carData.link}`} target="_blank" rel="noreferrer" onClick={() => sendTrend(carData.cdno)}><img src={`${carData.img}`} alt="car" /></a>
      <CardTextForm>
        <div className="name">
          <a href={`${carData.link}`} target="_blank" rel="noreferrer" onClick={() => sendTrend(carData.cdno)}>{carData.model}</a>
        </div>
        <hr />
        <a href={`${carData.link}`} target="_blank" rel="noreferrer" onClick={() => sendTrend(carData.cdno)}>
          <div>
            {carData.year}년 <br />
            {carData.km} | {carData.region}
            <br />
            {carData.price}
          </div>
        </a>
      </CardTextForm>
    </CarcardBlock>
  );
};

export default Carcard;
