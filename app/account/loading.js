'use client';
// import Spinner from './_components/Spinner';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div>
      {/* <div className="flex justify-center items-center text-3xl text-primary-200 ">
        loading ...
      </div> */}
      <div className="spinner"></div>
    </div>
  );
}
