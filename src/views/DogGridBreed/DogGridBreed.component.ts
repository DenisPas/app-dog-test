import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';

import { dogsByBreed } from '@/services/services';
import DogGrid from "@/components/DogGrid/DogGrid.vue";
import {IDog} from "@/shared/model/dog.model";
import DataUtils from '@/shared/data/data-utils.service';

@Component({
  components: {
    DogGrid,
  },
})
export default class DogGridBreed extends  mixins(DataUtils) {

  public dogs: IDog[] = [];

  public mounted(): void{
    if(this.$route.params.breed){
      this.loadDogsByBreed(this.$route.params.breed)
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.loadDogsByBreed(this.$route.params.breed)
        }
      }
    }
  }

  public editFavoriteDog(index:number){
    this.dogs[index].isFavorite = !this.dogs[index].isFavorite
    this.$store.dispatch('actionFavoriteDogs', this.dogs[index])
  }

  public loadDogsByBreed(breed:string): void {
    this.$store.commit('setIsLoading', true)
    dogsByBreed(breed).then((response: any) => {
      this.dogs = this.filterDogs(response, this.dogs)

      this.$store.commit('setIsLoading', false)
    });
  }

}
