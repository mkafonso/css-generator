import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 97%;
  margin: 0 auto;
  margin-top: 40px;

  > h1.title {
    color: var(--secondary-color);
    text-align: center;
    margin-bottom: 20px;
  }

  > p.description {
    color: var(--secondary-color);
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const LayoutForButtonSection = styled.div`
  margin-top: 20px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const ButtonOptions = styled.div`
  min-width: 400px;
  width: 48%;
  height: 350px;
  border: 1px solid var(--secondary-color);
  border-radius: 4px;

  > span.title {
    color: var(--main-color);
    background: var(--secondary-color);
    padding: 4px 8px;
    display: inline-block;
    width: auto;
    height: 26px;
  }

  @media (max-width: 830px) {
    width: 100%;
  }
`;

export const ButtonPreview = styled.div`
  min-width: 400px;
  width: 48%;
  height: 350px;
  border: 1px solid var(--secondary-color);
  border-radius: 4px;

  > span.title {
    color: var(--main-color);
    background: var(--secondary-color);
    padding: 4px 8px;
    display: inline-block;
    width: auto;
    height: 26px;
  }

  > div.previewContent {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
  }

  @media (max-width: 830px) {
    margin-top: 20px;
    width: 100%;
  }
`;

export const CSSOutput = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 350px;
  border: 1px solid var(--secondary-color);
  border-radius: 4px;

  > span.title {
    color: var(--main-color);
    background: var(--secondary-color);
    padding: 4px 8px;
    display: inline-block;
    width: auto;
    height: 26px;
  }
`;

export const Button = styled.button``;
