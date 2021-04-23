import {
    BeakerIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
  } from "@heroicons/react/solid";
import Image from "next/image";
import HeaderItem from "./HeaderItem";


export default function Header() {
  return (
    <div>
      <header className="flex flex-col sm:flex-row m-5
      justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem
            title="HOME" Icon={HomeIcon}
          />
          <HeaderItem
            title="TRENDING" Icon={LightningBoltIcon}
          />
          <HeaderItem
            title="LABS" Icon={BeakerIcon}
          />
          <HeaderItem
            title="PROFILE" Icon={UserIcon}
          />
          <HeaderItem
            title="SEARCH" Icon={SearchIcon}
          />
        </div>

        <Image className="object-contain"
          src="https://img.icons8.com/nolan/344/hulu.png"
          width={100}
          height={100}
        />
      </header>
    </div>
  );
}
