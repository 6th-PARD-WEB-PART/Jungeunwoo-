import Link from "next/link";
import styled from "styled-components";
import styles from "../styles/index.module.css";

const StyledButton = styled. button`
padding: 1.25rem 2.5rem;
border-radius: 1rem;
background-color: #3b82f6;
color: white;
font-size: 600;
transition: background-color 0.2s;

&:hover {
background-color: #2563eb;
}
`;

export default function Home(){
    return(
        <div className= "flex item-center justify-center h-screen bg-black">
            <div className="flex gap-8">
                <Link href= "/sc">
                    <StyledButton>styled</StyledButton>
                </Link>

                <Link href= "/tw">
                <button className="px-10 py-5 rounded-2xl bg-green-500 text-white text-lg font-semibold hover:bg-green-600 transition">
                    tailwind
                </button>
                </Link>

                <Link href= "/cm">
                    <button className={`${styles.moduleButton} text-lg`}>
                        module
                    </button>
                </Link>
            </div>
        </div>
    );
}