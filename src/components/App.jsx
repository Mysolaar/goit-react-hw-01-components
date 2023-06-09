import { Profile } from './Profile';
import {Statistics} from './Statistics';
import {FriendList} from './FriendList';
import {TransactionHistory} from './TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import './App.css';


export const App = () => {
  return (
    <div className='container'>
      <Profile user={user} />
      <Statistics title='Upload stats' data={data} />
      <FriendList friends={friends}/>
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
