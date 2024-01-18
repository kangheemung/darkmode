import React from 'react'

function Header({ darkMode, setDarkMode }) {
    const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  return (
    <div>
       <header className="top">
            <h4>ここはheaderです。</h4>
            <button onClick={toggleDarkMode}>
            {darkMode ? 'ライトモード' : 'ダークモード'}
            </button>
        </header>
    </div>
  )
}

export default Header
