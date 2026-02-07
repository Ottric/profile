import { getTranslations } from "next-intl/server";

import { Separator } from "@/components/ui/separator";

export async function Resume() {
  const t = await getTranslations("Resume");

  const informationText = t("information");
  const addressText = t("address");
  const contactText = t("contact");

  const objectivesText = t("objectives");
  const objDetailText = t("objDetail");

  const educationText = t("education");
  const universityText = t("university");
  const regionText = t("region");
  const degreeText = t("degree");

  const experienceText = t("experience");
  const sec_1 = t("sec_1");
  const detail_1 = t("detail_1");
  const sec_2 = t("sec_2");
  const detail_2 = t("detail_2");
  const sec_3 = t("sec_3");
  const detail_3 = t("detail_3");
  const sec_4 = t("sec_4");
  const detail_4 = t("detail_4");

  const activitiesText = t("activities");
  const topicText = t("topic");
  const eaiDetailText = t("eai_detail");

  const skillsText = t("skills");
  const technicalText = t("technical");
  const operatingSystemsText = t("os");
  const toolsText = t("tools");
  const serversText = t("servers");
  const frameworkText = t("framework");
  const programmingText = t("programming");
  const programmingLanguagesText = t("programmingLanguages");
  const scriptLanguagesText = t("scriptLanguages");
  const webText = t("web");
  const databasesText = t("databases");

  return (
    <>
      <div className="w-full pb-1 text-justify wrap-break-word hyphens-auto [text-justify:inter-character]">
        <h1 className="text-2xl font-bold">Patcharapon Tappakwan</h1>
        <p className="text-foreground/50 text-xl italic">พชรพล ทัพผักแว่น</p>
      </div>
      <Separator className="bg-foreground mb-4" />
      <div className="mb-4 w-full pb-1 text-justify wrap-break-word hyphens-auto [text-justify:inter-character]">
        <h2 className="mb-1 border-b-2 text-xl font-bold">{informationText}</h2>
        <p>{addressText}</p>
        <p>
          <b>{contactText}</b> <a href="tel:+666 5048 3001">+666 5048 3001</a> |{" "}
          <a href="mailto:patcharapon.tap@dome.tu.ac.th">patcharapon.tap@dome.tu.ac.th</a> |{" "}
          <a href="https://github.com/CorpusPon">GitHub</a>
        </p>
      </div>
      <div className="mb-4 w-full pb-1 text-justify wrap-break-word hyphens-auto [text-justify:inter-character]">
        <h2 className="mb-1 border-b-2 text-xl font-bold">{objectivesText}</h2>
        <p className="indent-8">{objDetailText}</p>
      </div>
      <div className="mb-4 w-full pb-1 text-justify wrap-break-word hyphens-auto [text-justify:inter-character]">
        <h2 className="mb-1 border-b-2 text-xl font-bold">{educationText}</h2>
        <p>
          <b>{universityText}</b> {regionText} <i className="text-foreground/50">2021&mdash;2026</i>
        </p>
        <p>{degreeText}</p>
      </div>
      <div className="mb-4 w-full pb-1 text-justify wrap-break-word hyphens-auto [text-justify:inter-character]">
        <h2 className="mb-1 border-b-2 text-xl font-bold">{experienceText}</h2>
        <b>{sec_1}</b> <br />
        <i className="text-foreground/50">Oct 2023&mdash;Dec 2023</i>
        <ul className="list-disc pl-6">
          {detail_1.split("\n").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <b>{sec_2}</b> <br />
        <i className="text-foreground/50">Jun 2024&mdash;Jul 2024</i>
        <ul className="list-disc pl-6">
          {detail_2.split("\n").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <b>{sec_3}</b> <br />
        <i className="text-foreground/50">Jan 2025&mdash;Apr 2025</i>
        <ul className="list-disc pl-6">
          {detail_3.split("\n").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          <li>
            <a href="https://github.com/6410685215/Traffy-Liff-Bot" target="_blank" rel="noopener noreferrer">
              https://github.com/6410685215/Traffy-Liff-Bot
            </a>
          </li>
        </ul>
        <b>{sec_4}</b> <br />
        <i className="text-foreground/50">Aug 2025&mdash;Dec 2025</i>
        <ul className="list-disc pl-6">
          {detail_4.split("\n").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4 w-full pb-1 text-justify wrap-break-word hyphens-auto [text-justify:inter-character]">
        <h2 className="mb-1 border-b-2 text-xl font-bold">{activitiesText}</h2>
        <b>{topicText}</b> <br />
        <i className="text-foreground/50">Nov 2023</i>
        <ul className="list-disc pl-6">
          {eaiDetailText.split("\n").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4 w-full pb-1 text-justify wrap-break-word hyphens-auto [text-justify:inter-character]">
        <h2 className="mb-1 border-b-2 text-xl font-bold">{skillsText}</h2>
        <b>{technicalText}</b>
        <ul className="list-none pl-6">
          <li>{operatingSystemsText}</li>
          <li>{toolsText}</li>
          <li>{serversText}</li>
          <li>{frameworkText}</li>
        </ul>
        <b>{programmingText}</b>
        <ul className="list-none pl-6">
          <li>{programmingLanguagesText}</li>
          <li>{scriptLanguagesText}</li>
          <li>{webText}</li>
          <li>{databasesText}</li>
        </ul>
      </div>
    </>
  );
}
