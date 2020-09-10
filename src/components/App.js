import React from 'react';
import { selectSong } from '../actions'; //named export - curly braces, default export no curly braces 
import SongList from './SongList';


const App = () => {
    return (
    <div className="ui container grid">
        <div className="ui row">
        <div className="column eight wide">
            <SongList />
        </div>
        </div>
        
    </div>
    );
};

export default App;


