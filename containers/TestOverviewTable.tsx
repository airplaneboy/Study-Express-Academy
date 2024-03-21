'use client';
import { ColumnDef } from '@tanstack/react-table';

export type UserTest = {
  id: string;
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
};

export const columns: ColumnDef<UserTest>[] = [
  {
    accessorKey: 'testTitle',
    header: 'Title',
  },
  {
    accessorKey: 'numberOfTimesTaken',
    header: 'Times Taken',
  },
  {
    accessorKey: 'numberOfTimesPassed',
    header: 'Times Passed',
  },

  {
    accessorKey: 'isCompleted',
    header: 'Completed',
  },
  {
    accessorKey: 'numberOfQuestions',
    header: 'Number Of Questions',
  },
  {
    accessorKey: 'lastTaken',
    header: 'Last Taken',
    cell: ({ row }) => <span className='truncate'>{new Date(row.getValue('lastTaken')).toUTCString()}</span>,
  },
];
