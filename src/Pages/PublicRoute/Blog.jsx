import React from 'react'

const Blog = () => {
  return (
    <>
      <div className="blog-container mt-20">
        <div className="q-and-a one w-full md:w-[80%] mx-auto py-10 px-14 my-8 bg-light">
           <h2 className='text:2xl md:text-3xl font-semibold mb-4'>
              1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
           </h2>
           <p>
               Ans. An access token serves as a permission slip granted by an authentication server to a client application, enabling it to access protected resources on a server. It's a short-term authorization key with a limited validity period. On the other hand, a refresh token is a durable credential that allows the client to obtain new access tokens without requiring the user to authenticate again. When it comes to storing these tokens on the client-side, it's important to prioritize security. Access tokens can be stored securely in methods like secure cookies or local storage, ensuring they are sent with each request to the server. However, refresh tokens, which are more sensitive, should be stored in a highly secure manner such as HTTP-only cookies or secure storage mechanisms. 
            </p>
        </div>
        <div className="q-and-a two w-full md:w-[80%]  mx-auto py-10 px-14 my-8 bg-light">
        <h2 className='text:2xl text-3xl font-semibold mb-4'>
              2. Compare SQL and NoSQL databases?
        </h2>
          <p>
              Ans. SQL databases are relational databases that store data in tables. Tables are made up of rows and columns, and each row represents a single record. SQL databases use a structured query language (SQL) to query and manipulate data. SQL is a powerful language that allows users to perform complex queries on data.NoSQL databases are non-relational databases that store data in a variety of formats, including key-value pairs, documents, and graphs. NoSQL databases do not use SQL, and instead use their own query languages or ad hoc queries to access data. NoSQL databases are often used for storing large amounts of data or for storing data that does not fit well into a relational model.The main difference between SQL and NoSQL databases is the way they store data. SQL databases store data in tables, while NoSQL databases store data in a variety of formats. This difference in data storage leads to a number of other differences between SQL and NoSQL databases, including the query language used, scalability, consistency, availability, and durability.
          </p>
        </div>
        <div className="q-and-a three w-full md:w-[80%]  mx-auto py-10 px-14 my-8  bg-light">
        <h2 className='text-2xl md:text-3xl font-semibold mb-4'>
              3. What is express js? What is Nest JS?
        </h2>
          <p>
              Ans. Express.js is a lightweight and versatile framework for Node.js used to create web applications and APIs. It offers a straightforward approach to handle HTTP requests, routing, and middleware integration, making it a popular choice for building server-side applications. In contrast, Nest.js is a robust and extensible framework that builds upon Express.js. It introduces additional features like dependency injection, TypeScript support, and a modular structure, allowing developers to create scalable and maintainable server applications with ease.
          </p>
        </div>
        <div className="q-and-a four w-full md:w-[80%]  mx-auto py-10 px-14 my-8 bg-light">
        <h2 className='text-2xl md:text-3xl font-semibold mb-4'>
              4. What is MongoDB aggregate and how does it work ?
        </h2>
          <p>
              Ans. The MongoDB aggregate framework is a versatile tool for performing advanced data analysis and manipulation on document collections. It operates through a pipeline structure, where data is processed sequentially through different stages. Each stage applies specific operations such as filtering, grouping, sorting, and transforming the data. The output of one stage serves as the input for the next, enabling complex data aggregations and transformations. This flexibility makes aggregate valuable for tasks like generating reports, conducting analytics, and extracting meaningful insights from MongoDB data. By leveraging the aggregate framework, developers can efficiently address intricate data processing requirements within MongoDB, empowering them with robust capabilities for data analysis and manipulation.
          </p>
        </div>
      </div>
    </>
  )
}

export default Blog