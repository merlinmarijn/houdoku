import React, { useEffect } from 'react';
import { ScrollArea, Text } from '@mantine/core';
import library from '../../../../services/library';
import SerieUpdateRow from './SerieUpdateRow';
import { useRecoilState } from 'recoil';
import { serieUpdatesState } from '../../../../state/libraryStates';




const SeriesUpdate: React.FC = () => {

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const renderLibrary = () => {
    const seriesList = library.fetchSeriesList();
    const [serieUpdate,setSerieUpdate] = useRecoilState(serieUpdatesState);
  
    return (
      <>
        {serieUpdate.map((update) => {
          if (update.chapters.length > 0) {
            console.log(update.chapters);
  
            // Use a unique key for each SerieUpdateRow
            return update.chapters.map((chapter, index) => (
              <SerieUpdateRow
                key={index}
                serieTitle={update.serie.title}
                serieRow={update.serie}
                chapterRow={chapter}
              />
            ));
          }
        })}
      </>
    );
  };
  
  

  
  

  const renderEmptyMessage = () => {
    return (
      <Text align="center" style={{ paddingTop: '30vh' }}>
        No updates yet to your {' '}
        <Text component="span" color="orange" underline={true} weight={700}>
          Library
        </Text>{' '}
        wait for more updates,
        <br />
        to refresh your library go to{' '}
        <Text component="span" color="orange" underline={true} weight={700}>
          Library
        </Text>{' '}
        and click{' '}
        <Text component="span" color="teal" weight={700}>
          refresh
        </Text>{' '}
      </Text>
    );
  };

  // useEffect(() => setSeriesList(library.fetchSeriesList()), [setSeriesList]);

  return (
    <>
      <ScrollArea style={{ height: 'calc(100vh - 24px - 72px)' }} pr="xl" mr={-16}>
        {100 > 0 ? renderLibrary() : renderEmptyMessage()}
      </ScrollArea>
    </>
  );
};

export default SeriesUpdate;