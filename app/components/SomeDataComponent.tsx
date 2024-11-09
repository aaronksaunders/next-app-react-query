"use client";

import { useQuery } from "@tanstack/react-query";
import { getSomeData, insertSomeData, SomeData } from "../actions";
import { useState } from "react";
import Link from "next/link";

export const SomeDataComponent = () => {
  const [inputData, setInputData] = useState("");

  const handleAddData = async () => {
    await insertSomeData(inputData);
    setInputData("");
    refetch();
  };

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["some-data"],
    queryFn: getSomeData,
    staleTime: 5000, // Data stays fresh for 5 seconds
  });

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <div>
        {" "}
        <p>ADD SOME STUFF</p>
        <div className="flex gap-2">
          <input
            type="text"
            className="border border-gray-300 rounded p-1"
            placeholder="Enter some data"
            onChange={(e) => setInputData(e.target.value)}
            value={inputData}
          />
          <button
            onClick={handleAddData}
            className="border border-blue-500 rounded  text-sm font-bold px-2 py-1"
          >
            Add
          </button>
        </div>
        <div className="flex flex-col gap-2 border border-gray-300 rounded p-2 mt-4">
          {data?.data.map((item) => (
            <SomeDataItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SomeDataItem = ({ item }: { item: SomeData }) => {
  return (
    <Link href={`/some-data/${item.id}`}>
      <div className="border-b last:border-b-0 border-gray-300 p-2  hover:bg-gray-50">
        {item.id} - {item.data}
      </div>
    </Link>
  );
};
