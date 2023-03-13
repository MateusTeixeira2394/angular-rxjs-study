import VolumeInfo from "./volumeInfo.interface";

export default interface Item {
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
}
