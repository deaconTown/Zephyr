import { Avatar, Card, DropdownDivider, Label, TextInput } from "flowbite-react";
import React from "react";

const ProfileCard = () => {
    return (
        <div className="flex">
            <Card className="flex w-screen h-full md:w-full">
                <form className='flex-col gap-6 space-y-4'>
                    <div className="font-semibold text-2xl underline">
                        User Profile
                    </div>
                    
                    <div className="">
                        <Avatar size="lg" className="justify-end" rounded/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Name" />
                        </div>
                        <TextInput id="name" type="string" value='John Doe' disabled />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Email" />
                            <TextInput id="email" type="email" value='john_doe@gmail.com' disabled />
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 md:flex md:space-x-4 justify-between">
                            <div className="">
                                <Label value="Password" />
                                <TextInput id="password" type="password" value='Kingston' disabled />
                            </div>
                            <div>
                                <Label value="New Password" />
                                <TextInput id='newPassword' type="password" value='Kingston' disabled />
                            </div>
                        </div>
                    </div>
                    <div className="mb-2 block">
                        <Label value="Location"/>
                        <TextInput id='location' type="string" value="Kingston,Jamaica" disabled/>
                    </div>

                </form>
            </Card>
        </div>
    );
}

export default ProfileCard;