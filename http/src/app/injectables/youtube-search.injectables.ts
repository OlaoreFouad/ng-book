import { YoutubeSearchService } from './../services/youtube-search.service';
import { environment } from './../../environments/environment';

export const youtubeSearchInjectables: Array<any> = [
  { provide: YoutubeSearchService, useClass: YoutubeSearchService },
  { provide: 'YOUTUBE_API_KEY', useValue: environment.YOUTUBE_API_KEY },
  { provide: 'YOUTUBE_API_URL', useValue: environment.YOUTUBE_API_URL }
];
