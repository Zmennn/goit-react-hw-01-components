import PropTypes from 'prop-types';

export default function StatisticElement(label, percentage) {

    // <li className="item" key={id}>

    return (<>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
    </>)
};
// </li >
// StatisticElement.propTypes = {
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired
// }

