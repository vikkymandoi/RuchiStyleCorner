import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { reject } from 'q';
import { VideoLogs } from '../utils/videoLogs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
 })
export class VideoLogsService  {
  private itemCollection: AngularFirestoreCollection<VideoLogs>;
  constructor();
  constructor(private afs?: AngularFirestore) {
    this.itemCollection = this.afs.collection<VideoLogs>('videologs');
  }

  fetchEntries(): Observable<VideoLogs[]> {
    console.log('Started Fetching via service and Collection');
    return  this.itemCollection.valueChanges();
  }

  public createEntry(item: VideoLogs) {
    console.log('inserting video Log {}', item);
    this.itemCollection.add(item).then(res => {
      console.log('Video Log Response {}', res);
    }, err => reject(err));
  }
}
