// ============================================================
//  THE LEAGUE — RULES  (the only file you need to edit)
//  - Edit text inside the quotes. Keep the commas and quotes.
//  - To add a rule: copy a whole {t:"...", d:"...", date:"..."} line
//    and put a comma after the one before it.
//  - To add a section: copy a whole {name:"...", rules:[ ... ]} block.
//  - Update "date" to the day you changed the rule (YYYY-MM-DD).
// ============================================================
var SECTIONS = [
  {name:"Making the Playoffs", rules:[
    {t:"8-Team Playoff", d:"Eight teams make the playoffs.", date:"2026-10-01"},
    {t:"Spots 1–4: Division Winners", d:"The winner of each of the 4 divisions is an automatic lock. Best record wins the division; tiebreaker is most PF.", date:"2026-10-01"},
    {t:"Spots 5–8: Next Best Records", d:"After the division winners, the next 4 teams with the best records get in. Tiebreaker is most PF.", date:"2026-10-01"}
  ]},
  {name:"Seeding", rules:[
    {t:"Seeds Are Set by Points For", d:"Once all 8 teams are set, seeds 1–8 are determined by most PF.", date:"2026-10-01"}
  ]},
  {name:"Playoff Matchups", rules:[
    {t:"Top Seeds Pick Their Opponent", d:"The 1 seed picks who to play from seeds 5–8. Then the 2 seed picks from the remaining teams in 5–8. Same for the 3 seed, then the 4 seed.", date:"2026-10-01"}
  ]},
  {name:"Trades", rules:[
    {t:"Trade Processing", d:"All trades are processed by the commissioner as soon as he is available to push the trade through. Trades can be processed at any time, as long as no player involved in the trade has already played that week.", date:"2026-10-01"},
    {t:"FAAB in Trades", d:"Trades can include FAAB money. Any FAAB agreed to in a trade must be reported to the commissioner, who updates it manually.", date:"2026-10-01"}
  ]},
  {name:"Keepers", rules:[
    {t:"Keeping a Player", d:"Each team may keep 1 player from the previous season. Players drafted in rounds 1–4 cannot be kept the following year. A kept player costs you the draft pick in the round that is half of the round he was drafted in last year. If he was drafted in an odd round, round up to the next even round first, then halve it. Examples: drafted in round 8, he is your round 4 pick; drafted in round 9, round up to 10, he is your round 5 pick. A player who was not drafted last year is kept as your round 8 pick.", date:"2026-10-01"}
  ]},
  {name:"Punishment", rules:[
    {t:"Losers Bracket Punishment", d:"The loser of the losers bracket must caddy for that year's league winner.", date:"2026-10-01"}
  ]}
];

// ============================================================
//  SCORING (copied from CBS league settings)
//  Each line is ["what", "points"]. Edit the same way as above.
// ============================================================
var SCORING_DATE = "2026-10-01";
var SCORING = [
  {name:"Scoring Policies", items:[
    ["Scoring System","Head-to-head, points"],
    ["Scoring per Period","Based on total stats each period"],
    ["Matchup Tiebreaker","None. Ties are allowed."]
  ]},
  {name:"Passing", items:[
    ["Passing TD","6"],
    ["Passing Yards","0.05 per yard (1 point per 20 yards)"],
    ["Passing Yards Bonus","Plus 3 at 300+ yards, plus 2 at 400+ yards"],
    ["Interception Thrown","-2"],
    ["Passing 2-Point Conversion","2"]
  ]},
  {name:"Rushing & Receiving", items:[
    ["Rushing TD / Receiving TD","6 each"],
    ["Rushing Yards / Receiving Yards","0.1 per yard"],
    ["Reception","1 point each (full PPR)"],
    ["Reception Bonus","Plus 1 at 5+ receptions, plus 1 at 10+"],
    ["Rushing + Receiving Yards Bonus","Plus 2 at 100+, plus 2 at 125+, plus 2 at 150+"],
    ["Rushing / Receiving 2-Point Conversion","2 each"],
    ["Fumble Lost (Incl. Special Teams)","-2"],
    ["Kick Return TD / Punt Return TD","6 each"]
  ]},
  {name:"Kicking", items:[
    ["Field Goal","3 pts per FG + 0.1 for every yard past 30 yards"],
    ["Missed Field Goal","0–19 yds: -3 · 20–39 yds: -2 · 40–50 yds: -1 · 51+ yds: 0"],
    ["Extra Point","1"],
    ["Missed Extra Point","-2"]
  ]},
  {name:"Team Defense / Special Teams", items:[
    ["Points Allowed","0–1: 8 · 2–10: 5 · 11–20: 3 · 21–29: 0 · 30+: -3"],
    ["Yards Allowed","Up to 150: 5 · 151–300: 3 · 301–500: 0 · 501+: -3"],
    ["Sack / Interception","2 each"],
    ["Fumble Recovery","2"],
    ["Forced Fumble","1"],
    ["Safety","4"],
    ["Defensive TD / Special Teams TD","6 each"],
    ["Blocked Field Goal / Blocked Punt","3 each"],
    ["Blocked Extra Point","1"]
  ]}
];

// ============================================================
//  SCHEDULE & PLAYOFF SETTINGS (copied from CBS league settings)
// ============================================================
var SCHEDULE_DATE = "2026-10-01";
var SCHEDULE = [
  {name:"Schedule", items:[
    ["Matchups per Period","1"],
    ["Playoffs Start","Week 15"],
    ["Playoffs Last","3 weeks"],
    ["Automatic Playoffs","No"],
    ["Archive Standings","Yes"]
  ]},
  {name:"Tiebreakers", items:[
    ["Standings Tiebreaker","Total points"],
    ["Division Winner Tiebreaker","Same as the standings tiebreaker"],
    ["Playoff Matchup Tiebreaker","Team with more points from reserves wins"]
  ]}
];

// ============================================================
//  TRANSACTION SETTINGS (copied from CBS league settings)
// ============================================================
var TRANSACTIONS_DATE = "2026-10-01";
var TRANSACTIONS = [
  {name:"Lineups", items:[
    ["Lineup Policy","Managers may set lineups and change players' positions from their eligible positions"],
    ["Lineup Deadline","Five minutes before gametime for each player"],
    ["IR Options","Only players with IR or PUP status may be placed into injured status"],
    ["Enforce Lineup Policy","Enforced when players come off the IR/PUP, etc."]
  ]},
  {name:"Add/Drops & Waivers", items:[
    ["Add/Drop Policy","Handled by a waivers process"],
    ["Add/Drop Deadline","Transactions lock five minutes before gametime for each player"],
    ["Waivers Run","Tuesday, Wednesday, Thursday, Friday and Saturday night"],
    ["FAB/Free Agent Options","Players only on FAB until first run has completed"],
    ["Free Agents Cost","Free agent transactions cost 0"],
    ["Waiver Reset","Waiver order doesn't reset (always based on the prior waivers run)"],
    ["Waiver Period","Dropped players remain on waivers for at least 1 day"],
    ["FAB Budget","$140 starting budget per team"],
    ["Winning Offers","Do not save winning offers"],
    ["Zero Offers","Not allowed"]
  ]},
  {name:"Trades", items:[
    ["Trade Policy","Trades must be approved by the commissioner"],
    ["Trade Deadline","No trades after 11:59 pm ET on 11/12/26"],
    ["Offseason Trades","Not allowed during the offseason"]
  ]}
];

// ============================================================
//  PAST CHAMPIONS (scrolls across the bottom of the site)
//  Each line is ["year", "name"]. Add the new champion at the end.
// ============================================================
var CHAMPIONS = [
  ["2007","TAUB"],["2008","WEISS"],["2009","HIRSCH"],["2010","LEVIN (M)"],
  ["2011","WEISS"],["2012","JACOBY"],["2013","COHEN"],["2014","FERDMAN"],
  ["2015","FERDMAN"],["2016","WEISS"],["2017","WEISS"],["2018","LEVIN (Z)"],
  ["2019","FERDMAN"],["2020","STOTTER"],["2021","LEVIN (Z)"],["2022","STOTTER"],
  ["2023","REINGOLD"],["2024","PRICE"],["2025","REINGOLD"]
];

// ============================================================
//  DRAFT BOARD TAB
//  - To change the picture: upload a new photo to the repo and put its
//    file name below (keep it simple, like draft-board-2027.jpg).
// ============================================================
var DRAFT_TITLE = "2026 Draft Board";
var DRAFT_IMAGE = "draft-board.jpg";
var DRAFT_DATE = "2026-10-01";
