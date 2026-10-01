// ============================================================
//  THE LEAGUE — RULES  (the only file you need to edit)
//  - Edit text inside the quotes. Keep the commas and quotes.
//  - To add a rule: copy a whole {t:"...", d:"...", date:"..."} line
//    and put a comma after the one before it.
//  - To add a section: copy a whole {name:"...", rules:[ ... ]} block.
//  - Update "date" to the day you changed the rule (YYYY-MM-DD).
// ============================================================
var SECTIONS = [
  {name:"Making the playoffs", rules:[
    {t:"8-team playoff", d:"Eight teams make the playoffs.", date:"2026-10-01"},
    {t:"Spots 1–4: division winners", d:"The winner of each of the 4 divisions is an automatic lock. Best record wins the division; tiebreaker is most PF.", date:"2026-10-01"},
    {t:"Spots 5–8: next best records", d:"After the division winners, the next 4 teams with the best records get in. Tiebreaker is most PF.", date:"2026-10-01"}
  ]},
  {name:"Seeding", rules:[
    {t:"Seeds are set by Points For", d:"Once all 8 teams are set, seeds 1–8 are determined by most PF.", date:"2026-10-01"}
  ]},
  {name:"Round 1 matchups", rules:[
    {t:"Top seeds pick their opponent", d:"The 1 seed picks who to play from seeds 5–8. Then the 2 seed picks from the remaining teams in 5–8. Same for the 3 seed, then the 4 seed.", date:"2026-10-01"}
  ]}
];
