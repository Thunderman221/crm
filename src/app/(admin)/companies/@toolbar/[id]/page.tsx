import React from 'react';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/search-input';
import AddPromotionButton from '@/app/components/add-promotion-button';

export interface PageProps {
  params: { id: string };
}

const Page = ({ params }: PageProps) => {
  <Toolbar action={<AddPromotionButton companyId={params.id} />}>
    <SearchInput />
  </Toolbar>;
};

export default Page;
