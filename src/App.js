
import './App.css';
import data from './social-profile/user.json'
import UserCard from './social-profile/components/user-card'

function App() {
  console.log(data);
  return <div>
    <UserCard
      name={data.name}
      tag={data.tag}
      location={data.location}
      avatar={data.avatar}
      stats={data.stats} />
  </div>

}

export default App;
