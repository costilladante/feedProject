import { ChangeEvent } from "react";
import { PaginationType } from "../../types/pagination.type";
import "./Pagination.scss";
export type PaginationProps = {
	paginationData: PaginationType;
	onPageChanged: (page: number) => void;
};

const Pagination = ({ paginationData, onPageChanged }: PaginationProps) => {
	const { currentPage, totalPages } = paginationData;
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
