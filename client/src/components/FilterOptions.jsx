function FilterOptions(props) {
    return (
        <div className='w-full flex flex-row items-center font-semibold text-s text-secondary'>
            <p 
                className={`${ props.filterOption ==='ALL' ? 'text-primary' : ''} hover:text-primary cursor-pointer mr-2 sm:mr-3`}
                onClick={() => props.handleFilterOption('ALL')}
            >
                All
            </p>
            <p
                className={`${ props.filterOption ==='UNASSIGNED' ? 'text-primary' : ''} hover:text-primary cursor-pointer mr-2 sm:mr-3`}
                onClick={() => props.handleFilterOption('UNASSIGNED')}
            >
                Unassigned
            </p>
            <p
            className={`${ props.filterOption ==='DONE' ? 'text-primary' : ''} hover:text-primary cursor-pointer mr-2 sm:mr-3`}
            onClick={() => props.handleFilterOption('DONE')}
            >
                Done
            </p>
            <p
                className={`${ props.filterOption ==='TODO' ? 'text-primary' : ''} hover:text-primary cursor-pointer mr-2 sm:mr-3`}
                onClick={() => props.handleFilterOption('TODO')}
            >
                Todo
            </p>
            <p
                className={`${ props.filterOption ==='INPROGRESS' ? 'text-primary' : ''} hover:text-primary cursor-pointer mr-2 sm:mr-3`}
                onClick={() => props.handleFilterOption('INPROGRESS')}
            >
                In Progress
            </p>
            <p
                className={`${ props.filterOption ==='ONHOLD' ? 'text-primary' : ''} hover:text-primary cursor-pointer mr-2 sm:mr-3`}
                onClick={() => props.handleFilterOption('ONHOLD')}
            >
                On Hold
            </p>
        </div>
    );
}

export default FilterOptions;