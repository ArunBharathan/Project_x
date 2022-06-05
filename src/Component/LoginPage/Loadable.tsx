import React, { lazy, Suspense } from "react";
// import { LoginPage } from './index';

const LazyComponent = lazy(() =>
  import("./index").then((module) => ({ default: module.LoginPage }))
);

export function LoadingPage(props: any) {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <LazyComponent {...props} />
    </Suspense>
  );
}
