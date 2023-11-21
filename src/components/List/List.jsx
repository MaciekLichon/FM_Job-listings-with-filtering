import {data} from '../../data';
import Item from '../Item/Item';
import './List.scss';

const List = ({filters, setFilters}) => {

    const isItemValid = item => {
        let role = false;
        let level = false;
        let languages = false;
        let tools = false;

        // ----- ROLE -----
        if (item.role === filters.role || filters.role === '') {
            role = true;
        }

        // ----- LEVEL -----
        if (item.level === filters.level || filters.level === '') {
            level = true;
        }

        // ----- LANGUAGES -----
        let languageMatchCount = 0;
        for (let language of filters.languages) {
            if (item.languages.includes(language)) {
                languageMatchCount += 1;
            }
        }
        if (languageMatchCount === filters.languages.length) {
            languages = true;
        }

        // ----- TOOLS -----
        let toolsMatchCount = 0;
        for (let tool of filters.tools) {
            if (item.tools.includes(tool)) {
                toolsMatchCount += 1;
            }
        }
        if (toolsMatchCount === filters.tools.length) {
            tools = true;
        }

        if (role && level && languages && tools) {
            return true;
        }
    };

    return (
        <div className="list">
            {data.map(item => {
                if (isItemValid(item)) {
                    return <Item key={item.id} {...item} filters={filters} setFilters={setFilters} />
                }
            })}
        </div>
    );
};

export default List;