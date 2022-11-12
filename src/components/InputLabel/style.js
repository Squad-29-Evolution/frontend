import styled from "styled-components";

const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.p`
  font-family: "Metropolis", sans-serif;
  font-weight: 600;
  color: #e5e5e5;
  margin-bottom: 5px;
  font-size: 1.1rem;
`;
const Input = styled.input`
  width: 100%;
  height: 44px;
  background-color: #2e2e2e;
  border-radius: 2px;
  color: #e5e5e5;
  font-family: "Metropolis", sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 10px;
`;

export default { Label, Input, Title };
