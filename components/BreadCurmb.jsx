"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Breadcrumb = () => {
  const router = useRouter();
  const [pathSegments, setPathSegments] = useState([]);

  useEffect(() => {
    if (router.asPath) {
      const segments = router.asPath
        .split('/')
        .filter(Boolean)
        .map(decodeURIComponent);
      setPathSegments(segments);
    }
  }, [router.asPath]);

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    ...pathSegments.map((segment, index) => ({
      name: segment.replace(/-/g, ' '),
      href: `/${pathSegments.slice(0, index + 1).join('/')}`,
    })),
  ];

  return (
    <nav className="bg-gray-100 p-3 rounded-md" aria-label="Breadcrumb">
      <ol className="list-none flex space-x-2">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
            <Link href={breadcrumb.href}
                className={`${
                  index === breadcrumbs.length - 1
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {breadcrumb.name}
    
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
