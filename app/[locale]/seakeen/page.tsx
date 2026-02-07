import {
  BookmarkCheck,
  Calendar,
  Clock,
  ExternalLink,
  Gift,
  Hash,
  Heart,
  MapPin,
  Sparkles,
  Tag,
  Users,
} from "lucide-react";

import React from "react";

import { getTranslations } from "next-intl/server";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { FooterNav } from "../components/FooterNav";
import { HeaderNav } from "../components/HeaderNav";

interface Artist {
  id: string;
  name: string;
}

interface Event {
  eventId: string;
  date: string;
  time: {
    start: string;
    end: string;
  };
  eventName: string;
  category: string;
  type: string;
  openClose: string;
  location: {
    venue: string;
    avenue: string;
    assemblyPoint: string;
  };
  activity: string;
  giftsPolicy: string;
  hashtag: string[];
  summaryTrend: string;
  note: string;
  links: {
    main: string;
    details: string;
  };
  participants: string[];
}

interface ScheduleData {
  artists: Artist[];
  events: Event[];
}

export default async function SeaKeenPage() {
  const scheduleData: ScheduleData = await fetch("http://localhost:3000/api/seakeen-ai-schedule", {
    method: "GET",
    cache: "force-cache",
    next: { revalidate: 86400 },
  }).then((res) => res.json());

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getArtistNames = (participantIds: string[]) => {
    return participantIds
      .map((id) => scheduleData.artists.find((artist) => artist.id === id)?.name)
      .filter(Boolean)
      .join(", ");
  };

  const nextEvent = scheduleData.events.filter((event) => new Date(event.date) >= new Date());
  const completedEvent = scheduleData.events.filter((event) => new Date(event.date) < new Date());

  const t = await getTranslations("SEAKEEN");
  const description = t("description");
  return (
    <>
      <HeaderNav />
      <main className="relative z-20 m-16 flex flex-col items-center justify-center">
        <Card className="mb-12 w-full max-w-5xl">
          <CardContent className="items-start gap-4">
            <span className="flex flex-col">
              <h1 className="mb-8 flex items-center justify-between text-3xl font-bold">
                SeaKeen Schedule
                <Sparkles size={48} className="text-primary justify-self-end" />
              </h1>
              <div>
                {description.split("\n").map((line, index, array) => (
                  <React.Fragment key={index}>
                    {index === array.length - 1 && <br />}
                    <p className="text-muted-foreground mb-2 max-w-3xl text-start text-sm">{line}</p>
                  </React.Fragment>
                ))}
              </div>
            </span>
          </CardContent>
        </Card>
        <h1 className="my-8 text-3xl font-bold">Upcoming Events</h1>
        <div className="flex w-full max-w-5xl flex-col gap-8">
          {nextEvent.map((event) => (
            <Card key={event.eventId} className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2.5 text-2xl font-bold">
                  {event.eventName}
                  {event.giftsPolicy && (
                    <Badge className="ml-4 flex items-center gap-1 bg-green-100 text-green-800">
                      <Gift size={14} />
                      Gifts Allowed
                    </Badge>
                  )}
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-2 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {event.time.start}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {event.location.venue}, {event.location.avenue}
                  </div>
                </CardDescription>
              </CardHeader>
              <Separator className="my-2.5" />
              <CardContent className="grid grid-cols-2 gap-4">
                <span className="flex flex-col gap-2">
                  <div>
                    <h3 className="mb-1 flex items-center gap-1 font-semibold">
                      <Users size={14} />
                      Participants:
                    </h3>
                    <p>{getArtistNames(event.participants)}</p>
                  </div>
                  {event.activity && (
                    <div>
                      <h3 className="mb-1 flex items-center gap-1 font-semibold">
                        <Heart size={14} />
                        Activity:
                      </h3>
                      <p>{event.activity}</p>
                    </div>
                  )}
                  <div>
                    <h3 className="mb-1 flex items-center gap-1 font-semibold">
                      <Tag size={14} />
                      Category & Type:
                    </h3>
                    <p>
                      <Badge>{event.category}</Badge>{" "}
                      {event.type === event.category || !event.type ? null : <Badge>{event.type}</Badge>}
                    </p>
                  </div>
                </span>
                <span className="flex flex-col gap-2">
                  {event.hashtag.length > 0 && (
                    <div>
                      <h3 className="mb-1 flex items-center gap-1 font-semibold">
                        <Hash size={14} />
                        Hashtags & Keywords:
                      </h3>
                      <p>{event.hashtag.map((tag) => `${tag}`).join(" ")}</p>
                    </div>
                  )}
                  {event.giftsPolicy && (
                    <div>
                      <h3 className="mb-1 flex items-center gap-1 font-semibold">
                        <Sparkles size={14} />
                        Summary Trend:
                      </h3>
                      <p>{event.summaryTrend}</p>
                    </div>
                  )}
                </span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                {event.note && (
                  <div>
                    <h3 className="mb-1 font-semibold">Note:</h3>
                    <p>{event.note}</p>
                  </div>
                )}
                {event.links.main && (
                  <a
                    href={event.links.main}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary flex items-center gap-1 hover:underline"
                  >
                    <ExternalLink size={14} />
                    Main Link
                  </a>
                )}
                {event.links.details && (
                  <a
                    href={event.links.details}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary flex items-center gap-1 hover:underline"
                  >
                    <ExternalLink size={14} />
                    Details Link
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        <h1 className="my-8 text-3xl font-bold">Completed Events</h1>
        <div className="flex w-full max-w-5xl flex-col gap-8">
          {completedEvent.map((event) => (
            <Card key={event.eventId} className="bg-muted w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2.5 text-2xl font-bold">
                  {event.eventName}
                  {event.giftsPolicy && (
                    <Badge className="ml-4 flex items-center gap-1 bg-pink-100 text-pink-600">
                      <Gift size={14} />
                      Gifts Allowed
                    </Badge>
                  )}
                  <Badge className="ml-4 flex items-center gap-1 bg-green-100 text-green-800">
                    <BookmarkCheck size={14} />
                    Completed
                  </Badge>
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-2 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {event.time.start}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {event.location.venue}, {event.location.avenue}
                  </div>
                </CardDescription>
              </CardHeader>
              <Separator className="my-2.5" />
              <CardContent className="grid grid-cols-2 gap-4">
                <span className="flex flex-col gap-2">
                  <div>
                    <h3 className="mb-1 flex items-center gap-1 font-semibold">
                      <Users size={14} />
                      Participants:
                    </h3>
                    <p>{getArtistNames(event.participants)}</p>
                  </div>
                  {event.activity && (
                    <div>
                      <h3 className="mb-1 flex items-center gap-1 font-semibold">
                        <Heart size={14} />
                        Activity:
                      </h3>
                      <p>{event.activity}</p>
                    </div>
                  )}
                  <div>
                    <h3 className="mb-1 flex items-center gap-1 font-semibold">
                      <Tag size={14} />
                      Category & Type:
                    </h3>
                    <p>
                      <Badge>{event.category}</Badge>{" "}
                      {event.type === event.category || !event.type ? null : <Badge>{event.type}</Badge>}
                    </p>
                  </div>
                </span>
                <span className="flex flex-col gap-2">
                  {event.hashtag.length > 0 && (
                    <div>
                      <h3 className="mb-1 flex items-center gap-1 font-semibold">
                        <Hash size={14} />
                        Hashtags & Keywords:
                      </h3>
                      <p>{event.hashtag.map((tag) => `${tag}`).join(" ")}</p>
                    </div>
                  )}
                  {event.giftsPolicy && (
                    <div>
                      <h3 className="mb-1 flex items-center gap-1 font-semibold">
                        <Sparkles size={14} />
                        Summary Trend:
                      </h3>
                      <p>{event.summaryTrend}</p>
                    </div>
                  )}
                </span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                {event.note && (
                  <div>
                    <h3 className="mb-1 font-semibold">Note:</h3>
                    <p>{event.note}</p>
                  </div>
                )}
                {event.links.main && (
                  <a
                    href={event.links.main}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary flex items-center gap-1 hover:underline"
                  >
                    <ExternalLink size={14} />
                    Main Link
                  </a>
                )}
                {event.links.details && (
                  <a
                    href={event.links.details}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary flex items-center gap-1 hover:underline"
                  >
                    <ExternalLink size={14} />
                    Details Link
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <FooterNav />
    </>
  );
}
