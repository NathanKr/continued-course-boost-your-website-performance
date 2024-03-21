import { FC, ReactNode } from "react";
import styles from 'styles/layout.module.css'
import Footer from 'src/components/footer'
import Top from 'src/components/top'

interface IProps{
    children : ReactNode
}

const Layout : FC<IProps> = ({ children }) => {
    return (
      <div className={styles.App}>
        <Top/>
        <main>{children}</main>
        <Footer />
      </div>
    )
  }

  export default Layout;