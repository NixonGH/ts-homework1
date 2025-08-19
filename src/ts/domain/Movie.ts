import Buyable from './Buyable';

type Country = string | string[];

export default class Movie implements Buyable {
    readonly id: number;
    readonly name: string;
    readonly price: number;

    readonly year: number;
    readonly country: Country;
    readonly tagline: string;
    readonly genres: readonly string[];
    readonly duration: number;

    readonly originalName?: string;
    readonly posterUrl?: string;

    constructor(args: {
        id: number;
        name: string;
        price: number;
        year: number;
        country: Country;
        tagline: string;
        genres: string[];
        duration: number;
        originalName?: string;
        posterUrl?: string;
    }) {
        const {
            id, name, price, year, country, tagline, genres, duration, originalName, posterUrl,
        } = args;

        if (duration <= 0 || !Number.isFinite(duration)) {
            throw new Error('Movie: duration must be a positive number');
        }

        this.id = id;
        this.name = name;
        this.price = price;

        this.year = year;
        this.country = country;
        this.tagline = tagline;
        this.genres = [...genres];
        this.duration = duration;

        this.originalName = originalName;
        this.posterUrl = posterUrl;
    }

    get countriesLabel(): string {
        return Array.isArray(this.country) ? this.country.join(', ') : this.country;
    }

    get genresLabel(): string {
        return this.genres.join(', ');
    }

    get durationLabel(): string {
        const total = Math.trunc(this.duration);
        const h = Math.floor(total / 60);
        const m = total % 60;
        return `${total} мин. / ${h} ч ${m.toString().padStart(2, '0')} мин.`;
    }
}
