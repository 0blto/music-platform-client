import { Song, SongView } from "./song";

export interface Album {
    title: string;
    genreId: string;
}

export interface AlbumView {
    id: string;
    artistId: string;
    title: string;
    creationDate: string;
    songsCount: number;
    likesCount: number;
}

export interface AlbumWithSongs {
    info: AlbumView;
    songs: SongView[];
}

