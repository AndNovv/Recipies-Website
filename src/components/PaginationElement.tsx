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
import { RECIPES_PER_PAGE } from '@/data/data';

const PaginationElement = ({
    searchParams,
    numberOfFoundRecipes
}: {
    searchParams?: {
        page?: string
        cousine?: string
        foodType?: string
        difficulty?: string
    },
    numberOfFoundRecipes: number
}) => {

    const currentPage = Number(searchParams?.page) || 1;

    const pathname = usePathname();
    const { replace } = useRouter();

    function handlePage(action: 'next' | 'prev') {
        const params = new URLSearchParams(searchParams);
        if (currentPage > 1 && action === 'prev') {
            params.set('page', String(currentPage - 1));
        }
        if (currentPage < numberOfPages && action === 'next') {
            params.set('page', String(currentPage + 1))
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    function GoToPage(page: number) {
        const params = new URLSearchParams(searchParams);
        params.set('page', String(page));
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    const numberOfPages = Math.ceil(numberOfFoundRecipes / RECIPES_PER_PAGE)

    const activePageStyles = 'border border-blue-400 text-blue-400 hover:text-blue-500'

    const renderPaginationLinks = () => {
        const paginationLinks = [];
        const range = 2; // Number of pages to display before and after the current page
        const startPage = Math.max(1, currentPage - range);
        const endPage = Math.min(numberOfPages, currentPage + range);

        for (let i = startPage + 1; i < endPage; i++) {
            paginationLinks.push(
                <PaginationItem key={i} className={currentPage === i ? activePageStyles : ''}>
                    <PaginationLink onClick={() => GoToPage(i)}>{i}</PaginationLink>
                </PaginationItem>
            );
        }
        return paginationLinks;
    };

    return (
        <Pagination className='w-[400px]'>
            <PaginationContent className='w-[400px] justify-between'>
                <PaginationItem>
                    <PaginationPrevious onClick={() => handlePage('prev')} />
                </PaginationItem>

                <div className='flex gap-1'>
                    {/* Первая страница */}
                    <PaginationItem>
                        <PaginationLink
                            className={currentPage === 1 ? activePageStyles : ''}
                            onClick={() => GoToPage(1)}>1</PaginationLink>
                    </PaginationItem>

                    {/* Троеточие */}
                    {numberOfPages > 3 && currentPage > 3 && (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    )}

                    {/* Центральный сектор страниц */}
                    {renderPaginationLinks()}

                    {/* Троеточие */}
                    {numberOfPages > 3 && numberOfPages - currentPage > 1 && (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    )}

                    {/* Последняя страница */}
                    {numberOfPages > 1 && (
                        <PaginationItem>
                            <PaginationLink
                                className={currentPage === numberOfPages ? activePageStyles : ''}
                                onClick={() => GoToPage(numberOfPages)}>{numberOfPages}</PaginationLink>
                        </PaginationItem>
                    )}

                </div>

                <PaginationItem>
                    <PaginationNext onClick={() => handlePage('next')} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    )
}

export default PaginationElement