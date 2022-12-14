import { Content } from './content';

test('It should be able to create a notification content', () => {
  const content = new Content('Você Recebeu uma solicitação de amizade');

  expect(content).toBeTruthy();
});

test('It not be should able to create a notification content with less than 5 characters', () => {
  expect(() => {
    new Content('aaa');
  }).toThrow();
});
