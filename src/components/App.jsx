import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transaction from '../data/transactions.json'
import { Container } from './AppStyles';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Container>
      <div className="sidebar">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
      </div>
      <div className="main-information">
        <TransactionHistory transactionsList={transaction} />
      </div>
    </Container>
  );
};
