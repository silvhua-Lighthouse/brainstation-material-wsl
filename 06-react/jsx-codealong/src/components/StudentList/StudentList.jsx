import './StudentList.scss';
import Student from '../Student/Student';

function StudentList() {
    return (
    <>
    <section className="student-list">
        <Student/>
        <Student/>
        <Student/>
    </section>
    </>
    )
}

export default StudentList;