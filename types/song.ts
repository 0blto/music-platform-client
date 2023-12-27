export interface Song {
    title: string;
    genreId: string;
}

export interface SongView {
    id: string;
    genreId: string;
    title: string;
    creationDate: string;
    likesCount: number;
}