import Movie from '../domain/Movie';

describe('Movie', () => {
    test('creates movie and exposes labels', () => {
        const m = new Movie({
            id: 101,
            name: 'Мстители',
            originalName: 'The Avengers',
            price: 500,
            year: 2012,
            country: ['США'],
            tagline: 'Avengers Assemble!',
            genres: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
            duration: 137,
            posterUrl: 'https://example.com/avengers.jpg',
        });

        expect(m.id).toBe(101);
        expect(m.name).toBe('Мстители');
        expect(m.originalName).toBe('The Avengers');
        expect(m.price).toBe(500);
        expect(m.year).toBe(2012);
        expect(m.countriesLabel).toBe('США');
        expect(m.genresLabel).toBe('фантастика, боевик, фэнтези, приключения');
        expect(m.durationLabel).toBe('137 мин. / 2 ч 17 мин.');
    });

    test('country as string also works', () => {
        const m = new Movie({
            id: 1,
            name: 'Фильм',
            price: 1,
            year: 2000,
            country: 'Великобритания',
            tagline: 'Слоган',
            genres: ['драма'],
            duration: 90,
        });
        expect(m.countriesLabel).toBe('Великобритания');
    });

    test('invalid duration throws', () => {
        expect(() => new Movie({
            id: 1,
            name: 'X',
            price: 1,
            year: 2000,
            country: 'США',
            tagline: 'Y',
            genres: ['жанр'],
            duration: 0,
        })).toThrow('Movie: duration must be a positive number');
    });
});
