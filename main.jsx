import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const live=[
 {id:1,title:"Duke Cup • Semi Final",players:"NOVA × Viper",viewers:"1.8K",tag:"TOURNAMENT",thumb:"https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"},
 {id:2,title:"Sniper 1v1 • Best of 5",players:"Rex × Kairo",viewers:"842",tag:"FRIENDLY",thumb:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"},
 {id:3,title:"Ranked Grind • Legendary",players:"DukeNic",viewers:"526",tag:"LIVE",thumb:"https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"}
];

function App(){
 const [tab,setTab]=useState("home"); const [selected,setSelected]=useState(null);
 if(selected) return <Watch match={selected} back={()=>setSelected(null)}/>;
 return <div className="app">
  <header><div className="brand"><span className="logo">D</span><div><b>DUKE</b><small>LIVE</small></div></div><button className="search">⌕</button></header>
  <main>
   {tab==="home" && <Home open={setSelected}/>}
   {tab==="tournaments" && <Tournaments/>}
   {tab==="go" && <GoLive/>}
   {tab==="profile" && <Profile/>}
  </main>
  <nav>{[["home","⌂","Home"],["tournaments","🏆","Tournaments"],["go","●","Go Live"],["profile","◉","Profile"]].map(x=><button className={tab===x[0]?"active":""} onClick={()=>setTab(x[0])} key={x[0]}><i>{x[1]}</i><span>{x[2]}</span></button>)}</nav>
 </div>
}

function Home({open}){return <><section className="hero"><p>CODM COMMUNITY LIVE</p><h1>Watch the match.<br/><em>Feel every round.</em></h1><button className="primary" onClick={()=>open(live[0])}>Watch live now →</button></section><div className="sectionHead"><h2>Live now</h2><span>See all</span></div><div className="cards">{live.map(m=><article className="card" onClick={()=>open(m)} key={m.id}><div className="thumb" style={{backgroundImage:`url(${m.thumb})`}}><b>● LIVE</b><span>{m.viewers}</span></div><div className="cardbody"><small>{m.tag}</small><h3>{m.title}</h3><p>{m.players}</p></div></article>)}</div><div className="sectionHead"><h2>Upcoming</h2><span>Calendar</span></div><div className="upcoming"><b>DUKE NIGHT SHOWDOWN</b><span>Tonight · 9:00 PM</span><button>Remind me</button></div></>}

function Watch({match,back}){return <div className="watch"><button className="back" onClick={back}>← Back</button><div className="video"><div className="fakeplay">▶</div><div className="videolabel">LIVE FEED</div></div><div className="watchtitle"><div><small>{match.tag}</small><h1>{match.title}</h1><p>{match.players} · <b>1.8K watching</b></p></div><button className="follow">Follow</button></div><div className="score"><div>NOVA<br/><b>2</b></div><strong>VS</strong><div>VIPER<br/><b>1</b></div></div><div className="chat"><h3>Live chat</h3><p><b>Rex:</b> This round is crazy 🔥</p><p><b>Kairo:</b> Nova has the lead!</p><p><b>Nic:</b> GG everyone</p><div className="chatbox">Say something… <b>➤</b></div></div></div>}

function Tournaments(){return <><div className="pageTitle"><small>COMPETE & WATCH</small><h1>Tournaments</h1></div><div className="tour"><b>DUKE CUP #01</b><span>32 teams · 5v5 · Live</span><div className="bar"><i/></div><button className="primary">View bracket</button></div><div className="tour"><b>SNIPER CLASH</b><span>16 players · 1v1 · Starts 9 PM</span><div className="matchrow">Rex <strong>VS</strong> Kairo</div><button className="secondary">Set reminder</button></div></>}

function GoLive(){return <div className="form"><div className="pageTitle"><small>STREAM YOUR GAME</small><h1>Go Live</h1></div><label>Stream title<input placeholder="e.g. Sniper 1v1 • Best of 5"/></label><label>Type<select><option>Tournament</option><option>Friendly Match</option><option>Ranked</option></select></label><label>Players / teams<input placeholder="e.g. Rex × Kairo"/></label><button className="primary big">Create live room</button><p className="hint">The next version will connect this room to real gameplay broadcasting and low-latency video.</p></div>}

function Profile(){return <div><div className="profileHero"><div className="avatar">D</div><h1>DukeNic</h1><p>CODM creator · 1.2K followers</p><button className="secondary">Edit profile</button></div><div className="stats"><div><b>24</b><span>Streams</span></div><div><b>1.2K</b><span>Followers</span></div><div><b>18K</b><span>Views</span></div></div></div>}

createRoot(document.getElementById("root")).render(<App/>);