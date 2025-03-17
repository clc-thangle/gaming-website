import { CollapsibleSection } from "../ui/collapsible-section";
import Link from "next/link";

export default function MobileAccordionMenu() {
  return (
    <div className="mb-8 flex flex-col gap-4">
      <CollapsibleSection title="Games">
        <ul className="space-y-2 pl-2">
          <li>
            <Link href="#" className="text-nepal text-sm hover:text-white">
              Game 1
            </Link>
          </li>
          <li>
            <Link href="#" className="text-nepal text-sm hover:text-white">
              Game 2
            </Link>
          </li>
          <li>
            <Link href="#" className="text-nepal text-sm hover:text-white">
              Game 3
            </Link>
          </li>
          <li>
            <Link href="#" className="text-nepal text-sm hover:text-white">
              Game 14
            </Link>
          </li>
        </ul>
      </CollapsibleSection>

      <CollapsibleSection title="About">
        <ul className="space-y-2 pl-2">
          <li>
            <Link href="#" className="text-nepal text-sm hover:text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#" className="text-nepal text-sm hover:text-white">
              Promotions
            </Link>
          </li>
          <li>
            <Link href="#" className="text-nepal text-sm hover:text-white">
              VIP
            </Link>
          </li>
          <li>
            <Link href="#" className="text-nepal text-sm hover:text-white">
              Help Center
            </Link>
          </li>
          <li>
            <Link href="#" className="text-nepal text-sm hover:text-white">
              Awards & Certificates
            </Link>
          </li>
          <li>
            <Link href="#" className="text-nepal text-sm hover:text-white">
              App
            </Link>
          </li>
        </ul>
      </CollapsibleSection>

      <CollapsibleSection title="Legal Information">
        <ul className="space-y-2 pl-2">
          <li>
            <Link href="#" className="text-nepal text-sm hover:text-white">
              General Terms & Conditions
            </Link>
          </li>
          <li>
            <Link href="#" className="text-nepal text-sm hover:text-white">
              Responsible Gaming Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="text-nepal text-sm hover:text-white">
              Sports Betting Rules
            </Link>
          </li>
          <li>
            <Link href="#" className="text-nepal text-sm hover:text-white">
              Privacy and Cookies Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="text-nepal text-sm hover:text-white">
              Payment Methods
            </Link>
          </li>
          <li>
            <Link href="#" className="text-nepal text-sm hover:text-white">
              Limits
            </Link>
          </li>
        </ul>
      </CollapsibleSection>
    </div>
  );
}
