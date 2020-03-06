import React, {useState} from "react";
import s from "../../Users/users.module.css";

const Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pagesNum = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesNum.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let portionLeft = (portionNumber - 1) * portionSize + 1;
    let portionRight = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREW</button>}
            {pagesNum.filter(p => p >= portionLeft && p <= portionRight)
                .map(p =>
                        <span key={p}
                              className={(currentPage === p) ? s.selectedPage : s.otherPage}
                              onClick={() => {
                                  onPageChanged(p)
                              }}>{p}
                </span>
                )}
            {portionCount > portionNumber && <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    );
};

export default Pagination;