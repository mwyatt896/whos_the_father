import { useRecords } from '@puzzlehq/sdk';

export const useMsRecords = (address?: string) => {
  const { records } = useRecords({
    filter: {
      programIds: [
        'whos_the_father_v003.aleo',
        'codshak_pieces_v002.aleo',
        'multiparty_pvp_utils_v015.aleo',
      ],
      type: 'unspent',
    },
    address,
    multisig: true,
  });
  const msGameRecords = records?.filter(
    (record) => record.programId === 'whos_the_father_v003.aleo'
  );
  const msPuzzleRecords = records?.filter(
    (record) => record.programId === 'codshak_pieces_v002.aleo'
  );
  const msUtilRecords = records?.filter(
    (record) => record.programId === 'multiparty_pvp_utils_v015.aleo'
  );

  console.log([msGameRecords, msPuzzleRecords, msUtilRecords]);

  return { msPuzzleRecords, msGameRecords, msUtilRecords };
};
