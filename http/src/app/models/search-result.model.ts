export class SearchResult {

    id: string;
    title: string;
    description: string;
    thumbnailUrl: IThumbnail;
    videoUrl: string;

    constructor(obj?: any) {
      this.id = obj && obj.id || null;
      this.title = obj && obj.title || null;
      this.description = obj && obj.description || null;
      this.thumbnailUrl = obj && obj.thumbnailUrl || null;
      this.videoUrl = obj && obj.videoUrl || `https://youtube.com/watch?v=${ this.id }`;
    }

}

export interface IThumbnail {
  height: number;
  width: number;
  url: string;
}
