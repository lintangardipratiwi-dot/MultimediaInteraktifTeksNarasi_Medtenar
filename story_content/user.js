function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6KLsRqyww5l":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="gamesong.mp3";
audio.load();
audio.play();
audio.volume=0.2;
}

