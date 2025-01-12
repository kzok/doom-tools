import React from "react";

/** React hooks to generate random UUID. */
export const useUUID = (): string => React.useMemo(() => crypto.randomUUID(), []);
