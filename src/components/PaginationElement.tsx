import React from 'react'

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { usePathname, useRouter } from 'next/navigation';

const PaginationElement = ({
    searchParams,
}: {
    searchParams?: {
        page?: string;
        cousine?: string;
        foodType?: string;
        difficulty?: string;
    };
}) => {

    const currentPage = Number(searchParams?.page) || 1;

    const pathname = usePathname();
    const { replace } = useRouter();

    function handlePage(action: 'next' | 'prev') {
        const params = new URLSearchParams(searchParams);
        if (currentPage > 1 && action === 'prev') {
            params.set('page', String(currentPage - 1));
        }
        if (action === 'next') {
            params.set('page', String(currentPage + 1))
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    function GoToPage(page: number) {
        const params = new URLSearchParams(searchParams);
        params.set('page', String(page));
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={() => handlePage('prev')} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={() => GoToPage(1)}>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={() => GoToPage(2)}>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={() => GoToPage(3)}>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext onClick={() => handlePage('next')} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    )
}

export default PaginationElement