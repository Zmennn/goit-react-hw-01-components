
import './App.css';
import data from './social-profile/user.json';
import UserCard from './social-profile/components/user-card';
import statData from './statistics-section/statistical-data.json';
import StatisticElement from './statistics-section/components/statistics';

function App() {

  return <> <div>
    <UserCard
      name={data.name}
      tag={data.tag}
      location={data.location}
      avatar={data.avatar}
      stats={data.stats} />
  </div>
    <div>
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">

          {statData.map((el) =>
            <li key={el.id}>
              <StatisticElement
                // id={el.id}
                label={el.label}
                percentage={el.percentage}
              />
            </li>
          )
          };
        </ul>
      </section>
    </div>
  </>
}

export default App;
