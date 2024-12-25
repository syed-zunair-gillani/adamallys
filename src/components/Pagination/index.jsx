import Image from "next/image";

const Pagination = (props) => {
  const { totalItems, itemsPerPage, currentPage, onPageChange } = props;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; // Prevent going out of bounds
    onPageChange(page);
  };

  return (
    <div className="flex justify-center mt-6">
      <button
        className="w-[57px] h-[55px] flex items-center justify-center border border-theme-main  hover:bg-blue-100 disabled:bg-gray-300"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Image src='/svg/arrow_back.svg' alt="" width={14} height={14} />
      </button>

      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            className={`w-[57px] h-[55px] flex items-center justify-center border border-theme-main ${pageNumber === currentPage
              ? 'bg-theme-main text-white'
              : 'bg-white text-theme-main border hover:bg-blue-100'
              }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        className="w-[57px] h-[55px] flex items-center justify-center border border-theme-main  hover:bg-blue-100 disabled:bg-gray-300"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Image src='/svg/arrow_next.svg' alt="" width={14} height={14} />
      </button>
    </div>
  );
};
export default Pagination