import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import Course from "./Course";

const profile = () => {

    const isLoading = false;
    const enrolledCourses = [1,2];

    return (
        <div className="max-w-4xl mx-auto px-4 my-24">
            <h1 className="font-bold text-2xl text-center md:text-left">Profile</h1>
            <div className="flex flex-col md:flex-row items-center  md:items-start gap-8 my-5">
                <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24 md:h-32 md:w-32 mb-4">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    <div className="mbg-2">
                        <h1 className="font-semibold text-gray-900 dark:text-gray-100 ml-2">
                            Name:
                            <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">Siddu Nihar</span>
                        </h1>
                    </div>
                    <div className="mbg-2">
                        <h1 className="font-semibold text-gray-900 dark:text-gray-100 ml-2">
                            Email:
                            <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">siddu@gmail.com</span>
                        </h1>
                    </div>
                    <div className="mbg-2">
                        <h1 className="font-semibold text-gray-900 dark:text-gray-100 ml-2">
                            Role:
                            <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">INSTRUCTOR</span>
                        </h1>
                    </div>
                    <Dialog>
                        <DialogTrigger>
                            <Button size='sm' className='mt-2'>Edit Profile</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit Profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile. Click Save when you're Done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label>Name</Label>
                                    <Input type="text" placeholder="Name" className="cols-span-3 w-max" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label>Image</Label>
                                    <Input type="file" accept="image/*" className="cols-span-3 w-72" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label>Name</Label>
                                    <Input type="text" placeholder="Name" className="cols-span-3 w-max" />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button disabled={isLoading}>
                                    {
                                        isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait
                                            </>
                                        ) : "Save Changes"
                                    }
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div>
                <h1 className = "font-medium text-lg">My Courses</h1>
                <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
                    {
                        enrolledCourses.length === 0 ?
                        <h1>You haven't enrolled Yet</h1>
                        :
                        (
                            enrolledCourses.map((course,index) => <Course key = {index}/>)
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default profile;