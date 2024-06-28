'use client';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount((count) => count + 1)}> add one</button>
    </div>
  );
}

export default Counter;
