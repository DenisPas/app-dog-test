import { Component, Vue} from 'vue-property-decorator';
import DogGrid from "@/components/DogGrid/DogGrid.vue";
import {IDog} from "@/shared/model/dog.model";

@Component({
  components: {
    DogGrid,
  },
})
export default class Favorite extends Vue {

  public get favoriteDogs():IDog[] {
    return this.$store.getters.favoriteDogs;
  }

  public mounted(): void {
    window.onscroll = () => {
      return
    }
  }

  public editFavoriteDog(index:number){
    this.favoriteDogs[index].isFavorite = !this.favoriteDogs[index].isFavorite
    this.$store.dispatch('actionFavoriteDogs', this.favoriteDogs[index])
  }

}
