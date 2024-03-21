import { GetServerSideProps, NextPage } from "next";
import IAdminQueryString from "src/types/i-admin-query-string";
import styles from "styles/admin.module.css";
import PageTabs from "src/types/e-page-tabs";
import EncryptCoupon from "src/components/encrypt-coupon";
import DecryptCoupon from "src/components/decrypt-coupon";

// --- nothing is passed. i am using getServerSideProps to enforce authorization
export interface IProps {}

/* 
    implement simple authorization via secret
*/
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { secret } = context.query as unknown as IAdminQueryString;

  const autorized = secret == process.env.COUPON_CRYPTO_KEY;

  const props: IProps = {};

  if (!autorized) {
    return {
      redirect: {
        destination: `/${PageTabs.home}`,
        permanent: false, // Set to true if the redirect should be permanent (301)
      },
    };
  }

  return {
    props, // will be passed to the page component as props
  };
};

// -- this is protect by key (same as the coupon key)
const Admin: NextPage<IProps> = () => {
  return (
    <div className={styles.admin}>
      <EncryptCoupon />
      <DecryptCoupon />
    </div>
  );
};

export default Admin;
