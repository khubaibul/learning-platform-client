import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="text-gray-700">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                            Some Question With Answer
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            The most common questions about Firebase and Node.
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="w-full lg:w-1/2 px-4 py-2">
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    what is cors?
                                </summary>

                                <span>
                                    CORS full meaning is Cross Origin Resource Sharing. CORS is an HTTP-header that allows a server to indicate any origins other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request.
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                                    Why are you using firebase? What other options do you have to implement authentication?
                                </summary>

                                <span>
                                    Firebase is more reliable than other option. Because it's a Google product. Google is more secured and trusty other than any. And also Firebase is developer+user friendly. That's why I am using Firebase. ML-SQL Server, Auth0, Okta, Amazon Cognito are also famous for authentication.
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    How does the private route work?
                                </summary>
                                <span>
                                    The private route component is similar to the public route, the difference is that redirect URL and authenticate condition.
                                    If the user is not authenticated or unauthorized he will be redirected to the login page or which conditional path given by developer. The user can only access the authenticated routes if he is authenticated  or authorized.
                                </span>
                            </details>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 py-2">
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    What is Node? How does Node work?
                                </summary>

                                <span className="px-4 py-2">
                                    Node is JavaScript runtime.
                                    Node is a used as back-end service while javascript works on the server-side. This way JavaScript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                                </span>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;