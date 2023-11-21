import './FilterItem.scss';

const FilterItem = ({value, action}) => {
    return (
        <button className="filters__item" value={value} onClick={action}>
            <p className="filters__item-text">{value}</p>
            <div className="filters__item-button">
                <span></span>
                <span></span>
            </div>
        </button>
    );
};

export default FilterItem;