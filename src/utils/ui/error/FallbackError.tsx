import type { FallbackProps } from "react-error-boundary";

export const FallbackError = ({ error }: FallbackProps) => {
  const _error: unknown = error;
  return (
    <div>
      <h2>エラーが発生しました。</h2>
      {_error instanceof Error ? _error.message : null}
    </div>
  );
};
