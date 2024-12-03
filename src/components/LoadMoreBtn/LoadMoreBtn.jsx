import Styles from "./LoadMoreBtn.module.css";

export default function loadMoreBtn({ setPage }) {
  function handleLoadMore(e) {
    e.preventDefault();
    setPage((curPage) => curPage + 1);
  }

  return (
    <div className={Styles.loadMoreContainer}>
      <button className={Styles.loadMoreBtn} onClick={(e) => handleLoadMore(e)}>
        Load More
      </button>
    </div>
  );
}
