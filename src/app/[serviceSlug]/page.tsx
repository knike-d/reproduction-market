"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import type { ServiceListPageProps } from "@/page/ServiceList/ServiceListPage";
import { ServiceListPage } from "@/page/ServiceList/ServiceListPage";
import { FallbackError } from "@/utils/ui/Fallback/FallbackError";
import { FallbackPage } from "@/utils/ui/Fallback/FallbackPage";

export default function ServiceList({ params }: ServiceListPageProps) {
  return (
    <ErrorBoundary FallbackComponent={FallbackError}>
      <Suspense fallback={<FallbackPage />}>
        <ServiceListPage params={params} />
      </Suspense>
    </ErrorBoundary>
  );
}
