import {Button} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import PersonData from "../app/utils/types";
import { sanitizeImageUrl} from "@/lib/utils";
import Link from "next/link";
import StatusPill from "./status-pill";
import SendEmailToAdminButton from "./ui/sendEmailToAdminButton";

export function PersonCard(data: PersonData) {

    const {firstName, lastName, contactName, identifyingDetails, contactPhone, image, lastSeen, notes, status, id} = data;

    const subject = `היי, ראיתי אדם שנראה לאחרונה ואשמח אם תצרי איתי קשר לגבי ` + ` ${firstName} ${lastName} ${id}`;

    return (

            <Card className="w-[350px] text-right" >
            <Link href={`/profile/${id}`}>
                <CardHeader>
                    <CardTitle>{firstName} {lastName}
                    </CardTitle>
                    <CardDescription>נראה לאחרונה {lastSeen}</CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Image className="aspect-[14/13] max-w-100 dark:drop-shadow-[0_0_0.25rem_#ffffff70] w-full rounded-2xl object-cover cursor-pointer"
                                width={200}
                                height={200}
                                unoptimized={true}
                                style={{objectPosition: '0 22%'}}
                                src={
                                    sanitizeImageUrl(image)} alt={firstName + " " + lastName} />
                        </div>
                    </div>
                </CardContent>
            </Link>
                <CardFooter className="flex justify-between">
                    <SendEmailToAdminButton text={'עדכן אותנו'} subject={subject} />
                    <span>
                        <StatusPill status={status} />
                    </span>

                </CardFooter>
            </Card>
    )
}
