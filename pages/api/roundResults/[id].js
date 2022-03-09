export default async function handler(req, res) {
  const { query: { id } } = req;
  const resultsUrl = `https://www.thesportsdb.com/api/v1/json/2/eventsround.php?id=4328&r=${id}`;
  const teamsUrl = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League`;
  //get results for current premier league round
  const resultsData = await fetch(resultsUrl).then((response) => response.text()).then(result => JSON.parse(result));
  //since we don't have team icons in previous request, we need to grab'em with the new request
  const teamData = await fetch(teamsUrl).then((response) => response.text()).then(result => JSON.parse(result));
  
  //add team icons to resultsData
  resultsData.events.forEach(currentRound => {
      const homeTeamIcon = teamData.teams.find(i => parseInt(i.idTeam) === parseInt(currentRound.idHomeTeam));
      if (homeTeamIcon) {
          currentRound.homeTeamIcon = homeTeamIcon.strTeamBadge;
      }
      const awayTeamIcon = teamData.teams.find(i => parseInt(i.idTeam) === parseInt(currentRound.idAwayTeam));
      if (awayTeamIcon) {
          currentRound.awayTeamIcon = awayTeamIcon.strTeamBadge;
      }
  });
  
  res.status(200).json({data: resultsData});
}
