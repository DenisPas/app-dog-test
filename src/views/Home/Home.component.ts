import {Component, Vue, } from 'vue-property-decorator';
import DogGrid from '@/components/DogGrid/DogGrid.vue'

import { allDog } from '@/services/services';
import {IDog} from "@/shared/model/dog.model";

@Component({
  components: {
    DogGrid,
  },
})
export default class DogGridView extends Vue {

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
        const dogs = response.message;
        dogs.forEach((link:string) => {
          this.dogs.push({ link, isFavorite: false });
        });
      this.$store.commit('setIsLoading', false);
      });
  }
}
