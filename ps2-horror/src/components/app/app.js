import "./app.css";
import Info from "../info/info";
import SearchPanel from "../search-panel/search-panel";
import List from "../list/list";

function App() {

    const data = [
        {name: "Silent Hill 2", rating: 89, id: "silent-hill-2", fav: false, play: false},
        {name: "Haunting Ground", rating: 67, id: "haunting-ground", fav: false, play: false},
        {name: "Fatal Frame 2", rating: 81, id: "fatal-frame-2", fav: false, play: false},
        {name: "Silent Hill 3", rating: 85, id: "silent-hill-3", fav: false, play: false}, 
        {name: "Resident Evil Code: Veronica X", rating: 84, id: "resident-evil-veronica", fav: false, play: false},
        {name: "Constantine", rating: 58, id: "constantine", fav: false, play: false},
        {name: "The Haunted Mansion", rating: 69, id: "haunted-mansion", fav: false, play: false}, 
        {name: "The X-Files: Resist or Serve", rating: 67, id: "x-files", fav: false, play: false}, 
        {name: "Lifeline", rating: 61, id: "lifeline", fav: false, play: false},
        {name: "The Thing", rating: 78, id: "the-thing", fav: false, play: false}, 
        {name: "Echo Night Beyond", rating: 60, id: "echo-night-beyond", fav: false, play: false},
        {name: "Obscure", rating: 65, id: "obscure", fav: false, play: false},
        {name: "Rule of Rose", rating: 59, id: "rule-of-rose", fav: false, play: false},
        {name: "Kuon", rating: 57, id: "kuon", fav: false, play: false},
        {name: "Fatal Frame", rating: 74, id: "fatal-frame", fav: false, play: false},
        {name: "Siren", rating: 72, id: "siren", fav: false, play: false},
        {name: "Silent Hill: Origins", rating: 70, id: "silent-hill-origins", fav: false, play: false},
        {name: "Clock Tower 3", rating: 69, id: "clock-tower-3", fav: false, play: false},
        {name: "Cold Fear", rating: 68, id: "cold-fear", fav: false, play: false},
        {name: "Blood Omen 2", rating: 67, id: "blood-omen-2", fav: false, play: false},
        {name: "Manhunt 2", rating: 67, id: "manhunt-2", fav: false, play: false},
        {name: "Soul Reaver 2", rating: 80, id: "soul-reaver-2", fav: false, play: false},
        {name: "Fatal Frame 3: The Tormented", rating: 78, id: "fatal-frame-3", fav: false, play: false},
        {name: "Silent Hill: Shattered Memories", rating: 77, id: "silent-hill-shattered-memories", fav: false, play: false},
        {name: "Manhunt", rating: 76, id: "manhunt", fav: false, play: false},
        {name: "Silent Hill 4: The Room", rating: 76, id: "silent-hill-the-room", fav: false, play: false},
        {name: "Legacy of Kain: Defiance", rating: 75, id: "legacy-of-kain-defiance", fav: false, play: false},
    ];

    return (
        <div className="app">
            <Info />
            <div className="list-wrapper">     
                <SearchPanel />
                <List data={data} />
            </div>
        </div>
    );
}

export default App;