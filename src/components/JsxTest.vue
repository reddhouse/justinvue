<script>
import {mapGetters} from 'vuex'
import JsxTestChild from './JsxTestChild'
import ArtistSearch from './ArtistSearch'

export default {
  name: 'jsx-test-component',
  components: [
    JsxTestChild,
    ArtistSearch
  ],
  data () {
    return {
      msg: 'Who Dat?'
    }
  },
  computed: mapGetters({
    artists: 'artists',
    isBusy: 'isBusy'
  }),
  render (h) {
    return (
      <div class="jsx-test-component">
        <h2>Rendering JSX!</h2>
        <JsxTestChild propsSingle= { this.msg } />
        <h2>Type a first name and see a list of matching artists from Spotify</h2>
        <ArtistSearch />
        { this.isBusy
          ? <h1>Loading...</h1>
          : this.artists.map((item) => <p>{ item.name }</p>)
        }
      </div>
    )
  }
}
</script>
