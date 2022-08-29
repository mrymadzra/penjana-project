import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const navigate = useNavigate();

    return(
        <div>
            <div className="font-bold text-4xl">Landing Page Baru woii watper tu</div>
            <button className='border-2' onClick = {() => navigate('/myprofile')}>Go to my profile</button>
        </div>
    )
}