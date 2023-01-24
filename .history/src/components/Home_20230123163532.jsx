import React from 'react'
import vg from '../assets/2.webp'
import { AiFillGoogleCircle, AiFillYoutube, AiFillAmazonCircle, AiFillInstagram } from 'react-icons/ai'
const Home = () => {
    return (
        <>
            <div className="home">
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution To all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" className="src" />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Excepturi, tempora. Nostrum laudantium doloribus alias autem ducimus error. 
                        Officia necessitatibus laudantium nulla inventore adipisci saepe tempore. 
                        Ab hic sequi excepturi perferendis.
                    </p>
                </div>
            </div>
            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Beatae, dolorum! Recusandae, delectus corporis aperiam aspernatur sed nihil perspiciatis, 
                    iure ducimus excepturi fuga voluptatem aliquam explicabo consequatur quos quae. 
                    Aliquam, ipsam?
                </div>
            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: '0.3s'
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay: '0.5s'
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                        <div style={{
                            animationDelay: '0.7s'
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay: '1s'
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home
