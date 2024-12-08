import React, { useState, useEffect } from 'react';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch courses from API or mock data
        const fetchCourses = async () => {
            const mockCourses = [
                { id: 1, name: 'Course 1', description: 'Description of course 1' },
                { id: 2, name: 'Course 2', description: 'Description of course 2' },
            ];
            setCourses(mockCourses);
        };

        fetchCourses();
    }, []);

    return (
        <div className="courses">
            <h2>Courses</h2>
            {courses.map((course) => (
                <div key={course.id} className="course-item">
                    <h3>{course.name}</h3>
                    <p>{course.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Courses;
