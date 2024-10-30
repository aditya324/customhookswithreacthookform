import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useFetchData from "./Hooks";
import MyForm from "./MyForm";

const MyComponent = () => {
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data:</h1>

      {loading ? (
        <div>
          <Skeleton height={30} width={200} count={5} />
        </div>
      ) : (
        data && (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        )
      )}
      <MyForm />
    </div>
  );
};

export default MyComponent;
