
import './App.css';
import data from './social-profile/user.json';
import UserCard from './social-profile/components/user-card';
import statData from './statistics-section/statistical-data.json';
import StatisticList from './statistics-section/components/statistics-list';
import FriendList from './friend-list/components/friend-list';
import friendData from './friend-list/friends.json';
import transactionData from './transaction-history/transactions.json';
import TransactionHistory from './transaction-history/components/transaction-history';

function App() {
  return <>
    <div className="mainCont">
      <UserCard
        name={data.name}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        stats={data.stats} />
    </div>
    <div className="mainCont">
      <StatisticList
        statData={statData} />
    </div>
    <div className="mainCont">
      <FriendList
        friends={friendData}
      />
    </div>
    <div className="mainCont">
      <TransactionHistory
        items={transactionData}
      />
    </div>
  </>
}

export default App;
