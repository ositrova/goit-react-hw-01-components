
import {Profile} from './Profile/Profile';
import user from './Profile/user.json';

import {Statistics} from './Statistics/Statistics';
import data from './Statistics/data.json';

import { FriendList } from './Friend/FriendList';
import friends from './Friend/friends.json';

import { TransactionList } from './TransactionHistory/TransactionsList';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div className="App">
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

<Statistics title="Upload stats" stats={data} />

<FriendList friends={friends}/>

<TransactionList items={transactions} />;
    </div>

  );
};
