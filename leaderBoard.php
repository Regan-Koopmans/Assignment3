<!DOCTYPE html>
<html>
	<head>
		<title> Leaderboards</title>
		<meta charset="utf-8" />
		<link href="pong.css" rel="stylesheet" type="text/css" />
		<script src="pong.js" type="text/javascript"></script>
	</head>
	<h1> > Leaderboards<span class="cursor">|</span></h1>
	<hr>
	<body>
		<a id="leaderbtn" href="Pong.html"><-- Return to Game</a>
		<div align="center">

		<?php

			$file = fopen("scores.txt","rw");
			$data = fread($file,filesize("scores.txt"));
			$scores = array();

			$lines = explode("\n",$data);
			foreach ($lines as $line)
			{
				$tmp = explode(" ",$line);
				$scores[$tmp[0]] = $tmp[1];
			}

			arsort($scores);

			echo "<table>";
				echo "<th>Name</th>";
				echo "<th>Score</th>";

				foreach ($scores as $key => $value)
				{

    			echo "<tr>";
					echo "<td>" . $key . "</td>";
					echo "<td>" . $value . "</td>";
					echo "</tr>";
				}
			echo "</table>";

			fclose($file);

		?>
	</div>
	</body>
</html>
