import { Spin } from "antd";
import { Suspense } from "react";

export const LoadingWrapper = ({ Component }) => {
  // Component prop has to be a lazy loaded component.

  return (
    <Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin size="large" />
        </div>
      }
    >
      <Component />
    </Suspense>
  );
};

export const SidebarLoadingWrapper = ({ Component, sideBarRef }) => {
  // Component prop has to be a lazy loaded component.

  return (
    <Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin size="large" />
        </div>
      }
    >
      <Component ref={sideBarRef} />
    </Suspense>
  );
};
