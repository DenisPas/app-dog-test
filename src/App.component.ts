import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Header from '@/components/Header/Header.vue';

 @Component({
	components: {
		Header,
	},
})
export default class App extends Vue {
	private get isLoading():boolean {
		return this.$store.getters.isLoading
	}

}
