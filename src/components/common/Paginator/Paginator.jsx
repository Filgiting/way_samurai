import styles from './Paginator.module.css';
import React from 'react';

let Paginator = ({portionSize = 10, ...props}) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    /*let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber + portionSize;*/


    return <div>

        <div className={styles.cursorPointer}>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(event) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>

    </div>
};

export default Paginator;