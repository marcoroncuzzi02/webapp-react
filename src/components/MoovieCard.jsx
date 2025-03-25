import { Link } from "react-router-dom";

export default function MoovieCard() {
    return(
        <>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">Titolo film</h5>
                    <span>
                        autore
                    </span>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum explicabo dolor architecto porro accusantium nostrum distinctio unde minima rerum. In illo laborum sit rerum ad nesciunt praesentium! Magnam, fuga rerum.
                    </p>
                    <Link to={'moovies/2'}>Read More</Link>
                </div>
            </div>
        </>
    )
}