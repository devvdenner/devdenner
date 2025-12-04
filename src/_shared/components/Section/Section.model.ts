import React from 'react';

export interface ISectionModel extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
}
