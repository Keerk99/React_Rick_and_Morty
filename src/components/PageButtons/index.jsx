import "./style.css";

export const RenderPageButtons = (totalPages, page, setPage) => {
  const buttons = [];
  let startPage = Math.max(1, page - 2);
  let endPage = Math.min(page + 2, totalPages);

  if (page <= 3) {
    startPage = 1;
    endPage = Math.min(5, totalPages);
  } else if (page >= totalPages - 2) {
    startPage = Math.max(totalPages - 4, 1);
    endPage = totalPages;
  }

  for (let i = startPage; i <= endPage; i++) {
    const buttonClasses =
      i === page ? "page__button page__button-current" : "page__button";

    buttons.push(
      <button key={i} onClick={() => setPage(i)} className={buttonClasses}>
        {i}
      </button>
    );
  }
  return buttons;
};
