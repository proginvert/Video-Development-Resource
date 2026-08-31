var videos = [
  {
    image: 'https://proginvert.github.io/1D-RPG-Constructor/images2.jpg',
    name: 'vid1',
	author: 'boj',
    comments: [
      { name: 'boj', text: 'hello all', ver: '1.0.0' }
    ],
    videos: [
      { source: 'file:///C:/Users/Server/Documents/StarGhosts%20-%20Bad%20Apple.mp4', version: '1.0.0' }
    ]
  },
  {
    image: 'https://proginvert.github.io/1D-RPG-Constructor/images3.jpg',
    name: 'vid2',
	author: 'meh',
    comments: [
      { name: 'Anni', text: 'awesome', ver: '0.5.0' }
    ],
    videos: [
      { source: 'https://proginvert.github.io/1D-RPG-Constructor/guide.mp4', version: '0.0.1' },
      { source: ['https://proginvert.github.io/Video-Development-Resource/videos/karabass/karabass edit1.vdr','https://proginvert.github.io/Video-Development-Resource/videos/karabass/karabass edit2.vdr','https://proginvert.github.io/Video-Development-Resource/videos/karabass/karabass edit3.vdr','https://proginvert.github.io/Video-Development-Resource/videos/karabass/karabass edit4.vdr'], version: '0.5.0' }
    ]//['https://proginvert.github.io/Video-Development-Resource/videos/meh/mex1.vdr','https://proginvert.github.io/Video-Development-Resource/videos/meh/mex2.vdr','https://proginvert.github.io/Video-Development-Resource/videos/meh/mex3.vdr','https://proginvert.github.io/Video-Development-Resource/videos/meh/mex4.vdr','https://proginvert.github.io/Video-Development-Resource/videos/meh/mex5.vdr','https://proginvert.github.io/Video-Development-Resource/videos/meh/mex6.vdr','https://proginvert.github.io/Video-Development-Resource/videos/meh/mex7.vdr','https://proginvert.github.io/Video-Development-Resource/videos/meh/mex8.vdr','https://proginvert.github.io/Video-Development-Resource/videos/meh/mex9.vdr'], version: '0.5.0' }
  }
];

var comentators = [
  { name: 'boj', image: 'profilimg/3985667a501d11f090f90699c18b75b2_1.jpg' },
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

};
