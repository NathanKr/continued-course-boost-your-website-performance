import {  FC, FormEvent, useState } from "react";
import axios from "axios";
import IProxyCourseCoupon from "src/types/sales/i-proxy-course-coupon";
import IEncryptedCoupon from "src/types/sales/i-encrypted-coupon";
import dayjs from "dayjs";
import InternalRelativeApi from "src/types/e-internal-relative-api";
/*
todo nath
- styling
- validation (zod?)
*/

const DecryptCoupon: FC = () => {
  const [encryptedCoupon, setEncryptedCoupon] = useState<string>("");
  const [coupon, setcoupon] = useState<IProxyCourseCoupon | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEncryptedCoupon(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null); // Clear any previous errors
    setcoupon(null);

    try {
      const params: IEncryptedCoupon = { encrypted_coupon: encryptedCoupon };
      const response = await axios.get(`${InternalRelativeApi.admin}/decrypt-coupon`, {
        params,
      });

      setcoupon(response.data as IProxyCourseCoupon);
    } catch (error) {
      // console.error("Error decrypting coupon:", error);
      setError(
        "Error decrypting coupon. Please check the provided encrypted coupon."
      );
    }
  };

  return (
    <div>
      <h1>Decrypt Coupon</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Encrypted Coupon
          <br />
          <textarea
            name="encryptedCoupon"
            value={encryptedCoupon}
            onChange={handleInputChange}
            rows={4} // Adjust the number of rows as needed
            cols={60}
          />
        </label>
        <br />
        <button type="submit">Decrypt Coupon</button>
      </form>

      {/* Display errors or decrypted coupon in the DOM */}
      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <p>{error}</p>
        </div>
      )}

      {coupon && !error && (
        <div style={{ marginTop: "10px" }}>
          <h2>Decrypted Coupon:</h2>
          <p>{JSON.stringify(coupon)}</p>
          <h2>Formatted Local Date and Time:</h2>
          <p>Start Date: {(new Date(coupon.dtStart)).toLocaleString("he-IL")}</p>
          <p>End Date: {new Date(coupon.dtEnd).toLocaleString("he-IL")}</p>
          <p>Created Date: {new Date(coupon.dtCreated).toLocaleString("he-IL")}</p>
        </div>
      )}
    </div>
  );
};

export default DecryptCoupon;
