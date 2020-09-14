import React from 'react';
import { selectSong } from '../actions'; //named export - curly braces, default export no curly braces 
import SongList from './SongList';
import SongDetail from './SongDetail';


const App = () => {
    return (
    <div className="ui container grid">
        <div style={{marginTop:'50px'}} className="ui row">
        <div className="column eight wide">
            <SongList />
        </div>
        <div className="column eight wide">
            <SongDetail />
        </div>
        </div>
        
    </div>
    );
};

export default App;


