import React from 'react';

import Button from './Button';

const Pagination = (props) => {
    const { paginationBtnClick } = props;
    return (
        <div className="pagination">
            <Button clsName="primary"
                handleClick={(e) => paginationBtnClick(-1)}>
                Prev
            </Button>
            <Button clsName="primary"
                handleClick={(e) => paginationBtnClick(1)}>
                Next
            </Button>
        </div>
    );
};


export default Pagination;