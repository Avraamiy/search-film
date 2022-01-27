import {makeAutoObservable, configure} from 'mobx'

configure({
    enforceActions: "never",
})

class Film {
    films = []
    page = 1
    totalPages = 0
    query = ''

    constructor() {
        makeAutoObservable(this)
    }

    loadData(page, query) {
        if (query.trim() === this.query.trim() && page === this.page) return
        this.query = query
        this.page = page
        fetch(`https://movies-test.grapi.ru/search?q=${query}&p=${page}`)
            .then(r => r.json())
            .then(data => {
                this.films = data.results
                this.totalPages = data.total_pages
            })
            .catch(e => {
                console.log(e)
            })
    }

    changePage(pageIndex) {
        this.loadData(pageIndex, this.query)
    }

    clearResults() {
        this.films = []
        this.page = 0
        this.totalPages = 0
    }

    // setQuery(q) {
    //     this.query = q
    // }
    //
    // setPage(p) {
    //     this.page = p
    // }
    //
    // setFilms(films) {
    //     this.films = films
    // }
    // setTotalPages(pages) {
    //     this.totalPages = pages
    // }
}

export default new Film()
