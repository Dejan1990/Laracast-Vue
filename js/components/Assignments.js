import AssignmentList from "./AssignmentList.js"

export default {
    components: { AssignmentList },
    template: `
        <section class="space-y-6">
            <assignment-list title="In Progress" :assignments="filters.inProgress"></assignment-list>
            <assignment-list title="Completed" :assignments="filters.completed"></assignment-list>
        </section>
    `,

    data() {
        return {
            assignments: [
                { name: 'Read chapter 4', complete: true, id: 1 },
                { name: 'Finish Project', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 }
            ]
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
}