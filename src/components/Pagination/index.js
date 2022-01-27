import React, {useEffect, useRef, useState} from 'react'
import film from '../../store/film'
import {Button, Wrapper} from './styled'
import {observer} from 'mobx-react-lite'


const Pagination = observer(() => {
    const paginationRef = useRef(null)
    const [showPagination, setShowPagination] = useState(false)
    const changePage = (pageIndex) => {
        film.changePage(pageIndex)
        console.log(paginationRef.current.offsetTop)
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        setShowPagination(film.totalPages > 1)
    }, [film.totalPages])

    return (
        <Wrapper
            ref={paginationRef}
            showPagination={showPagination}
            justifyContent={film.totalPages < 10 ? 'center' : 'flex-start'}
        >
            {showPagination ? Array.from({length: film.totalPages}, (_, i) => i + 1)
                .map(pageIndex => {
                    const isActive = pageIndex === film.page
                    return (
                        <Button key={pageIndex}
                                disabled={isActive}
                                onClick={() => changePage(pageIndex)}
                                isActive={isActive}>
                            {pageIndex}
                        </Button>
                    )
                }) : null}
        </Wrapper>
    )
})

export default Pagination