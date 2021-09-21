import { ChangeEvent } from "react";
import "./Pagination.scss";
export type PaginationProps = {
	currentPage: number;
	totalPages: number;
	onPageChanged: (page: number) => void;
};

const Pagination = ({
	currentPage = 0,
	totalPages,
	onPageChanged,
}: PaginationProps) => {
	const onPrevClick = () => {
		if (currentPage > 1) {
			onPageChanged(currentPage - 1);
		}
	};

	const onNextClick = () => {
		if (currentPage < totalPages) {
			onPageChanged(currentPage + 1);
		}
	};

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		onPageChanged(parseInt(event?.target?.value));
	};

	return (
		<span className="pagination">
			<button onClick={onPrevClick}> {"<"} </button>
			<span className="pagination-info">
				<span>{`Page:`}</span>
				<input value={currentPage} onChange={onInputChange} />
				<span>{`of: ${totalPages}`}</span>
			</span>
			<button onClick={onNextClick}> {">"} </button>
		</span>
	);
};

export default Pagination;
