angular
  .module('superheroApp',[])
  .controller('heroesCtrl', [ heroController ])

function heroController () {
  this.heroes = heroData
}
