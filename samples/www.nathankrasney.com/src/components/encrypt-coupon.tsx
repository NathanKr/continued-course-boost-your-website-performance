import { ChangeEvent, FC, useState } from "react";
import IProxyCourseCoupon from "src/types/sales/i-proxy-course-coupon";
import SaleCategory from "src/types/sales/e-sale-catgory";
import axios from "axios";
import IEncryptedCoupon from "src/types/sales/i-encrypted-coupon";
import dayjs from "dayjs";
import InternalRelativeApi from "src/types/e-internal-relative-api";

/*
todo nath
- styling
- validation (zod?)
- may be use data type for the date type (as i did for fight hamas tool)
*/

const EncryptCoupon: FC = () => {
  const [coupon, setCoupon] = useState<IProxyCourseCoupon>({
    dtStart: dayjs().valueOf(),
    dtEnd: dayjs().add(1, "day").valueOf(),
    dtCreated: dayjs().valueOf(),
    saleCategory: SaleCategory.midDiscount,
  });
  const [encryptedCoupon, setEncryptedCoupon] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // If the input is a date, convert it to milliseconds from 1970
    const parsedValue = name.startsWith("dt") ? Date.parse(value) : value;

    setCoupon((prevCoupon) => ({ ...prevCoupon, [name]: parsedValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setEncryptedCoupon(null);
      setError(null);

      // Make a GET request to the API to encrypt the coupon
      const response = await axios.get(
        `${InternalRelativeApi.admin}/encrypt-coupon`,
        {
          params: coupon,
        }
      );

      const obj = response.data as IEncryptedCoupon;

      // Set the encrypted coupon in the state
      setEncryptedCoupon(obj.encrypted_coupon);

      // You can optionally handle success or redirect the user
    } catch (error) {
      console.error("Error encrypting coupon:", error);
      setError("Error encrypting coupon. Please try again.");
    }
  };

  return (
    <div>
      <h1>Encrypt Coupon</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Start Date UTC:
          <input
            type="datetime-local"
            name="dtStart"
            value={new Date(coupon.dtStart).toISOString().substring(0, 16)} // Format for input type datetime-local
            onChange={handleInputChange}
            title="UTC"
          />
        </label>
        <br />
        <label>
          End Date UTC:
          <input
            type="datetime-local"
            name="dtEnd"
            value={new Date(coupon.dtEnd).toISOString().substring(0, 16)}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Created Date UTC:
          <input
            type="datetime-local"
            name="dtCreated"
            value={new Date(coupon.dtCreated).toISOString().substring(0, 16)}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Sale Category:
          <select
            name="saleCategory"
            value={coupon.saleCategory}
            onChange={handleInputChange}
          >
            {Object.values(SaleCategory)
              .filter((it) => it == SaleCategory.midDiscount)
              .map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </select>
        </label>
        <br />
        <button type="submit">Encrypt Coupon</button>
      </form>
      {/* Display errors in the DOM */}
      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <p>{error}</p>
        </div>
      )}
      {/* Display the encrypted coupon in the DOM */}
      {encryptedCoupon && !error && (
        <div style={{ marginTop: "10px" }}>
          <h2>Encrypted Coupon:</h2>
          <p>{encryptedCoupon}</p>
        </div>
      )}
    </div>
  );
};

export default EncryptCoupon;
