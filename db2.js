var videos = [
  {
    image: 'https://proginvert.github.io/1D-RPG-Constructor/images2.jpg',
    name: 'vid1',
	author: 'bojik',
    comments: [
      
    ],
    videos: [
      { source: 'video/les1.mp4', version: '1.0.0' }
    ]
  },
  
];

var comentators = [
  { name: 'bojik', image: 'profilimg/3985667a501d11f090f90699c18b75b2_1.jpg' },
  { name: 'Anni', image: 'profilimg/1501e91a501a11f0bf08c603efc17bf8_1.jpg' }
];

var musics = [
  {
    music: 'file:///C:/Users/Server/Downloads/Spazzmatica%20Polka.mp3',
    videos: [
      {
        name: 'vid1',
        version: '1.0.0',
        // Интервалы переведены в секунды для удобства JS: 
        // 0:00:00 -> 0, 0:00:10 -> 10, 0:00:30 -> 30, 0:01:10 -> 70
        times: [ ['0:00:00', '0:00:10'], ['0:00:30', '0:01:10'] ]
      }
    ]
  }
];
var playlists = {
  //'test': ['vid1', 'vid2'],
  '1rc-visual': ['vid2']
};
