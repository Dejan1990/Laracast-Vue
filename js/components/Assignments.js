import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="flex gap-8">
            <assignment-list title="In Progress" :assignments="filters.inProgress">
                <assignment-create @add="add"></assignment-create>
            </assignment-list>
            <assignment-list title="Completed" :assignments="filters.completed" can-toggle></assignment-list>
        </section>
    `,

    data() {
        return {
            assignments: [
                {
                    name: 'Take a walk', complete: false, id: 1, tag: 'exercise',
                },
                {
                    name: 'Read chapter 4', complete: true, id: 2, tag: 'science',
                },
                {
                    name: 'Study', complete: false, id: 3, tag: 'math',
                },
            ],
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