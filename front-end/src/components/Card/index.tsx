import { IUser } from "@/@types/users.types";
import { IContact } from "@/contexts/contact/interfaces";
import Link from "next/link";

interface ICardProps {
  user: IContact;
}

export default function Card({ user }: ICardProps) {
  return (
    <>
      <li>
        <Link href={`/contacts/${user.id}`}>
          <a>
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            <p>{user.email}</p>
          </a>
        </Link>
      </li>
    </>
  );
}
