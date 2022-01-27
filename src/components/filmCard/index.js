import React from 'react'
import {Card, Img, Type, Title, Badge, WithoutPoster} from "./styled"

function getColor(vote) {
    if (vote < 4) {
        return '#E91C1C'
    } else if (vote < 8) {
        return '#FFC700'
    } else {
        return '#1EA608'
    }
}

const Film = ({film}) => {
    const {poster_path, title, vote_average} = film
    return (
        <Card>
            {vote_average ? <Badge color={getColor(vote_average)}>{vote_average}</Badge> : null}

            {poster_path
                ? <Img src={`https://movies-test.grapi.ru/img${poster_path}`}/>
                : <WithoutPoster/>
            }

            <Type>Фильм</Type>
            <Title>{title}</Title>
        </Card>
    )
}

const TV = ({film}) => {
    const {poster_path, name, vote_average} = film
    return (
        <Card>
            {vote_average ? <Badge color={getColor(vote_average)}>{vote_average}</Badge> : null}
            {
                poster_path
                    ? <Img src={`https://movies-test.grapi.ru/img${poster_path}`}/>
                    : <WithoutPoster/>
            }
            <Type>Сериал</Type>
            <Title>{name}</Title>
        </Card>
    )
}

const FilmCard = ({film}) => {
    const {media_type} = film
    return media_type === "movie" ? <Film film={film}/> : <TV film={film}/>
}

export default FilmCard