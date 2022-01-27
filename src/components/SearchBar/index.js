import React, {useEffect, useRef, useState} from 'react'
import {Form, CustomInput, Input, Button, SearchIcon, CloseIcon} from './styled'
import {observer} from 'mobx-react-lite'
import film from '../../store/film'

const SearchBar = observer(() => {
    const inputRef = useRef('')
    const [query, setQuery] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [isFocus, setIsFocus] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        if (query !== '') setIsTyping(true)
        else setIsTyping(false)
    }, [query])

    function handleSubmit(event) {
        event.preventDefault()
        if (query === '') return
        setIsDisabled(true)
        film.loadData(1, query)
    }

    function clickClearIconHandler() {
        setQuery('')
        film.clearResults()
    }

    function changeHandler(e) {
        setIsTyping(true)
        setIsDisabled(false)
        setQuery(e.target.value)
    }

    function keyPressHandler(event) {
        if (event.key === 'Escape') {
            inputRef.current.blur()
            setIsFocus(false)
        }
    }

    return (
        <Form onSubmit={handleSubmit} onKeyDown={keyPressHandler}>
            <CustomInput>
                <SearchIcon isFocus={isFocus}/>
                <Input
                    onBlur={() => setIsFocus(false)}
                    onFocus={() => setIsFocus(true)}
                    isTyping={isTyping}
                    onChange={e => changeHandler(e)}
                    autoComplete="off"
                    type="text"
                    name="name"
                    value={query}
                    ref={inputRef}
                    placeholder="Название фильма или сериала..."
                />
                {isTyping && <CloseIcon
                    isTyping={isTyping}
                    isFocus={isFocus}
                    onClick={clickClearIconHandler}
                />}
            </CustomInput>
            <Button type="submit" value="Найти" isTyping={isTyping} disabled={isDisabled}/>
        </Form>
    )
})

export default SearchBar