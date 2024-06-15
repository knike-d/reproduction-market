"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { TopPage } from "@/page/Top/TopPage";
import { FallbackError } from "@/utils/ui/Fallback/FallbackError";
import { FallbackPage } from "@/utils/ui/Fallback/FallbackPage";

export default function Top() {
  return (
    <ErrorBoundary FallbackComponent={FallbackError}>
      <Suspense fallback={<FallbackPage />}>
        <TopPage />
      </Suspense>
    </ErrorBoundary>
  );
}
