import { Chapter, Series } from '@tiyo/common';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '../../../../constants/routes.json';
import SeriesDetails from '../../SeriesDetails';
import { goToSeries } from '../../../../features/library/utils';
import { useSetRecoilState } from 'recoil';
import { seriesListState } from '../../../../state/libraryStates';
import { useNavigate } from 'react-router-dom';
import { ActionIcon, Group } from '@mantine/core';


type Props = {
  serieTitle: string;
  serieRow: Series;
  chapterRow: Chapter;
};

const SerieUpdateRow: React.FC<Props> = (props: Props) => {
  const setSeriesList = useSetRecoilState(seriesListState);
  const { serieTitle, serieRow, chapterRow } = props;
  const navigate = useNavigate();
  return (
    <div 
    style={{
      display: 'flex', 
      alignItems: 'center', 
      minHeight: '75px', 
      border: '1px solid black',
      transition: 'background-color 0.3s'
    }}
    onClick={() => {
      goToSeries(serieRow, setSeriesList, navigate);
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = '#333333';
      e.currentTarget.style.cursor = 'pointer';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = '';
      e.currentTarget.style.cursor = '';
    }}
    >
      <img src={serieRow.remoteCoverUrl} alt='Serie Cover' style={{maxHeight: '75px'}}></img>
      <a style={{padding: '0 15px'}}>{serieTitle}</a>
      <a style={{padding: '0 5px',color: '#d0bfff', backgroundColor: 'rgba(103, 65, 217, 0.2)', borderRadius: '32px'}}>Chapter: {chapterRow.chapterNumber}</a>
    </div>
  );
};


<Routes>
<Route path={`${routes.SERIES}/:id`} element={<SeriesDetails />} />
</Routes>

export default SerieUpdateRow;
