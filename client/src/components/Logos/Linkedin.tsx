import { Link } from "react-router-dom";

const Linkedin = ({ className }) => {
    return (
        <Link to={"https://www.linkedin.com/in/jephmari/"} target="_blank" rel="noopener noreferrer">
            <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.4541" y="2.15784" width="25.1447" height="25.1447" rx="12.5724" fill="#1275B1" />
                <path d="M11.9898 9.06555C11.9898 9.9048 11.2624 10.5851 10.365 10.5851C9.46767 10.5851 8.74023 9.9048 8.74023 9.06555C8.74023 8.2263 9.46767 7.54596 10.365 7.54596C11.2624 7.54596 11.9898 8.2263 11.9898 9.06555Z" fill="white" />
                <path d="M8.96243 11.7021H11.7398V20.1183H8.96243V11.7021Z" fill="white" />
                <path d="M16.2114 11.7021H13.434V20.1183H16.2114C16.2114 20.1183 16.2114 17.4688 16.2114 15.8122C16.2114 14.8178 16.551 13.8192 17.9057 13.8192C19.4366 13.8192 19.4274 15.1204 19.4203 16.1285C19.411 17.4462 19.4332 18.7909 19.4332 20.1183H22.2106V15.6764C22.1871 12.8402 21.448 11.5333 19.0166 11.5333C17.5727 11.5333 16.6776 12.1888 16.2114 12.7819V11.7021Z" fill="white" />
            </svg>
        </Link>
    );
}

export default Linkedin;