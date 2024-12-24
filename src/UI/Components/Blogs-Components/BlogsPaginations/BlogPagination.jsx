import React from 'react'
import './BlogPagination.css'
import { LuArrowLeftCircle } from "react-icons/lu";
import { LuArrowRightCircle } from "react-icons/lu";

const BlogPagination = (
  { 
    currentPage, 
    totalPages, 
    setCurrentPage, 
    handlePrev, 
    handleNext 
  }) => {

  return (
    <>
      <div className="blog-page-paginations">
        <button
          className="blog-page-pagination-arrows blog-page-pagination-arrow-left"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          <LuArrowLeftCircle size={50} />
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Page numbers */}
          <div style={{ display: "flex", gap: "10px" }}>
            {Array.from({ length: totalPages }, (_, index) => index + 1)
              .slice(Math.max(currentPage - 2, 0), Math.min(currentPage + 1, totalPages))
              .map((page) => (
                <span
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  style={{
                    cursor: "pointer",
                    fontWeight: currentPage === page ? "bold" : "normal",
                  }}
                >
                  {page}
                </span>
              ))}
            {currentPage < totalPages - 2 && <span>...</span>}
            {currentPage < totalPages - 1 && (
              <span onClick={() => setCurrentPage(totalPages)}>{totalPages}</span>
            )}
          </div>
        </div>

        <button
          className="blog-page-pagination-arrows blog-page-pagination-arrow-right"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          <LuArrowRightCircle size={50} />
        </button>
      </div>
      <div className='mobile-view-show-all-blogs-button-main-div'>
          <button className='mobile-view-show-all-blogs-button'>View 12 more</button>
      </div>
    </>
  )
}

export default BlogPagination
