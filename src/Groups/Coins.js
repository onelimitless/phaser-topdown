import 'phaser';

export default class Coins extends Phaser.Physics.Arcade.StaticGroup {
  constructor (world, scene, children, spriteArray) {
    super(world, scene, children);
    this.scene = scene;

    // add coins to our group
    spriteArray.forEach((coin) => {
      coin.setScale(0.2);
      this.add(coin);
    });
    // this.refresh();
  }

  collectCoin (player, coin) {
    this.remove(coin);
    coin.destroy();
    // dispatch an event
    this.scene.events.emit('coinCollected');
  }
}