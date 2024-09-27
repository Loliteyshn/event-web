import React from 'react'
import cn from "classnames"
import { useState } from 'react';
import s from './Paginator.module.css';

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChange, poritonSize = 5 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / poritonSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * poritonSize + 1;
    let rightPortionPageNumber = portionNumber * poritonSize;

    return (
        <div className={s.container}>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Previous</button>
            }
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span className={cn({
                        [s.selectedPage]: currentPage === p
                    }, s.pageNumber)}
                        key={p} onClick={e => onPageChange(p)}>{p}</span>
                })}

            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>
            }
        </div>
    )
}

export default Paginator