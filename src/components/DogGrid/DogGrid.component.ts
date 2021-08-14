import {Component, Vue, Prop} from 'vue-property-decorator';


@Component({
})
export default class DogGrid extends Vue {
    @Prop()
    public dogs: [] | undefined

    public hover: number | string = '';

}
