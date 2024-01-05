import { SongView } from "./song";

export interface Playlist {
    id: string,
    userCreatorId: string,
    title: string,
    creationDate: string,
    lastUpdated: string,
    likesCount: number,
    songsCount: number
}

export interface PlaylistInsert {
    title: string;
}

export interface PlaylistWithSongs {
    info: Playlist;
    songs: SongView[];
}