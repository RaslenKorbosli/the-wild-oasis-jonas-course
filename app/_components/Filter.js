'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get('capacity');
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set('capacity', filter);

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    console.log(params.toString());
  }
  return (
    <div className="border border-primary-800 flex">
      <button
        onClick={() => handleFilter('all')}
        // className="px-5 py-2 hover:bg-primary-700"
        className={`${
          activeFilter === 'all' ? 'bg-primary-700' : ''
        } px-5 py-2 hover:bg-primary-700`}
      >
        All Cabins
      </button>
      <button
        onClick={() => handleFilter('small')}
        className={`${
          activeFilter === 'small' ? 'bg-primary-700' : ''
        } px-5 py-2 hover:bg-primary-700`}
      >
        1&mdash;3 guests
      </button>
      <button
        onClick={() => handleFilter('medium')}
        className={`${
          activeFilter === 'medium' ? 'bg-primary-700' : ''
        } px-5 py-2 hover:bg-primary-700`}
      >
        4&mdash;7 guests
      </button>
      <button
        onClick={() => handleFilter('large')}
        className={`${
          activeFilter === 'large' ? 'bg-primary-700' : ''
        } px-5 py-2 hover:bg-primary-700`}
      >
        8&mdash;12 guests
      </button>
    </div>
  );
}
