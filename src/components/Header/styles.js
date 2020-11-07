import styled from 'styled-components';

export const Container = styled.header`
  > nav {
    height: 50px;
    background: var(--secondary-color);
    color: var(--main-color);
    padding: 0 30px;

    .navigation {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;

      li {
        list-style: none;
        cursor: pointer;
        user-select: none;

        & + li {
          margin-left: 16px;
        }
      }
    }
  }
`;
