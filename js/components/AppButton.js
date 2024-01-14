export default {
    template: `
        <button class="bg-gray-200 hover:bg-gray-400 border rounded px-5 py-2 disabled:cursor-not-allowed" :disabled="processing">
            <slot />    
        </button>
    `,

    props: {
        type: { // this type is the name of the prop
            type: String, // this type is the type of the prop
            default: 'primary'
        }
    },

    data() {
        return {
            processing: true
        }
    },
}