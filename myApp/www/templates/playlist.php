<ion-view view-title="Playlist">
  <ion-content>
    <h1>nfefwfe</h1>
         <?php
    $uri = 'http://api.football-data.org/v1/soccerseasons/398/fixtures?matchday=20';
    $reqPrefs['http']['method'] = 'GET';
    $reqPrefs['http']['header'] = 'X-Auth-Token:68e5abb8860b467dba8e4c28f41ab20c';
    $stream_context = stream_context_create($reqPrefs);
    $response = file_get_contents($uri, false, $stream_context);
    $fixtures = json_decode($response, true);
    // echo "<pre>";
    // print_r($fixtures);
    // echo "</pre>";
?>


<table> 
  <?php foreach($fixtures['fixtures'] as $key)
  { ?> <tr> 
  <td><?php echo $key['homeTeamName']; ?></td> 
  <td><?php echo $key['awayTeamName']; ?></td> 
    <?php foreach($key['result'] as $values)
      { ?>
      <td><?php echo $values['goalsHomeTeam']; ?></td> 
      <td><?php echo $values['goalsAwayTeam']; ?></td> 
</tr> <?php }}   ?> 
</table>

<p value="<?php echo $key['teamName'];?>"></p>
  </ion-content>
</ion-view>
