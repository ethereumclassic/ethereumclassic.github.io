import { useEffect, useState } from "react";

export const withTwoPassRendering =
  (WrappedComponent) =>
  ({ children, ...rest }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, [setIsClient]);

    return (
      <WrappedComponent {...rest} key={isClient}>
        {children}
      </WrappedComponent>
    );
  };
