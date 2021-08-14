import { Component, Vue } from 'vue-property-decorator';

import { dogsByBreed } from '@/services/services';
import DogGrid from "@/components/DogGrid/DogGrid.vue";
import {IDog} from "@/shared/model/dog.model";

@Component({
  components: {
    DogGrid,
  },
})
export default class DogGridBreed extends Vue {

  public dogs: IDog[] = [];

  public get favoriteDogs():IDog[] {
      return this.$store.getters.favoriteDogs;
  }

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
        const dogs = response.message;

        dogs.forEach((link:string) => {
          if((this.favoriteDogs.filter((e:IDog) => e.link === link).length > 0)){
            this.dogs.push({ link, isFavorite: true })
          }
          else {
            this.dogs.push({ link, isFavorite: false });
          }
        });
        //@ts-ignore
        this.dogs = Array.from(new Set(this.dogs.map(JSON.stringify))).map(JSON.parse);

      this.$store.commit('setIsLoading', false)
    });
  }

}
