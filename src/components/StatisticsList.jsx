import PropTypes from 'prop-types';
import style from './statistics.module.css';


export default function StatisticList({ statData }) {
    return <>
        <section className={style.statistics}>
            <h2 className={style.title}>Upload stats</h2>
            <ul className={style.statList} >
                {statData.map((el) =>
                    <li key={el.id} style={{
                        backgroundColor: `rgb(${105 + 150 * Math.random()}, ${105 + 150 * Math.random()}, ${105 + 150 * Math.random()})`,
                        outline: "solid 1px black"
                    }}>
                        <span className={style.label}>{el.label}</span>
                        <span className={style.percentage}>{el.percentage?el.percentage:"No data"}</span>
                    </li>
                )}
            </ul>
        </section ></>
}

StatisticList.propTypes = {
    statData: PropTypes.arrayOf(
        PropTypes.shape({
            percentage: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired
        })
    )
}


