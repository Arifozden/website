import { useContext, useEffect, useState } from "react";
import { GraphQlContext } from "../../../Context/GraphQlContext/Context";

const rangeNumbers = (start: number, stop: number) =>
  Array.from({ length: stop - start + 1 }, (_, i) => i + start);

const Pagination = () => {
  const { page, setPage, pageCount } = useContext(GraphQlContext);
  const [pageRange, setPageRange] = useState<Array<number | string>>([]);
  const dots = "...";

  useEffect(() => {
    if (pageCount <= 10) setPageRange(rangeNumbers(1, pageCount));
    else {
      const siblingCount = 2;
      const itemCount = 3 + 2 * siblingCount;
      const shouldLeftDots = Math.max(page - siblingCount, 1) > 2;
      const shouldRightDots =
        Math.min(page + siblingCount, pageCount) < pageCount - 2;

      if (!shouldLeftDots && shouldRightDots) {
        setPageRange([...rangeNumbers(1, itemCount), dots, pageCount]);
      } else if (shouldLeftDots && !shouldRightDots) {
        setPageRange([
          1,
          dots,
          ...rangeNumbers(pageCount - itemCount + 1, pageCount),
        ]);
      } else if (shouldLeftDots && shouldRightDots) {
        const leftNumberIndex = Math.max(page - siblingCount, 1);
        const rightNumberIndex = Math.min(page + siblingCount, pageCount);

        setPageRange([
          1,
          dots,
          ...rangeNumbers(leftNumberIndex, rightNumberIndex),
          dots,
          pageCount,
        ]);
      }
    }
  }, [pageCount, page]);

  return (
    <div className="flex justify-center text-xl my-5">
      <button onClick={() => page !== 1 && setPage(page - 1)}>{"<"}</button>

      {pageRange.map((pageNumber, i) => (
        <button
          key={i}
          onClick={() => typeof pageNumber === "number" && setPage(pageNumber)}
          className={`md:mx-2 px-2 rounded-md ${
            page === pageNumber && "bg-blue-400"
          }`}
        >
          {pageNumber}
        </button>
      ))}

      <button onClick={() => page !== pageCount && setPage(page + 1)}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
