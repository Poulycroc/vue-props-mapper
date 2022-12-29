# Vue Props Mapper

### What the heck ?

If you're like you're probably tired to type tones of props like this 
```js
export default {
	//
	props: {
		circle: {
	      type: Boolean,
	      required: false,
	      default: false,
	    },
	    round: {
	      type: Boolean,
	      required: false,
	      default: false,
	    },
	    plain: {
	      type: Boolean,
	      required: false,
	      default: false,
	    },
	    noPad: {
	      type: Boolean,
	      required: false,
	      default: false,
	    },
	    loading: {
	      type: Boolean,
	      required: false,
	      default: false,
	    },
	    loadingText: {
	      type: String,
	      required: false,
	      default: null,
	    },
	},

	//
}
```

That's why I've created this little helper `mapProps` it's returning the same result

```js
import mapProps from '~/helpers/mapProps.js'

export default {
	//
	props: {
		...mapProps(['circle', 'round', 'plain', 'noPad', 'loading', 'loadingText'], {
		      type: Boolean,
		      required: false,
		      default: false,
		 })
	},
	//
}
```
> **Note:** or `'~/helpers/mapProps.js'` or from your `npm` 


### Usage and installation

#### If you're using `npm`

Add in your `package.json` 
```json
"dependencies":  {
	"@poulycroc/vue-props-mapper":  "git+https://github.com/Poulycroc/vue-props-mapper.git",
},
```
then
```bash
npm install
```
in your component
```html
<script>
import mapProps from '@poulycroc/vue-props-mapper'

export default {
	//
	props: {
		...mapProps(['items', 'selecteds'], {
		      type: Array,
		      required: true,
		      default: () => [],
		 })
	},
	//
}
</script>
```
