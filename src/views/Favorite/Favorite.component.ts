import { Component} from 'vue-property-decorator';
import DogGrid from "@/components/DogGrid/DogGrid.vue";
import {mixins} from "vue-class-component";
import DataUtils from "@/shared/data/data-utils.service";

@Component({
  components: {
    DogGrid,
  },
})
export default class Favorite extends mixins(DataUtils) {

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
