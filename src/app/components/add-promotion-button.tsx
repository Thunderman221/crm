'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/button';

export interface AddPromotionButtonProps {
  companyId: string;
}

const AddPromotionButton = ({ companyId }: AddPromotionButtonProps) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(`/companies/${companyId}/new-promotion`)}
    >
      Add promotions
    </Button>
  );
};

export default AddPromotionButton;
