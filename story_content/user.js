function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6CQocGrYxmA":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="projectsong.mp3";
audio.load();
audio.play();
audio.volume=0.2;
}

