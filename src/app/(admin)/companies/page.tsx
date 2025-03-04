import React from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getCompanies } from '@/app/lib/api';
import getQueryClient from '@/app/lib/utils/getQueryClient';
import CompanyTable from '@/app/components/company-table';

// export interface PageProps {}

export default async function Page() {
  const QueryClient = getQueryClient();

  await QueryClient.prefetchQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });
  const dehydratedState = dehydrate(QueryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <CompanyTable />
    </HydrationBoundary>
  );
}
