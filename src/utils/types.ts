import { StaticImageData } from "next/image";

export type MemberType = {
  name: string;
  position: string;
  image: StaticImageData;
};

export type ProjectType = {
    name: string,
    slug: string,
    date: string,
    image: StaticImageData,
}