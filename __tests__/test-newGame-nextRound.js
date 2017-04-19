/*
const nextRound = require('../app/components/NewGame_folder/NewGame_component.jsx');

test('nextRound calls startGame',()=>{
  expect(nextRound()).toBe(startGame());
});
*/
const sum = require('../app/components/Sample_component.jsx');
test('add 2+3 equals to 5',()=> {
  expect(sum(2,3)).toBe(5);
});
