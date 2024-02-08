'use client';

import { memo } from 'react';

import { useOthersConnectionIds } from '@/liveblocks.config';
import { Cursor } from './cursor';

const Cursors = () => {
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((connectId) => (
        <Cursor key={connectId} connectionId={connectId} />
      ))}
    </>
  );
};

export const CursorsPresence = memo(() => {
  return (
    <>
      {/* TODO: Draft pencil */}
      <Cursors />
    </>
  );
});

CursorsPresence.displayName = 'CursorsPresence';
