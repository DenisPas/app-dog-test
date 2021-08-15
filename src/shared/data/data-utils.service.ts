import { Component, Vue } from 'vue-property-decorator';
import {IDog} from "@/shared/model/dog.model";

@Component
export default class DataUtils extends Vue {

  public get favoriteDogs():IDog[] {
    return this.$store.getters.favoriteDogs;
  }

  public filterDogs(response:any,dogs:IDog[] ):IDog[] {
    const dogsFromServer = response.message;
    dogsFromServer.forEach((link:string) => {
      if((this.favoriteDogs.filter((e:IDog) => e.link === link).length > 0)){
        dogs.push({ link, isFavorite: true })
      }
      else {
        dogs.push({ link, isFavorite: false });
      }
    });
    //@ts-ignore
    dogs = Array.from(new Set(dogs.map(JSON.stringify))).map(JSON.parse);
    return dogs
  }

}
