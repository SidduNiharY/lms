import Login from './pages/login'
import './App.css'
import HeroSection from "./pages/student/HeroSection"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/mainLayout'
import Courses from './pages/student/Courses'
import MyLearning from './pages/student/myLearning'
import Profile from './pages/student/profile'

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element:
                    <>
                        <HeroSection />
                        <Courses />
                        {/* Courses */}
                    </>
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path : "mylearning",
                element : <MyLearning/>
            },
            {
                path: "profile",
                element : <Profile/>
            }
        ]
    }
])

function App() {

    return (
        <main>
            <RouterProvider router={appRouter} />
        </main>
    )
}

export default App
