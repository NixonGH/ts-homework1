import Cart from '../service/Cart';
import Movie from '../domain/Movie';

const makeMovie = (id: number, price: number) =>
  new Movie({
    id,
    name: `Movie ${id}`,
    price,
    year: 2012,
    country: 'США',
    tagline: 'Test',
    genres: ['боевик'],
    duration: 120,
  });

describe('Cart basic operations', () => {
  test('new cart should be empty', () => {
    const cart = new Cart();
    expect(cart.items).toHaveLength(0);
    expect(cart.total()).toBe(0);
  });

  test('adding items increases cart size and total', () => {
    const cart = new Cart();
    cart.add(makeMovie(1, 300));
    cart.add(makeMovie(2, 200));

    expect(cart.items).toHaveLength(2);
    expect(cart.total()).toBe(500);
  });

  test('remove existing id works', () => {
    const cart = new Cart();
    cart.add(makeMovie(1, 300));
    cart.add(makeMovie(2, 200));
    cart.remove(1);

    expect(cart.items.map((i) => i.id)).toEqual([2]);
    expect(cart.total()).toBe(200);
  });
});
