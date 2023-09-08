// Conditional Rendering

// Conditional Rendering Option-1
// export default function Todo({ task }) {
//     return <li>Name: {task}</li>
// }

// Conditional Rendering Option-2 using If else
// export default function Todo({ task, isDone }) {
//     if (isDone === true) {
//         return <li>Finished: {task}</li>
//     }
//     else {
//         return <li>Work On: {task}</li>
//     }
// }

// Conditional Rendering Option-3 using only If
// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work On: {task}</li>
// }

// Conditional Rendering Option-4 using Ternary Operator
// export default function Todo({ task, isDone }) {
//     return <li> {isDone ? 'Finished' : 'Work On'}: {task} </li>
// }

// Conditional Rendering Option-5 using && Operator
// export default function Todo({ task, isDone }) {
//     return <li>{task}: {isDone && 'Finished'}</li>
// }

// Conditional Rendering Option-6 using || Operator
// export default function Todo({ task, isDone }) {
//     return <li>{task}: {isDone || 'Do it Fast'}</li>
// }

// Conditional Rendering Option-7 using Fixed Variable
export default function Todo({ task, isDone }) {
    let listItem;
    if (isDone) {
        listItem = <li> Finished: {task} </li>
    } else {
        listItem = <li> Work On: {task} </li>
    }

    return listItem
}