import { styled } from 'styled-components';

const FriendListContainer = styled.ul`
display: flex;
flex-direction: column;
gap: 8px;
  border-radius: 20px;
  background-color: var(--color-modal);
  padding: 8px;
  .item {
      display: flex;
      justify-content: center;
      align-items: center;
    border: 1px solid var(--color-navy-blue);
    border-radius: 20px;
    .avatar {
      width: 60px;
      height: 60px;
      margin-right: 20px;
    }
    .name {
      font-size: 24px;
      line-height: 1.6;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: capitalize;
      color: var(--color-navy-blue);
    }
  }
`;

const FriendsStatus = styled('span')(({ $isOnline }) => {
  return {
    backgroundColor: $isOnline ? '#4d5ae5ff' : '#2e2f4266',
    borderRadius: '50%',
    width: '16px',
    height: '16px',
    marginRight: '8px',
  };
});

export { FriendListContainer, FriendsStatus };
