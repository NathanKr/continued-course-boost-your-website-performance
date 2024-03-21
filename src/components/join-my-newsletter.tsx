import Link from 'next/link';
import React from 'react';
import stylesContact from "styles/contact.module.css";


const JoinMyNewsletter = () => {
    return (
        <div className={stylesContact.Contact_info}>
              <Link
                title="Get information on my newsletter and subscribe"
                className={stylesContact.Contact_newsletter}
                href="/newsletter"
              >
                Join my newsletter
              </Link>
            </div>
    );
};

export default JoinMyNewsletter;