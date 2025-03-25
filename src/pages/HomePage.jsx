import MoovieCard from "../components/MoovieCard"
import axios from 'axios'
import { useState, useEffect } from "react"

export default function HomePage(){

    const [movies,setMovies] = useState( [] )

    const fetchMoovies = () => {
        console.log ( 'fetching moovies')

        axios.get('http://localhost:3005/movies')
        .then( res => { setMovies( res.data ) } )
        .catch( error => {console.log(error)})
    }

    const renderMovies = () => {
        return(
            movies.map( (movie) => {
                return(
                    <div className="col" key={book.id}>
                        <BookCard movie={movie}/>
                    </div>
                )
            })
        )
    }

    useEffect( fetchMoovies, [] )

    return(
        <>
            <h1 className="text-primary">Bool Books</h1>
            <h2>qui andranno i libri</h2>
            <div className="row row-cols-3">
                <MoovieCard/>
            </div>
        </>
        
    )
}