import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
 

const login = () => {
  return (
    <div>
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Sign Up</TabsTrigger>
            <TabsTrigger value="password">Login</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
            <Card>
                <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                    Make changes to your account here. Click save when you're done.
                </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="name">Username</Label>
                    <Input id="name" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="name">Email</Label>
                    <Input id="name" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="username">Password</Label>
                    <Input type = "password" id="username" />
                </div>
                </CardContent>
                <CardFooter>
                <Button>Save changes</Button>
                </CardFooter>
            </Card>
            </TabsContent>
            <TabsContent value="password">
            <Card>
                <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                    Change your password here. After saving, you'll be logged out.
                </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                </div>
                </CardContent>
                <CardFooter>
                <Button>Logi</Button>
                </CardFooter>
            </Card>
            </TabsContent>
        </Tabs>
  </div>
  )
}

export default login