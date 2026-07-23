"use client";

import { MapPin } from "lucide-react";
import { useAppSelector } from "@/lib/redux/hooks";
import { selectUser } from "@/lib/redux/slices/userSlice";
import Button from "../ui/Button";

const Address = () => {
    const user = useAppSelector(selectUser);
    return (
        <div className="flex justify-between px-5 border px-2 py-3 rounded-xl border-(--border)">
            <div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                    <MapPin size={40} color="white" fill="orange" />
                    <div className="flex flex-col">
                        <p>Delivering To {user?.name ?? "Guest"}</p>
                        <h3 className="text-xs md:text-sm">
                            {user?.address
                                ? `${user.address.street}, ${user.address.city}`
                                : "No address added"}
                        </h3>
                    </div>
                </div>
            </div>
            <Button
                className="px-5 my-1.5 tracking-wider rounded-sm outline-0"
                whileTap={{ scale: 0.9 }}
                animate={{ borderWidth: 1, borderColor: "black", backgroundColor: "white", color: "black" }}
                whileHover={{ backgroundColor: "black", color: "white" }}
            >

                Change
            </Button>
        </div>
    );
};

export default Address;