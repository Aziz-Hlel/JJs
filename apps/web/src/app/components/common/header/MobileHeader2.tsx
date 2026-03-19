'use client';

import { itemsNavbar } from '@/app/hooks/data-navbar';
import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Clover, ChevronRight } from 'lucide-react';

const MobileHeader2 = ({ handleLinkClick }: { handleLinkClick: () => void }) => {
  const [currentPage, setCurrentPage] = useState('/');

  const handleNavigation = (link: string) => {
    setCurrentPage(link);
    handleLinkClick();
  };

  return (
    <div className="flex flex-col w-full pb-8 pt-2 gap-2">
      {itemsNavbar.map((item) => {
        const isActive = item.link === currentPage;

        return (
          <Link
            key={item.title}
            href={item.link}
            onClick={() => handleNavigation(item.link)}
            className={cn(
              'group flex items-center justify-between w-full p-4 rounded-2xl transition-all duration-500 ease-out',
              'border border-transparent',
              'hover:bg-white/5 hover:border-white/10 active:scale-[0.98]',
              isActive ? 'bg-white/10 border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]' : '',
            )}
          >
            <div className="flex items-center">
              <div
                className={cn(
                  'flex items-center justify-center transition-all duration-500 ease-out',
                  isActive ? 'w-6 opacity-100 mr-3' : 'w-0 opacity-0 mr-0',
                )}
              >
                <Clover
                  className={cn(
                    'text-[#e7d8c3] shrink-0 transition-all duration-700 ease-out',
                    isActive ? 'rotate-0 scale-100 w-5 h-5' : '-rotate-90 scale-50 w-0 h-0',
                  )}
                />
              </div>

              <span
                className={cn(
                  'text-[12px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300',
                  isActive ? 'text-[#e7d8c3]' : 'text-[#e7d8c3]/60 group-hover:text-[#e7d8c3]/90',
                )}
              >
                {item.title}
              </span>
            </div>

            <ChevronRight
              className={cn(
                'w-4 h-4 transition-all duration-300',
                isActive
                  ? 'text-[#e7d8c3] translate-x-0 opacity-100'
                  : 'text-[#e7d8c3]/40 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100',
              )}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default MobileHeader2;
