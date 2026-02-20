import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { transactionHistoryPageQueryParamsSchema } from '@contracts/schemas/transactionHistory/transactionHistoryPageQuery';

const useQueryParams = () => {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());
  const parsedQueryParams = useMemo(() => transactionHistoryPageQueryParamsSchema.parse(params), [searchParams]);

  return {
    queryParams: parsedQueryParams,
  };
};

export default useQueryParams;
