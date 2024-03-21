import { useState } from "react";
import Link from "next/link";
import styles from "styles/top.module.css";
import PageTabs from "src/types/e-page-tabs";
import PageNestedTabs from "src/types/e-page-nested-tabs";
import ISalesApi from "src/types/sales/i-sales-api";
import InternalRelativeApi from "src/types/e-internal-relative-api";
import { queryKeyFetchIsSaleDay } from "src/utils/client/constants";
import { useQuery } from "@tanstack/react-query";
import { MID_COURSE_PRICE_USD } from "src/utils/common/constants";
import { formatDuration } from "src/utils/client/utils";

interface ITabMenu {
  href: string;
  text: string;
}

const Top = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  async function fetchIsSaleDay(): Promise<ISalesApi> {
    const url = InternalRelativeApi.sales;
    const response = await fetch(url);
    const sales = await response.json();
    return sales;
  }

  const queryKey = [queryKeyFetchIsSaleDay];

  const { data } = useQuery({
    queryKey,
    queryFn: fetchIsSaleDay,
  });

  const tabs: ITabMenu[] = [
    { href: `/${PageTabs.home}`, text: "Home" },
    {
      href: `/${PageTabs.courses}/${PageNestedTabs.arbitrator}`,
      text: "Courses",
    },
    { href: `/${PageTabs.events}`, text: "Events" },
    { href: `/${PageTabs.testimonials}`, text: "Testimonials" },
    { href: `/${PageTabs.blog}`, text: "Blog" },
    { href: `/${PageTabs.about}`, text: "About" },
    { href: `/${PageTabs.contact}`, text: "Contact" },
    { href: `/${PageTabs.quiz}`, text: "Quiz" },
  ];

  const handleNavToggle = () => {
    setNavExpanded(!navExpanded);
  };

  const elemTabs = tabs.map((it, i) => (
    <Link
      key={i}
      href={it.href}
      onClick={() => setNavExpanded(false)}
      className={styles.navigationLink}
    >
      {it.text}
    </Link>
  ));

  const topSaleElem = data && data.isSalesDay && (
    <div className={styles.sale}>
      <div>
        <strong>Today only | </strong>
        <span>
          24-Hour Flash Sale ! All Courses at{" "}
          <strong>{MID_COURSE_PRICE_USD}$</strong>.
        </span>
      </div>
      {data && <strong>End in {formatDuration(data.expireInMs!)}</strong>}
    </div>
  );

  return (
    <div className={styles.Top}>
      <header className={styles.header}>
        {topSaleElem}
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
          <div className="container">
            <div className="navbar-brand">
              <h1>
                <span className={styles.nameColor}>Nathan</span> Krasney
              </h1>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="responsive-navbar-nav"
              aria-expanded={navExpanded ? "true" : "false"}
              aria-label="Toggle navigation"
              onClick={handleNavToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${
                navExpanded ? "show" : ""
              }`}
            >
              <ul className="navbar-nav ml-auto">{elemTabs}</ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Top;
