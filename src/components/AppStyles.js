import { styled } from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
gap: 16px;
  .sidebar {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 2px solid var(--color-navy-blue);
    border-radius: 20px;
    background-color: var(--color-navy-blue-modal);
    padding: 15px;
  }
  .main-information {
    width: 900px;
    border: 2px solid var(--color-navy-blue);
    border-radius: 20px;
    background-color: var(--color-navy-blue-modal);
    padding: 28px;
  }
`;
