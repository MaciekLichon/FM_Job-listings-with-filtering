import './Filters.scss';

import FilterItem from '../FilterItem/FilterItem';

const Filters = ({filters, setFilters}) => {

    const clearFilters = () => {
        setFilters({
            role: '',
            level: '',
            languages: [],
            tools: []
        });
    };

    const removeRoleFilter = (e) => {
        setFilters({...filters, ['role']: ''});
    }

    const removeLevelFilter = (e) => {
        setFilters({...filters, ['level']: ''});
    }

    const removeLanguagesFilter = (e) => {
        const filter = e.currentTarget.value;
        setFilters({...filters, ['languages']: filters['languages'].filter(item => item !== filter)});
    }

    const removeToolsFilter = (e) => {
        const filter = e.currentTarget.value;
        setFilters({...filters, ['tools']: filters['tools'].filter(item => item !== filter)});
    }

    const checkFilters = () => {
        if (filters.role !== '' || filters.level !== '' || filters.languages.length > 0 || filters.tools.length > 0) {
            return true;
        }
    }

    return (
        <div className={`filters ${checkFilters() ? 'filters_active' : ''}`}>
            <div>
                <div className="filters__content">
                    <div className="filters__list">
                        {filters.role !== '' && <FilterItem value={filters.role} action={removeRoleFilter} />}
                        {filters.level !== '' && <FilterItem value={filters.level} action={removeLevelFilter} />}
                        {filters.languages.length > 0 && filters.languages.map(item => <FilterItem key={item} value={item} action={removeLanguagesFilter} />)}
                        {filters.tools.length > 0 && filters.tools.map(item => <FilterItem key={item} value={item} action={removeToolsFilter} />)}
                    </div>
                    <button className="filters__clear-button" onClick={clearFilters}>Clear</button>
                </div>
            </div>
        </div>
    );
};

export default Filters;
