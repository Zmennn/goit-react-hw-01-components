import StatisticElement from './statistics'


export default function StatisticList({ statData }) {

    return <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
            {statData.map((el) =>
                <li key={el.id}>
                    <StatisticElement
                        label={el.label}
                        percentage={el.percentage} />
                </li>
            )}
        </ul>
    </section>
}