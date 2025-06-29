import  { useState, useEffect } from 'react';

function Pagination(props) {
  const { totalItems, rowsPerPage, onPageChange } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handleFirstPage = () => setCurrentPage(1);
  const handleLastPage = () => setCurrentPage(totalPages);
  const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const handlePreviousPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  return (
    <div className="pagination-controls">
      <button className='btnIN' onClick={handleFirstPage} disabled={currentPage === 1}>First</button>
      <button className='btnIN' onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
      <span className='btnIN'>Page {currentPage} of {totalPages}</span>
      <button className='btnIN' onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      <button className='btnIN' onClick={handleLastPage} disabled={currentPage === totalPages}>Last</button>
    </div>
  );
}

export default Pagination;
