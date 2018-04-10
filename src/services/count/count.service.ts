import { AppStore } from '@/store';
import { Store } from 'vuex';

export class CountService {

  private $store: Store<AppStore>;

  constructor($store: Store<AppStore>) {
    this.$store = $store;
  }

  public increment(): void {
    this.$store.commit('countIncrement');
  }

}
