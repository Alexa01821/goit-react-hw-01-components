import { styled } from 'styled-components';

export const ProfileContainer = styled.div`
  border-radius: 20px;
  background-color: var(--color-modal);
  padding: 8px;
  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;

    .avatar {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      box-shadow: 4px 4px 4px 4px var(--color-navy-blue);
    }
    .name {
      font-size: 36px;
      line-height: 1.11;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: capitalize;
      color: var(--color-navy-blue);
    }
    .tag,
    .location {
      font-size: 16px;
      line-height: 1.25;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: capitalize;
      color: var(--color-navy-blue-modal);
    }
  }

  .stats {
    display: flex;
    justify-content: center;
    gap: 12px;
    .stats-item {
      width: calc((100% - 10px * 2) / 3);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      background-color: var(--color-modal);
      border: 1px solid var(--color-navy-blue);
      border-radius: 20px;
      padding: 4px;
      .label,
      .quantity {
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
