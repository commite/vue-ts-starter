import { rxiosConfig, Rxios } from 'rxios';
import { Observable } from 'rxjs/Observable';
import { Method, RequestParams } from '../../models/misc/mock';
import { MockHandlers } from './mock.handlers';

export class Mock {

  private handlers: MockHandlers;
  constructor(private options?: rxiosConfig) {
    this.handlers = new MockHandlers();
  }

  public get<T>(url: string, queryParams?: object): Observable<T> {
    return this.handleRequest('GET', {url, queryParams}) as Observable<T>;
  }
  public post<T>(url: string, body: object, queryParams?: object): Observable<T> {
    return this.handleRequest('POST', {url, body, queryParams}) as Observable<T>;
  }
  public put<T>(url: string, body: object, queryParams?: object): Observable<T> {
    return this.handleRequest('PUT', {url, body, queryParams}) as Observable<T>;
  }
  public patch<T>(url: string, body: object, queryParams?: object): Observable<T> {
    return this.handleRequest('PATCH', {url, body, queryParams}) as Observable<T>;
  }
  public delete(url: string, queryParams?: object): Observable<{}> {
    return this.handleRequest('DELETE', {url, queryParams});
  }

  private handleRequest<T>(method: Method, params: RequestParams): Observable<T|{}> {
    const mockResponse: Observable<T> | null = this.handlers.handle(method, params);

    if (mockResponse) {
      return mockResponse;
    } else {
      const rxios: Rxios = new Rxios(this.options);
      switch (method) {
        case 'DELETE':
          return rxios.delete(params.url, params.queryParams);
        case 'GET':
          return rxios.get(params.url, params.queryParams);
        case 'POST':
          return rxios.post(params.url, params.body as object, params.queryParams);
        case 'PUT':
          return rxios.put(params.url, params.body as object, params.queryParams);
        case 'PATCH':
          return rxios.patch(params.url, params.body as object, params.queryParams);
        default:
          throw new SyntaxError('Unrecognized http method');
      }
    }
  }
}
