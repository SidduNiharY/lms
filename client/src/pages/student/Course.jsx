import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Course = () => {
    return (
        <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="relative">
                <img
                    src="https://img-c.udemycdn.com/course/750x422/3873464_403c_3.jpg"
                    className="w-full h-36 object-cover rounded-t-lg"
                    alt="Course"
                />
            </div>
            <CardContent className = "px-5 py-4 flex flex-col space-y-4">
                <h1 className="hover:underline font-bold text-lg truncate dark:text-white">NextJs Complete Course 2024</h1>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar className = "h-8 w-8">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h1 className = "font-medium text-sm dark:text-white">Siddu Nihar</h1>
                    </div>
                        <Badge className= "bg-blue-600 text-white px2 py-1 text-xs rounded-full">Advance</Badge>
                </div>
                <div className = "text-lg font-bold dark:text-white">
                    <span>₹499</span>
                </div>
            </CardContent>
        </Card>
    )
}


export default Course;