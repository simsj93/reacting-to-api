import React from 'react'; 

const Peoplelist = ( {people} ) => {
    return (
        <section className='row justify-content-center mt-5'>
                    {people.map(people => (
                        <>
                        <div className='col-md-8' key={people.id}>
                             
                            <h3>{people.name} 
                            <span className='small'> {people.age} {people.gender}
                            <a href={people.url} target="_blank" ><button id="smol">Json</button></a>
                            </span>
                            </h3> 
                              
                          
                        </div>
                        </>
                    ))}
            </section>
    )
}

export default Peoplelist; 