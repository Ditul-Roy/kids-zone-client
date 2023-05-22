import React from 'react';
import useTitleBar from '../../shared/TitleBar/UseTitleBar';

const Blog = () => {
    useTitleBar('blog')
    return (
        <div className='my-10 mx-auto'>
            <h1 className='text-4xl text-center text-bold text-blue-600'>Some Frequncy ask question</h1>
            <div className='my-4'>
                <h1 className='text-2xl'>1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p><span className='text-xl'>Refresh token:</span> A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.</p>
                <p><span className='text-xl'>Access token: </span>The main purpose of using a refresh token is to considerably shorten the life of an access token. The refresh token can then later be used to authenticate the user as and when required by the application without running into problems such as cookies being blocked, etc. </p>
                <p>When acce token is expire, then client side could be promt to user login then agin to get new access token. Alternetivly, ther authorizetion could be issue a refresh token to the client application that lets it replace an expired access token with a new one</p>
            </div>

            <div className='my-4'>
                <h1 className='text-2xl'>2.Compare SQL and NoSQL databases?</h1>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>SQL</th>
                                    <th>NoSQL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>SQL is also pronounced as “S-Q-L” or as “See-Quel” and is primarily known to be a Relational Databas</td>
                                    <td>NoSQL is a distributed or Non-relational Database</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td>They are scalable vertically</td>
                                    <td>These are horizontally scalable</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td>SQL uses specialized DB hardware to enhance performance</td>
                                    <td>NoSQL uses commodity hardware</td>
                                </tr>
                                {/* row 4 */}
                                <tr>
                                    <td>Examples are Sqlite, MySql, Oracle, Postgres and MS-SQL</td>
                                    <td>Examples are Cassandra, MongoDB, BigTable, Redis, RavenDb, Hbase, Neo4j and CouchDb</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='my-4'>
                <h1 className='text-2xl'>3.What is express js? What is Nest JS?</h1>
                <p>
                    <span className='text-xl'>Exress js</span>Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.</p>
                <br />
                <p>
                    <span className='text-xl'>Nest js</span>Nest.js is one of the fastest-growing Node.js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node.js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</p>
            </div>
            <div className='my-4'>
                <h1 className='text-2xl'>4.What is MongoDB aggregate and how does it work?</h1>
                <p> MongoDB, the aggregation pipeline consists of stages and each stage transforms the document. When you need to do more complex aggregation, you can use the MongoDB aggregation pipeline (here’s a more detailed tutorial). Aggregation pipelines are collections of stages that, combined with the MongoDB query syntax, will allow you to obtain an aggregated result.</p>
            </div>
        </div>
    );
};

export default Blog;