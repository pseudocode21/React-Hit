import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/pseudocode21")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="flex flex-col items-center justify-center text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <div className="my-3">
        GitHub Followers: {data.followers ? data.followers : "1237"}
      </div>
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  );
}

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/pseudocode21");
  return response.json();
};
