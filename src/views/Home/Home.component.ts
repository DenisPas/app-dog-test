import {Component } from 'vue-property-decorator';
import DogGrid from '@/components/DogGrid/DogGrid.vue'

import { allDog } from '@/services/services';
import {IDog} from "@/shared/model/dog.model";
import {mixins} from "vue-class-component";
import DataUtils from "@/shared/data/data-utils.service";

@Component({
  components: {
    DogGrid,
  },
})
export default class DogGridView extends mixins(DataUtils) {

  public dogs: IDog[] = [];

  public mounted(): void {
    this.loadDogs();
    window.onscroll = () => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.loadDogs();
      }
    }
  }

  public editFavoriteDog(index:number){
    this.dogs[index].isFavorite = !this.dogs[index].isFavorite
    this.$store.dispatch('actionFavoriteDogs', this.dogs[index])
  }

  public loadDogs() {
    this.$store.commit('setIsLoading', true)
    allDog().then((response: any) => {
      this.dogs = this.filterDogs(response, this.dogs)
      this.$store.commit('setIsLoading', false);
      });
  }
}
