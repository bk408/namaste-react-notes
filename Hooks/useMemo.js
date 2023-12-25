import React, { useMemo } from 'react';

const MyComponent = ({ data }) => {
  const processedData = useMemo(() => expensiveFunction(data), [data]);

  return (
    <div>
      {/* Use processedData in your component */}
    </div>
  );
};
