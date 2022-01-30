import React, {useEffect, useRef, useState} from 'react'
import film from '../../store/film'
import {Button, Wrapper, StepButton} from './styled'
import {observer} from 'mobx-react-lite'

const PAGES_COUNT = 8
const STEP_COUNT = 5

const Pagination = observer(() => {
    const paginationRef = useRef(null)
    const [showPagination, setShowPagination] = useState(false)

    const [fromIndex, setFromIndex] = useState(0)
    const [toIndex, setToIndex] = useState(PAGES_COUNT)

    const [step, setStep] = useState(0)
    const [maxSteps, setMaxSteps] = useState(0)

    const [showNextButton, setShowNextButton] = useState(false)
    const [showPrevButton, setShowPrevButton] = useState(false)

    const changePage = (pageIndex) => {
        film.changePage(pageIndex)
        window.scrollTo(0, 0)
    }

    const nextButtonClickHandler = () => {
        if (step === maxSteps - 1) {
            setFromIndex(film.totalPages - PAGES_COUNT)
            setToIndex(film.totalPages)
        } else {
            setFromIndex(i => i + STEP_COUNT)
            setToIndex(i => i + STEP_COUNT)
        }
        setStep(step => ++step)
    }

    const prevButtonClickHandler = () => {
        if (step === 1) {
            setFromIndex(0)
            setToIndex(PAGES_COUNT)
        } else {
            setFromIndex(i => i - STEP_COUNT)
            setToIndex(i => i - STEP_COUNT)
        }
        setStep(step => --step)
    }

    useEffect(() => {
        setStep(0)
        setShowPagination(film.totalPages > 1)
        if (film.totalPages > PAGES_COUNT) {
            setFromIndex(0)
            setToIndex(8)
            setShowPrevButton(false)
            setShowNextButton(true)
            setMaxSteps(Math.ceil((film.totalPages - PAGES_COUNT) / STEP_COUNT))
        } else {
            setShowPrevButton(false)
            setShowNextButton(false)
        }
    }, [film.totalPages, film.query]) //eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (step === maxSteps) setShowNextButton(false)
        if (step < maxSteps) setShowNextButton(true)
        if (step > 0) setShowPrevButton(true)
        if (step === 0) setShowPrevButton(false)
    }, [step, maxSteps])

    return (
        <Wrapper
            ref={paginationRef}
            showPagination={showPagination}
        >
            {showPrevButton && <StepButton onClick={prevButtonClickHandler}>Назад</StepButton>}
            {showPagination ? Array.from({length: film.totalPages}, (_, i) => i + 1)
                .slice(fromIndex, toIndex)
                .map(pageIndex => {
                    const isActive = pageIndex === film.page
                    return (
                        <Button
                            key={pageIndex}
                            disabled={isActive}
                            onClick={() => changePage(pageIndex)}
                            isActive={isActive}
                        >
                            {pageIndex}
                        </Button>
                    )
                }) : null}
            {showNextButton && <StepButton onClick={nextButtonClickHandler}>Ещё</StepButton>}
        </Wrapper>
    )
})

export default Pagination