<ion-view view-title="Home">
  <ion-content>
    <h1>Livescore</h1>
   <p>Welkom op de mobiele web app! </p> 
   <p>Deze app zorgt er voor dat u makkelijk<br> informatie over uw app kunt opzoeken</p>
     <?php
    $uri = 'http://api.football-data.org/v1/soccerseasons/398/leagueTable';
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
  <?php foreach($fixtures['standing'] as $key): ?> <tr> 
  <td>
    <img style="height:30px;width:30px;"src="<?php echo $key['crestURI']; ?>">
  </td>
  <td><?php echo $key['teamName']; ?></td> 
  <td><?php echo $key['points']; ?></td> 
</tr> <?php endforeach; ?> 
</table>

<p value="<?php echo $key['teamName'];?>"></p>
  </ion-content>
</ion-view>
