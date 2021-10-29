export type MapSizeType = 'small' | 'medium' | 'large';

export type GameMap = {
    type: string;
    name: string;
    size: MapSizeType;
    floors: number;
    keys: string[];
    images: string[];
}