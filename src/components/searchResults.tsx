"use client";
import PersonData from "../app/utils/types";
import { PersonCard } from "./person-card";

export function SearchResults({
  data,
  message,
}: {
  data: PersonData[];
  message: string;
}) {
  return data.length === 0 && message ? (
    <p>{message}</p>
  ) : (
    <div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {data.map((personData) => (
          <li
            key={personData.id}
            className="col-span-1 divide-y divide-gray-200 rounded-lg shadow"
          >
            <PersonCard {...personData} />
          </li>
        ))}
      </ul>
    </div>
  );
}
