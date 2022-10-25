import React, { useState , useEffect} from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function ThankYouPage() {
    const [redirectSeconds, setRedirectSeconds] = useState<number>(7);
    const router = useRouter()
    useEffect(() => {
        
		if (redirectSeconds == 0) {
			router.push('/');
			return;
		}
	
		setTimeout(() => {
			setRedirectSeconds((redirectSeconds) => redirectSeconds - 1);
		}, 1000)

		// clear on component unmount
		return () => {
			clearTimeout(redirectSeconds);
		  };
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [redirectSeconds]);
  
    return (
     <> 
        <div className='mx-auto px-20 h-screen justify-center'>
			<h1>Your transaction has been processed! 
				Thank you so much for using Lamhi.</h1>
			<Image
				src='/thank-you.jpg'
				alt="thank you"
				width={500}
				height={500}
				/>
			<p>You can either click on the button to go back home or it will automatically redirect in {redirectSeconds} seconds</p>
			<button type="button" onClick={() => router.push('/dashboard')}>
				⬅️&nbsp;&nbsp; Go back home
			</button>
		</div>
     </>
    );
  }