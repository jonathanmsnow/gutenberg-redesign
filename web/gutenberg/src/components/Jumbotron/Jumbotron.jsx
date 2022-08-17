import { useState } from "react";

const Jumbotron = () => {
    const [query, setQuery] = useState('Science fiction')

    return(
        <div className="container mx-auto text-right">
            <h1 className="text-8xl mw-6/12">I want to read</h1>
            <input type="text" 
            name="name" 
            className="text-orange-400 mw-6/12 focus:outline-0 decoration-orange-400 text-8xl text-right font-bold underline"
            value={query} onChange={event => setQuery(event.target.value)} />
        </div>
    )

}
export default Jumbotron;