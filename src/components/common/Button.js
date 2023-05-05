import styled, { css } from "styled-components";

export const Button = styled.button`
  color: white;
  background-color: ${(p) =>
    p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
  font-weight: bold;
  cursor: pointer;
  ${(p) =>
    p.large
      ? css`
          padding: 10px;
          font-size: 1.5em;
          border-radius: 5px;
        `
      : css`
          padding: 8px;
          font-size: 1em;
          border-radius: 4px;
        `}

  box-shadow: none;
  border: none;
  display: block;
  width: 100%;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;
