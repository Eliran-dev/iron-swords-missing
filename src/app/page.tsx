'use client'
import Image from 'next/image'
import {MainNav} from '../components/main-nav'
import {Search} from '../components/search'
import { AddMissing } from '../components/add-missing'
import { useState } from 'react';
import PersonData from './utils/types';
import { SearchResults } from '../components/searchResults';

export default function Home() {
  const [data, setData] = useState<(PersonData)[]>([]);

  return (
    <main className="flex flex-col min-h-screen p-4 sm:p-24">
    <div className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24">
      {/* <MainNav /> */}
      <Search setData={setData}/>
      <SearchResults data={data} />
    </div>
    {data.length == 0 && <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert align-self-center"
        src="/logo.jpg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />}
    </main>
  )
}
