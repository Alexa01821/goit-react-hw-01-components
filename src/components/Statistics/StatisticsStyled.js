import { styled } from 'styled-components';
export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: var(--color-modal);
  padding: 8px;
  .title {
    font-size: 20px;
    line-height: 1.5;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: var(--color-navy-blue);
    margin-bottom: 8px;
  }
  .stat-list {
    display: flex;
    justify-content: center;
    gap: 16px;
    .stat-item {
      width: calc((100% - 8px * 4) / 5);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      background-color: var(--color-modal);
      border: 1px solid var(--color-navy-blue);
      border-radius: 20px;
      padding: 8px;
      .label,
      .percentage {
        font-size: 12px;
        line-height: 1.5;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: capitalize;
        color: var(--color-grey);
      }
    }
  }
`;
