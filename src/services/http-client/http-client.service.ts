import { Rxios, rxiosConfig } from 'rxios';
import { Mock } from '../mock/mock.service';

const httpConfig: rxiosConfig = {
  baseURL: process.env.VUE_APP_API_URL,
};

let client: Rxios | Mock;
function getHandler(): Rxios | Mock {
  if (!client) {
    client = process.env.VUE_APP_MOCK ?
      new Mock(httpConfig) :
      new Rxios(httpConfig);
  }

  return client;
}

export const HttpClient = getHandler();
