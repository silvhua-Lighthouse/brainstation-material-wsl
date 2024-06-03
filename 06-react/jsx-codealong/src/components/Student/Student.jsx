import './Student.scss'

function Student() {
    return (
        <div className="student">
            <div className="student__content">
                <img 
                    className="student__image" 
                    src="https://img.icons8.com/ios/100/000000/test-account.png" 
                    alt="Test Student Account Image" />
            </div>
            <h4 className="student__title">Student Name</h4>
        </div>

    )
}

export default Student;