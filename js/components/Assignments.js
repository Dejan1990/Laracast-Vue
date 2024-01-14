import AssignmentList from "./AssignmentList.js"

export default {
    components: { AssignmentList },
    template: `
        <assignment-list title="In Progress" :assignments="inProgressAssignments"></assignment-list>
        <assignment-list title="Completed" :assignments="completedAssignments"></assignment-list>
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
        inProgressAssignments() {
            return this.assignments.filter(assignment => !assignment.complete)
        },

        completedAssignments() {
            return this.assignments.filter(assignment => assignment.complete)
        }
    },
}