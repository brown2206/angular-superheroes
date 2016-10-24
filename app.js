angular
  .module('superheroApp',[])
  .controller('heroesCtrl', [ heroController ])

  let heroData = [
    { name: 'Iron Man', phone_number: '555-1234', comics: 'Marvel', img_url: 'http://3o1vag3go95yqxhrk3yk15pv.wpengine.netdna-cdn.com/wp-content/uploads/2016/07/iron-man.jpg' },
    { name: 'Batman', phone_number: '555-4321', comics: 'DC', img_url: 'https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg' },
    { name: 'Captain America', phone_number: '292-6488', comics: 'Marvel', img_url: 'http://www.twincities.com/wp-content/uploads/2016/04/from-captain-america-civil-war-to-finding-dory-10-movies-to-look-forward-to-in-2016-734527.jpg' },
    { name: 'Wolverine', phone_number: '666-6666', comics: 'Marvel', img_url: 'https://i.annihil.us/u/prod/marvel/i/mg/9/00/537bcb1133fd7.jpg' },
    { name: 'Flash', phone_number: '888-9231', comics: 'DC', img_url: 'https://s-media-cache-ak0.pinimg.com/originals/bf/51/2d/bf512d2a0a425c3a0abc8a39798755eb.jpg' },
    { name: 'Wonder Woman', phone_number: '999-9999', comics: 'DC', img_url: 'https://s-media-cache-ak0.pinimg.com/originals/2d/9a/42/2d9a420b8d7c21fd8da2b5caba3f115a.jpg' }
  ]

function heroController () {
  this.heroes = heroData
}
