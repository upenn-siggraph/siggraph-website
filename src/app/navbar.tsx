import Image, {StaticImageData} from "next/image";
import SiggraphLogo from "@/resources/image/upenn-siggraph-logo.svg";

export default function Navbar() {
    return (
        <div className="px-16">
            <nav className="flex select-none flex-row items-center py-5 px-4">
                <Image
                    src={SiggraphLogo as StaticImageData}
                    alt="UPenn Siggraph"
                    width={300}
                />
            </nav>
        </div>
    )
}