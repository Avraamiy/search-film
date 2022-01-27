import React from 'react'
import film from '../../store/film'
import {Wrapper} from './styled'
import {observer} from 'mobx-react-lite'
import FilmCard from '../filmCard'

const Grid = observer(() => {
    return (
        <Wrapper>
            {
                film.films.map(film => {
                    return (
                        <FilmCard key={film.id} film={film} />
                    )
                })
            }
        </Wrapper>
    )
})
export default Grid