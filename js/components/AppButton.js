export default {
    template: `
        <button 
            :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                'bg-blue-500 hover:bg-blue-700': type === 'primary',
                'bg-purple-500 hover:bg-purple-700': type === 'secondary',
                'bg-gray-500 hover:bg-gray-700': type === 'muted',
                'is-loading': processing
            }" 
            :disabled="processing"
        >
            <slot />    
        </button>
    `,

    props: {
        type: { // this type is the name of the prop
            type: String, // this type is the type of the prop
            default: 'primary'
        },

        processing: {
            type: Boolean,
            default: false
        }
    },

    
}