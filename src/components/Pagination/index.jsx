import React from 'react';
import ReactPaginate from "react-paginate";
import styles from './Pagination.module.scss'

function Index({limitItemsPerPage, currentPage, onChangePage}) {
    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            initialPage={currentPage - 1}
            pageRangeDisplayed={0}
            pageCount={(Math.ceil(10 / limitItemsPerPage))}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    );
}

export default Index;