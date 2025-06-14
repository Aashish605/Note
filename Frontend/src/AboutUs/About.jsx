
const About = () => {
    return (
        <>
            <div className="w-[85vw] mx-auto text-center mb-16 ">
                <article className="py-12 flex flex-wrap justify-evenly items-center gap-10 text-xl">
                    <div className="flex justify-center">
                        <img className="md:h-[70vh] h-72" src="./prof.svg" alt="loading" />
                    </div>

                    <div className="max-w-lg flex flex-col gap-5">
                        <h2 className="text-blue-600 text-3xl">What is Noteflix and what it does?</h2>
                        <div className="my-4">
                            Noteflix is a Web-based e-learning platform where you can find all study-related materials, including productive Note, class assignments, university update channels, study blogs, articles, question banks, solutions, important questions, and the career section. We built this platform to provide the best possible resource for students so that they can excel in their academic journey.
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
            </div>
        </>
    )
}

export default About
