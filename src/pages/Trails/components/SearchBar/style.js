import styled from "styled-components";

const Label = styled.label`
  width: 100%;
  height: 40px;
  background: #6b5a4c;
  border-radius: 10px;
  display: flex;
  padding: 5px;
  margin: 20px 0;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  font-size: 1.4rem;
  outline: none;
  margin-left: 8px;
  color: rgba(229, 229, 229, 0.63);
`;

export default { Label, Input };
