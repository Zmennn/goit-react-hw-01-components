import StatisticElement from './statistics'
import style from './statistics.module.css'


export default function StatisticList({ statData }) {

    return <section className={style.statistics}>
        <h2 className={style.title}>Upload stats</h2>
        <ul className={style.statList} >
            {statData.map((el) =>
                <li key={el.id} style={{
                    backgroundColor: `rgb(${105 + 150 * Math.random()}, ${105 + 150 * Math.random()}, ${105 + 150 * Math.random()})`,
                    outline: "solid 1px black"
                }}>
                    <StatisticElement
                        label={el.label}
                        percentage={el.percentage} />
                </li>
            )}
        </ul>
    </section >
}


