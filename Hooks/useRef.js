
// Accessing DOM Elements:

import { useRef, useEffect } from "react";

function MyComponent() {
  const myInputRef = useRef();

  useEffect(() => {
    // Focus on the input element when the component mounts
    myInputRef.current.focus();
  }, []);

  return <input ref={myInputRef} />;
}


// Holding Mutable Values:

import { useRef, useState } from "react";

function MyComponent() {
  const counter = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    // Log the current render count without triggering a re-render
    console.log("Render Count:", renderCount);
    // Increment the counter without causing a re-render
    counter.current++;
  }, [renderCount]);

  return (
    <div>
      <p>Render Count: {renderCount}</p>
      <button onClick={() => setRenderCount(renderCount + 1)}>
        Increment Render Count
      </button>
    </div>
  );
}

