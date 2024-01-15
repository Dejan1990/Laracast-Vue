import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="space-y-6">
            <assignment-list title="In Progress" :assignments="filters.inProgress"></assignment-list>
            <assignment-list title="Completed" :assignments="filters.completed"></assignment-list>

            <assignment-create @add="add"></assignment-create>
        </section>
    `,

    data() {
        return {
            assignments: [],
        }
    },

    computed: { // sort of like methods that can be cashed
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },

    created() {
        fetch('http://localhost:5050')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments
            })
            
    },

    methods: {
        add(name) { //name is second parameter from this.$emit('add', this.newAssignment); name == this.newAssignment
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            })
        }
    },
}