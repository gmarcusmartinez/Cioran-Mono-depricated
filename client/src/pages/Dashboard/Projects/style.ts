import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    height: 100%;
    max-width: 900px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;

    @media (min-width: 744px) {
      max-height: 500px;
      margin-top: 100px;
    }
  `}
`;

export const AddProjectBtn = styled.button`
  ${({ theme }) => css`
    height: 40px;
    width: 40px;
    background-color: #008080;
    position: absolute;
    top: -100px;
    right: -16px;
    border-radius: 50%;
    z-index: 2;
    &:focus {
      outline: none;
    }
    i {
      font-size: 20px;
      color: #fff;
    }
    &:hover {
      background-color: #66b2b2;
      transition: 0.25s ease-in;
    }
    @media (max-width: 744px) {
      top: -16px;
    }
  `}
`;