import { socialMediaLinks } from '@data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedinIn,
  faYoutube,
  faGoogle,
  faFacebookF,
  faInstagram,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons'

// Map font awesome icon names to actual icons
const iconMap = {
  'fa-github': faGithub,
  'fa-linkedin-in': faLinkedinIn,
  'fa-youtube': faYoutube,
  'fa-google': faGoogle,
  'fa-facebook-f': faFacebookF,
  'fa-instagram': faInstagram,
  'fa-x-twitter': faXTwitter
}

export default function SocialMedia() {
  return (
    <div className="flex flex-wrap gap-4">
      {socialMediaLinks.map((media, index) => (
        <a
          key={index}
          href={media.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          style={{ backgroundColor: media.backgroundColor }}
          title={media.name}
        >
          <FontAwesomeIcon
            icon={iconMap[media.fontAwesomeIcon]}
            className="text-white text-lg"
          />
        </a>
      ))}
    </div>
  )
}
