
const Header = ({course}) => <h1>{course.name}</h1>

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Content = ({parts}) => parts.map(part => <Part key={part.id} part={part}/>)

const Total = ({parts}) => {
    const total = parts.map(part => part.exercises).reduce((total, exercises) => total + exercises)
    return <b>total of {total} exercises</b>
}

const Course = ({course}) => {
    return (
        <div>
            <Header course={course}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts} />
        </div>
    )
}

export default Course