import { Injectable } from '@angular/core';
import { FirebaseObjectObservable,AngularFire} from 'angularfire2';

@Injectable()
export class ArticleService {
  article: FirebaseObjectObservable<any>;
  constructor(private af: AngularFire) { }

  getArticle(aritcleId): Promise<FirebaseObjectObservable<any>>{
    this.article=this.af.database.object('/ARTICLES/'+aritcleId);
    return Promise.resolve(this.article);
  }

}
