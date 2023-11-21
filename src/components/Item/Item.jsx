import './Item.scss';

const Item = (props) => {


    const updateRoleFilter = (e) => {
        const filter = e.target.value;
        props.setFilters({...props.filters, ['role']: filter});
    }

    const updateLevelFilter = (e) => {
        const filter = e.target.value;
        props.setFilters({...props.filters, ['level']: filter});
    }

    const updateLanguagesFilter = (e) => {
        const filter = e.target.value;
        if (!props.filters['languages'].includes(filter)) {
            props.setFilters({...props.filters, ['languages']: [...props.filters['languages'], filter]});
        }
    }

    const updateToolsFilter = (e) => {
        const filter = e.target.value;
        if (!props.filters['tools'].includes(filter)) {
            props.setFilters({...props.filters, ['tools']: [...props.filters['tools'], filter]});
        }
    }

    return (
        <div className={`item ${props.featured ? 'item_featured' : ''}`}>
            <div className="item__details">
                <img src={props.logo} alt={`${props.company} logo`} className="item__details-logo" />
                <div className="item__details-overview">
                    <p className="item__details-overview__company">{props.company}</p>
                    {props.new && <span className="item__details-overview__badge item__details-overview__badge_new">new!</span>}
                    {props.featured && <span className="item__details-overview__badge item__details-overview__badge_featured">featured</span>}
                </div>
                <p className="item__details-position">{props.position}</p>
                <div className="item__details-offer">
                    <span className="item__details-offer__info">{props.postedAt}</span>
                    <span className="item__details-offer__info">{props.contract}</span>
                    <span className="item__details-offer__info">{props.location}</span>
                </div>  
            </div>
            <div className="item__categories">
                <button className="item__categories-elem" value={props.role} onClick={updateRoleFilter}>{props.role}</button>
                <button className="item__categories-elem" value={props.level} onClick={updateLevelFilter}>{props.level}</button>
                {props.languages.map(item => (
                    <button key={item} className="item__categories-elem" value={item} onClick={updateLanguagesFilter}>{item}</button>
                ))}
                {props.tools.map(item => (
                    <button key={item} className="item__categories-elem" value={item} onClick={updateToolsFilter}>{item}</button>
                ))}
            </div>
        </div>
    );
};

export default Item;

// "id": 1,
// "company": "Photosnap",
// "logo": "./images/photosnap.svg",
// "new": true,
// "featured": true,
// "position": "Senior Frontend Developer",
// "role": "Frontend",
// "level": "Senior",
// "postedAt": "1d ago",
// "contract": "Full Time",
// "location": "USA Only",
// "languages": ["HTML", "CSS", "JavaScript"],
// "tools": []