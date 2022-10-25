import React from 'react';

const FAQ = () => {
    return (
        <div>
            <section className="text-gray-700">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                            Frequently Asked Question
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            The most common questions about how our course works and what
                            can do for you.
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="w-full lg:w-1/2 px-4 py-2">
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    How can we get the course access?
                                </summary>
                                <span>
                                    By purchasing premium you can get access to our course. For getting access you have to visit our website. Then pay the amount for your desired course. After your successful payment, you will get access.
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                                    How does this course's support work?
                                </summary>
                                <span>
                                    Well. We provide support to our students with their problems. Our instructors are always open for support.
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    Is this course access lifetime?
                                </summary>

                                <span>
                                    Yes. Our content access is life time.
                                </span>
                            </details>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 py-2">
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    Is there any discount now?
                                </summary>

                                <span className="px-4 py-2">
                                    No. If is there will be available any discount, we will give the update on our website. So keep your eye open.
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    How will the course work?
                                </summary>
                                <span className="px-4 py-2">
                                    The course will be based on module releases and daily tasks.
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    I need to speak directly. How can I get in touch?
                                </summary>

                                <span className="px-4 py-2">
                                    You can mail us on web.cse-from-home@gmail.com. Or you can contact via phone (+0019844654).
                                    If you want to visit us physically, feel free to come Lalkuthi Pak Darbar Sharif, 32No, Mymensingh.
                                </span>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;