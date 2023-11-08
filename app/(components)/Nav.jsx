import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav">
        <div className="flex item-center space-x-4">
            <Link href="/">
                <FontAwesomeIcon icon={faHome} className="icon"></FontAwesomeIcon>
            </Link>

            <Link href="/TicketPage/new">
                <FontAwesomeIcon icon={faTicket} className="icon"></FontAwesomeIcon>
            </Link>
        </div>
        <div>
            <p className="text-default-text">Ehuerikenbaba@gmaol.com</p>
        </div>
    </nav>
  )
}

export default Nav