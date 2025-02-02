'use client'
import React, { useState } from "react";

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

function SelectTabs() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-[1200px] mx-auto p-4">
      <TabsList className="text-purple-800 bg-slate-500  grid w-full grid-cols-2">
        <TabsTrigger value="account">Default Templates</TabsTrigger>
        <TabsTrigger value="password">AI Generated Templates</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="flex justify-between gap-4 mt-4 pb-4">
          {[1, 2, 3].map((index) => (
            <Card key={index} className="flex-shrink-0 w-[300px]">
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Make changes to your account here. Click save when you're done.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor={`name-${index}`}>Name</Label>
                  <Input id={`name-${index}`} defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor={`username-${index}`}>Username</Label>
                  <Input id={`username-${index}`} defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="password">
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
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
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

const SelectView: React.FC = () => {
    return(
        <div className="bg-gray-900 h-screen">
            <div className="flex justify-center items-center h-screen">
            <SelectTabs/>
            </div>
        </div>
    )
}
export default SelectView;