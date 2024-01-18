import React from 'react'
import Body from './body/Body';
import Header from './Header';
import Count from './body/Count';
import Problem from './body/Problem';
import ToggleVisibility from './body/ToggleVisibility';
import CharacterCounter from './body/CharacterCounter';
const HeaderComponent = ({ darkMode ,setDarkMode}) => {
    const headerClass = darkMode ? "App-header header-dark" : "App-header header-light";
    return (
        <div className={headerClass}>
          <Header  darkMode={darkMode} setDarkMode={setDarkMode}/>
          <CharacterCounter />
          <Problem/>
          <Count />
          <ToggleVisibility />
          <Body/>
        {/* Header content */}
      </div >
    );
  };
export default HeaderComponent
