import React from 'react'
import drone from "../Assets/drone.jpg"

function Projects() {
    return (

        <div>

            <div>
                <h1 className='project'>PROJECTS</h1>
            </div>
            <div className="portfolio_container">


                <article className='card'>
                    <div>
                        <img className='picture' src={drone} alt="" />
                    </div>
                    <h2 className='card-disc'>Dronotics Website</h2>
                    <div>
                        <a className='card-link-1' href="">Live Demo</a>
                        <a className='card-link-2' href="">Github</a>
                    </div>

                </article>

                <article className='card'>
                    <div>
                        <img className='picture' src={drone} alt="" />
                    </div>
                    <h2 className='card-disc'>Portfolio Website</h2>
                    <div>
                        <a className='card-link-1' href="">Live Demo</a>
                        <a className='card-link-2' href="">Github</a>
                    </div>

                </article>

                <article className='card'>
                    <div>
                        <img className='picture' src={drone} alt="" />
                    </div>
                    <h2 className='card-disc'>Online Cars Project</h2>
                    <div>
                        <a className='card-link-1' href="">Live Demo</a>
                        <a className='card-link-2' href="">Github</a>
                    </div>

                </article>
            </div>
        </div>

    )
}

export default Projects
