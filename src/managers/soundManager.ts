import { sound } from "@pixi/sound";

export class SoundManager {
  private static instance: SoundManager;
  private _volume: number = 0.6;
  private _isMuted: boolean = false;
  private _sounds: Map<string, number> = new Map();

  private constructor() {}

  public static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  public play(soundName: string): void {
    if (!this._isMuted) {
      const soundVolume = this._sounds.get(soundName) || 1;
      sound.play(soundName, { volume: soundVolume * this._volume });
    }
  }

  public setVolume(volume: number): void {
    this._volume = Math.max(0, Math.min(1, volume));
    this._sounds.forEach((_, soundName) => {
      const soundVolume = this._sounds.get(soundName) || 1;
      sound.volume(soundName, soundVolume * this._volume);
    });
  }

  public mute(): void {
    this._isMuted = true;
    sound.muteAll();
  }

  public unmute(): void {
    this._isMuted = false;
    sound.unmuteAll();
  }
}

export const soundManager = SoundManager.getInstance();
