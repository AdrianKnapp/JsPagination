import styled from "styled-components";

const PaginationButton = styled.a`
  background: none;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  padding: 5px 10px;
  text-decoration: none;

  &.prev {
    border-radius: 5px 0 0 5px;
    border: 1px solid #e3e3e3;
    color: #e3e3e3;
  }

  &.next {
    border-radius: 0 5px 5px 0;
    border: 1px solid #e3e3e3;
    color: #e3e3e3;
  }

  &:hover {
    background: #666666;
  }
`;

export default PaginationButton;
