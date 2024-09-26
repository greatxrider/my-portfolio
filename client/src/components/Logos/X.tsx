import { Link } from "react-router-dom";

const X = ({ className }) => {
    return (
        <Link to={"https://x.com/mrjephdev"} target="_blank" rel="noopener noreferrer">
            <svg className={className} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 512 512" id="twitter">
                <g clip-path="url(#a)">
                    <rect width="512" height="512" fill="#000" rx="60"></rect>
                    <path fill="#fff"
                        d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z">
                    </path>
                </g>
                <defs>
                    <clipPath id="a">
                        <rect width="512" height="512" fill="#fff"></rect>
                    </clipPath>
                </defs>
            </svg>
        </Link>
    );
}

export default X;