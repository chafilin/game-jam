import { sound } from "@pixi/sound";

export class BackgroundMusicManager {
  private static instance: BackgroundMusicManager;
  private _volume: number = 0.3;
  private _musicTracks: string[] = [];
  private _currentTrackIndex: number = 0;

  private constructor() {}

  public static getInstance(): BackgroundMusicManager {
    if (!BackgroundMusicManager.instance) {
      BackgroundMusicManager.instance = new BackgroundMusicManager();
    }
    return BackgroundMusicManager.instance;
  }

  public addTrack(trackName: string): void {
    this._musicTracks.push(trackName);
  }

  public play(): void {
    if (this._musicTracks.length === 0) return;
    const trackName = this._musicTracks[this._currentTrackIndex];
    sound.play(trackName, {
      volume: this._volume,
      complete: () => {
        this._currentTrackIndex =
          (this._currentTrackIndex + 1) % this._musicTracks.length;
        this.play();
      },
    });
  }
}

export const backgroundMusicManager = BackgroundMusicManager.getInstance();
