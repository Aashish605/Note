
const About = () => {
    return (
        <>
            <div className="w-[85vw] mx-auto text-center mb-16 ">
                <h1 className="my-8 flex justify-center items-center text-orange-600 text-4xl">About Us</h1>
                <hr className="my-4" />

                <article className="py-12 flex flex-wrap justify-evenly items-center text-xl">
                    <div className="flex justify-center">
                        <img className="md:h-[70vh] h-72" src="https://hamrocsit.com/wp-content/themes/tucsitNote/assets/images/shapes/about.php?color=00af92" alt="loading" />
                    </div>

                    <div className="max-w-lg flex flex-col gap-5">
                        <h2 className="text-blue-600 text-3xl">What is Notefelix and what it does?</h2>
                        <div className="my-4">
                            Notefelix is a Web-based e-learning platform where you can find all study-related materials, including productive Note, class assignments, university update channels, study blogs, articles, question banks, solutions, important questions, and the career section. We built this platform to provide the best possible resource for students so that they can excel in their academic journey.
                        </div>
                        <div>
                            <h3 className="text-orange-600 text-2xl">Note</h3>
                            <div>
                                We provide chapterwise Note of included subjects consisting of handwritten and PDF formats. We tried our best to fulfill your quest for the best Note to enhance your learning experience!
                            </div>
                        </div>

                        <div>
                            <h3 className="text-orange-600 text-2xl mt-8">Solutions</h3>
                            <div className="my-4">
                                We tried to solve as many questions as possible, especially the important ones.
                            </div>
                        </div>
                    </div>
                </article>

                <hr className="my-4" />

                <section className="my-12 flex flex-col justify-center items-center">
                    <h3 className="text-orange-600 text-2xl mb-4">WHY TO CHOOSE US?</h3>
                    <div className="text-xl">
                        On this platform, you also have a chance to get career opportunities with us!
                    </div>
                </section>

                <footer className="text-center mt-24">
                    <h2 className="text-2xl text-blue-600 mb-2">Meet Our <span className="text-orange-600">Team</span></h2>
                    <div className="text-2xl underline decoration-blue-700 mb-6">Our developers!!!</div>

                    <div className="flex justify-evenly flex-wrap gap-5 pt-5">
                        <div className="text-center">
                            <img className="rounded-xl h-48 w-48 object-cover" src="/dev.png" alt="loading" />
                            <ul className="list-none p-0 mt-4">
                                <li>Aashish Khadka</li>
                                <li>aashishkhadka720@gmail.com</li>
                                <a href="https://github.com/Aashish605"><img className="mt-2 mx-auto" src="/github.svg" alt="GitHub" /></a>
                            </ul>
                        </div>
                        <div className="text-center">
                            <img className="rounded-xl h-48 w-48 object-cover" src="/dev.png" alt="loading" />
                            <ul className="list-none p-0 mt-4">
                                <li>Arjun Adhikari</li>
                                <li>pubgaxis4@gmail.com</li>
                                <a href="https://github.com/Arjun-Adhikari"><img className="mt-2 mx-auto" src="/github.svg" alt="GitHub" /></a>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default About
