import styled from "styled-components";

const Select = styled.select`
   width: 150px; 
   margin-left: 120px;
   text-align: center;
   font-size: 20px;
   padding: 5px;
   border-radius: 5px;
   border: 1px solid lightgray;
   background-color: white;
`;

const BoardComboBox = (props) => {
  return (
    <Select onChange={(e) => props.setMenu(e.target.value)}>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  );
};

export default BoardComboBox;
