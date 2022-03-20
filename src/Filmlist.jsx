import React from 'react'; 


const Filmlist = ( {films} ) => {
    return (
        <section className='row justify-content-center mt-5'>
                    {films.map(film => (
                        <div className='col-md-8 ' key={film.id}>
                            <h3>{film.title} <span className='small'>{film.release_date}</span></h3> 
                            <p className='small'>{film.description}</p>
                        </div>
                    ))}
            </section>
    )
}

export default Filmlist; 