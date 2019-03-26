import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class DemoService {
  constructor(private http: HttpClient) {

  }
  testMethod():Observable<any> {
    return this.http.get('https://ime5fq2hn5.execute-api.us-east-1.amazonaws.com/Dev/?customerid=1234%27');
  }
}
