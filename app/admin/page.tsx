import Image from "next/image";
import ig from "../../public/blusher.jpg";
import bg from "../../public/eyeliner.jpg";

export default function Admin(){



return(
<>

<div>
    Admin Page
</div>
<div>
    <Image src={ig} alt="justPhoto" height={300}/>
    <Image src={bg} alt="justPhoto" height={300}/>
</div>
 </>
)
}