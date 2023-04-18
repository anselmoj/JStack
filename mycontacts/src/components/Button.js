import styled from 'styled-components';

export default styled.button`
  border: none;
  padding: 0 16px;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary.main};
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }


`;
