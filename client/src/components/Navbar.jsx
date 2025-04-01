import { Menu, School } from "lucide-react";
import { Button } from "./ui/button";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet, SheetClose, SheetContent, SheetFooter,
    SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import DarkMode from "@/DarkMode";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
    const user = true;
    return (
        <div className="h-16 bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
            {/* Desktop Navbar */}
            <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full">
                <Link to="/">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <School size={30} />
                        <h1 className="hidden md:block font-extrabold text-2xl">E-Learning</h1>
                    </div>
                </Link>
                {/* User Icons and Dark Mode */}
                <div className="flex items-center gap-8">
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 z-50 bg-white ">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Link to="myLearning">My Learning</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link to = "profile">Edit Profile</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>Log out</DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Dashboard</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="space-x-2">
                            <Button variant="outline">Login</Button>
                            <Button>SignUp</Button>
                        </div>
                    )}
                    <DarkMode />
                </div>
            </div>
            {/* Mobile Navbar */}
            <div className="flex md:hidden items-center justify-between px-4 h-full">
                <h1 className="font-extrabold text-2xl">E-Learning</h1>
                <MobileNavbar />
            </div>
        </div>
    );
};

export default Navbar;

const MobileNavbar = () => {
    const role = "instructor";
    return (
        <Sheet className="pl-3">
            <SheetTrigger asChild>
                <Button size="icon" className="rounded-full bg-gray-200 hover:bg-gray-300" variant="outline">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-start">
                <SheetHeader className="flex flex-row items-center justify-between w-80">
                    <SheetTitle>E-Learning</SheetTitle>
                    <DarkMode />
                </SheetHeader>
                <Separator className="mr-2" />
                <nav className="flex flex-col space-y-4 pl-4">
                    <span><Link to="myLearning">My Learning</Link></span>
                    <span><Link to = "profile">Edit Profile</Link></span>
                    <span>Log Out</span>
                </nav>
                {role === "instructor" && (
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">Dashboard</Button>
                        </SheetClose>
                    </SheetFooter>
                )}
            </SheetContent>
        </Sheet>
    );
};