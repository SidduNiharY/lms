import Course from "./Course";

const myLearning = () => {

    const isLoading = false;
    const myLearningCourses = [1,2,3,4,5,6,7,8];

    return (
        <div className="max-w-4xl mx-10 my-24 md:px-0">
            <h1 className="font-bold text-2xl">My Learning</h1>
            <div className="my-5">
                {isLoading ? (
                    <MyLearningSkeleton />
                ) : myLearningCourses.length === 0 ? (
                    <p>You are not enrolled in any course.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {myLearningCourses.map((course, index) => (
                            <Course key={index} course={course} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default myLearning;

const MyLearningSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(3)].map((_, index) => (
            <div
                key={index}
                className="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 animate-pulse"
            ></div>
        ))}
    </div>
);