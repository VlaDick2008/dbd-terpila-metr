import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react';
import KillersJSON from './KillersJSON.json';
import { v4 as uuidv4 } from 'uuid';

const App: React.FC = () => {
  const [terpilaDescription, setTerpilaDescription] = React.useState<string>();
  const [terpilaSubtitle, setTerpilaSubtitle] = React.useState<string>();
  const [terpilaRaiting, setTerpilaRaiting] = React.useState<any>();
  const [terpilaPortrait, setTerpilaPortrait] = React.useState<string>();

  const killerList = [
    'Нюрса',
    'Хилбилли',
    'Майкл',
    'Трапер',
    'Призрак',
    'Охотница',
    'Доктор',
    'Садако',
    'Художница',
    'Сенобит',
    'Немезис',
    'Трюкач',
    'Близнецы',
    'Мор',
    'Палач',
    'Стрелок',
    'Они',
    'Гоустфейс',
    'Чума',
    'Легион',
    'Рин',
    'Клоун',
    'Свинья',
    'Фредди',
    'Буба',
    'Ведьма',
  ];
  const [killer, setKiller] = React.useState<string>(killerList[0]);

  React.useLayoutEffect(() => {
    for (let i = 0; i <= KillersJSON.length; i++) {
      if (KillersJSON[i]?.title === killer) {
        setTerpilaDescription(KillersJSON[i].description);
        setTerpilaSubtitle(KillersJSON[i].subtitle);
        setTerpilaRaiting(KillersJSON[i].terpila);
        setTerpilaPortrait(KillersJSON[i].portrait);
      }
    }
  }, [killer]);

  return (
    <div className="app_main-wrapper">
      <div className="app_faq">
        Сайт сделан по рофлу за 2 часа, не воспринимайте информацию слишком серьёзно |{' '}
        <a href="https://github.com/VlaDick2008">@VlaDick2008</a>
      </div>
      <div className="app_wrapper">
        <div className="app_content">
          <Autocomplete
            value={killer}
            onChange={(e, newKiller: any) => {
              setKiller(newKiller);
            }}
            disablePortal
            freeSolo
            id="combo-box-demo"
            className="app_search"
            options={killerList}
            sx={{ width: 200 }}
            defaultValue={'Охотник'}
            renderInput={(params) => <TextField {...params} />}
          />
          <h1 className="app_title">{killer}</h1>
          <p className="app_subtitle">{terpilaSubtitle}</p>
          <div className="app_description">{terpilaDescription}</div>

          <div className="app_raiting-block">
            <div className="app_raiting-text">Терпила: </div>
            {Array.from(Array(terpilaRaiting).keys()).map((i) => (
              <span key={uuidv4()} className="raiting-dot"></span>
            ))}
          </div>
        </div>
        <div className="app_killer">
          <img src={terpilaPortrait} alt="aboba" />
        </div>
      </div>
    </div>
  );
};

export default App;
