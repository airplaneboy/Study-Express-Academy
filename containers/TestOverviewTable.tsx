'use client';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { formatDistanceToNow } from 'date-fns';
import { LuArrowUpDown } from 'react-icons/lu';

export type UserTest = {
  testTitle: string;
  id?: string;
  numberOfTimesPassed?: number;
  numberOfTimesTaken?: number;
  scores?: {
    date?: string;
    numberOfCorrectAnswers: number;
    numberOfQuestion: number;
    average: number;
  }[];
  results?: { isCorrect: boolean; questionId: number; date?: string }[];
  numberOfQuestions?: number;
  isCompleted?: boolean;
  currentTest?: { selectedQuestions: any[]; shuffledChoices: any[]; currentTestResult: any };
  lastTaken: Date | string;
  slug: string;
};

export const columns: ColumnDef<UserTest>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'slug',
    header: 'Slug',
  },
  {
    accessorKey: 'testTitle',
    header: 'Title',

    cell: ({ row }) => <span className='w-full'>{row.getValue('testTitle')}</span>,
  },
  {
    accessorKey: 'numberOfTimesTaken',
    header: 'Times Taken',
  },
  {
    accessorKey: 'numberOfTimesPassed',
    header: 'Times Passed',
  },
  // {
  //   accessorKey: 'isCompleted',
  //   header: 'Completed',
  // },
  {
    accessorKey: 'numberOfQuestions',
    header: 'Number Of Questions',
  },
  {
    accessorKey: 'lastTaken',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='group transition-opacity duration-75'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Last Taken
          <LuArrowUpDown className='ml-2 h-4 w-4 group-hover:!text-gray-600 transition-colors duration-75' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <span className='truncate'>
        {formatDistanceToNow(new Date(row.getValue('lastTaken')), { addSuffix: true, includeSeconds: false })}
      </span>
    ),
  },
];
