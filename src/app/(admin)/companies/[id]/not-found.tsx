'use-client';

import React from 'react';
import Link from 'next/link';

// export interface NotFoundProps {}

const NotFound = () => {
  return (
    <div>
      <p>Couldn`t found company</p>
      <Link href="/companies" className="text-blue-500">
        Back to Companies
      </Link>
    </div>
  );
};

export default NotFound;
