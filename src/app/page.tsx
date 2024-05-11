"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { TopPage } from "@/page/Top/TopPage";
import { FallbackError } from "@/utils/ui/error/FallbackError";

export default function Top() {
  return (
    <ErrorBoundary FallbackComponent={FallbackError}>
      <Suspense fallback={<TopPage.Fallback />}>
        <TopPage />
      </Suspense>
    </ErrorBoundary>
  );
}
