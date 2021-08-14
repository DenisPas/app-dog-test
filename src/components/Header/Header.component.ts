import {Component, Vue, Watch} from 'vue-property-decorator';

import {listBreeds} from '@/services/services';

@Component({
})
export default class Header extends Vue {

    public selectedDog:string = '';

    public breeds = {};

    @Watch('selectedDog')
    private watchSelectedDog(breed:string):void {
        if(breed && this.$route.params.breed !== breed ){
            this.$router.push({
                name: 'DogGridBreed', params:{ breed }
            });
        }

    }

    @Watch('$route')
    private urlChanged (route:any):void {
        if (route.name === "Favorite") {
            this.selectedDog = '';
        }
        else if (route.name === "Home") {
            this.selectedDog = '';
        }
    }

    public created(): void {
        this.loadBreeds();
    }

    public mounted(): void {
        if (this.$route.name === "Favorite") {
            this.selectedDog = '';
        }
        else if (this.$route.name === "Home") {
            this.selectedDog = '';
        }
        else if (this.$route.name === "DogGridBreed") {
            this.selectedDog = this.$route.params.breed;
        }
    }

    public loadBreeds(): void {
        listBreeds().then((response: any) => {
                this.breeds = response.message;
        });
    }
}
