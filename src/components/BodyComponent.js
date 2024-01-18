import React from 'react'
import Body from './body/Body';
import Header from './Header';
import Count from './body/Count';
import Problem from './body/Problem';
import ToggleVisibility from './body/ToggleVisibility';
import CharacterCounter from './body/CharacterCounter';
import InputField from './body/InputField';
const HeaderComponent = ({ darkMode ,setDarkMode}) => {
    const headerClass = darkMode ? "App-header header-dark" : "App-header header-light";
    return (
        <div className={headerClass}>
          <Header  darkMode={darkMode} setDarkMode={setDarkMode}/>
          <CharacterCounter />
          <Problem/>
          <InputField />
          <Count />
          <ToggleVisibility />
          <Body/>
          <Todo/>
        {/* Header content */}
      </div >
    );
  };
export default HeaderComponent;
