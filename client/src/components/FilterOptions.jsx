function FilterOptions({
    filterOption,
    handleFilterOption
}) {
    return (
        <div className='w-full flex flex-row items-center mb-4 font-semibold text-s text-secondary'>
            <p 
                className={`${ filterOption ==='ALL' ? 'text-primary' : ''} hover:text-primary cursor-pointer mr-2 sm:mr-3`}
                onClick={() => handleFilterOption('ALL')}
            >
                All
            </p>
            <p
                className={`${ filterOption ==='UNASSIGNED' ? 'text-primary' : ''} hover:text-primary cursor-pointer mr-2 sm:mr-3`}
                onClick={() => handleFilterOption('UNASSIGNED')}
            >
                Unassigned
            </p>
            <p
            className={`${ filterOption ==='DONE' ? 'text-primary' : ''} hover:text-primary cursor-pointer mr-2 sm:mr-3`}
            onClick={() => handleFilterOption('DONE')}
            >
                Done
            </p>
            <p
                className={`${ filterOption ==='TODO' ? 'text-primary' : ''} hover:text-primary cursor-pointer mr-2 sm:mr-3`}
                onClick={() => handleFilterOption('TODO')}
            >
                Todo
            </p>
            <p
                className={`${ filterOption ==='INPROGRESS' ? 'text-primary' : ''} hover:text-primary cursor-pointer mr-2 sm:mr-3`}
                onClick={() => handleFilterOption('INPROGRESS')}
            >
                In Progress
            </p>
            <p
                className={`${ filterOption ==='ONHOLD' ? 'text-primary' : ''} hover:text-primary cursor-pointer mr-2 sm:mr-3`}
                onClick={() => handleFilterOption('ONHOLD')}
            >
                On Hold
            </p>
        </div>
    );
}

export default FilterOptions;